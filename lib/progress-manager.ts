/**
 * GLOBAL PROGRESS MANAGER
 * Centralized state management for all course progress
 * Handles completion tracking, progress calculation, and persistence
 */

// Storage key for all course progress
const STORAGE_KEY = "swiftcourse-global-progress"

// Type definitions for progress data
export interface ModuleProgress {
  completedSections: number[]
  currentSection: number
  quizResults?: Record<string, any>
  lastUpdated: string
}

export interface GlobalProgress {
  modules: Record<string, ModuleProgress>
  version: string
}

/**
 * Initialize progress data structure
 */
function initializeProgress(): GlobalProgress {
  return {
    modules: {},
    version: "1.0",
  }
}

/**
 * Load progress from localStorage
 */
export function loadProgress(): GlobalProgress {
  if (typeof window === "undefined") return initializeProgress()

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return initializeProgress()

    const parsed = JSON.parse(stored) as GlobalProgress
    return parsed
  } catch (error) {
    console.error("[v0] Failed to load progress:", error)
    return initializeProgress()
  }
}

/**
 * Save progress to localStorage
 */
export function saveProgress(progress: GlobalProgress): void {
  if (typeof window === "undefined") return

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  } catch (error) {
    console.error("[v0] Failed to save progress:", error)
  }
}

/**
 * Get progress for a specific module
 */
export function getModuleProgress(moduleId: string): ModuleProgress {
  const progress = loadProgress()

  const moduleData = progress.modules[moduleId]

  if (!moduleData) {
    return {
      completedSections: [],
      currentSection: 0,
      lastUpdated: new Date().toISOString(),
    }
  }

  // Ensure completedSections is always an array
  return {
    ...moduleData,
    completedSections: Array.isArray(moduleData.completedSections) ? moduleData.completedSections : [],
    currentSection: moduleData.currentSection ?? 0,
  }
}

/**
 * Update progress for a specific module
 */
export function updateModuleProgress(moduleId: string, updates: Partial<ModuleProgress>): void {
  const progress = loadProgress()

  progress.modules[moduleId] = {
    ...progress.modules[moduleId],
    ...updates,
    lastUpdated: new Date().toISOString(),
  }

  saveProgress(progress)
}

/**
 * Mark a section as complete
 */
export function markSectionComplete(moduleId: string, sectionIndex: number): void {
  const moduleProgress = getModuleProgress(moduleId)

  const completedSections = Array.isArray(moduleProgress.completedSections) ? moduleProgress.completedSections : []

  if (!completedSections.includes(sectionIndex)) {
    completedSections.push(sectionIndex)
    completedSections.sort((a, b) => a - b)
  }

  updateModuleProgress(moduleId, { ...moduleProgress, completedSections })
}

/**
 * Set current section
 */
export function setCurrentSection(moduleId: string, sectionIndex: number): void {
  updateModuleProgress(moduleId, { currentSection: sectionIndex })
}

/**
 * Get completion percentage for a module
 */
export function getModuleCompletionPercentage(moduleId: string, totalSections: number): number {
  const moduleProgress = getModuleProgress(moduleId)
  return Math.round((moduleProgress.completedSections.length / totalSections) * 100)
}

/**
 * Check if a module is complete
 */
export function isModuleComplete(moduleId: string, totalSections: number): boolean {
  const moduleProgress = getModuleProgress(moduleId)
  return moduleProgress.completedSections.length >= totalSections
}

/**
 * Get overall course completion
 */
export function getOverallCompletion(moduleTotals: Record<string, number>): {
  completedModules: number
  totalModules: number
  percentage: number
} {
  const progress = loadProgress()
  const moduleIds = Object.keys(moduleTotals)

  const completedModules = moduleIds.filter((id) => isModuleComplete(id, moduleTotals[id])).length

  return {
    completedModules,
    totalModules: moduleIds.length,
    percentage: Math.round((completedModules / moduleIds.length) * 100),
  }
}

/**
 * Reset all progress
 */
export function resetAllProgress(): void {
  if (typeof window === "undefined") return

  try {
    localStorage.removeItem(STORAGE_KEY)
    // Also remove old module-specific keys for backwards compatibility
    localStorage.removeItem("module-0-progress")
    localStorage.removeItem("module-1-progress")
  } catch (error) {
    console.error("[v0] Failed to reset progress:", error)
  }
}

/**
 * Save quiz results for a module
 */
export function saveQuizResults(moduleId: string, results: Record<string, any>): void {
  updateModuleProgress(moduleId, { quizResults: results })
}

/**
 * Get quiz results for a module
 */
export function getQuizResults(moduleId: string): Record<string, any> | undefined {
  const moduleProgress = getModuleProgress(moduleId)
  return moduleProgress.quizResults
}
