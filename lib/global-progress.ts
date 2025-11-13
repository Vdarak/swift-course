/**
 * GLOBAL PROGRESS MANAGER
 * Centralized progress tracking with observer pattern
 * Single source of truth for all course progress
 */

import { courseStructure } from "./course-structure"

const STORAGE_KEY = "swiftcourse_progress"
const POSITION_KEY = "swiftcourse_position"

type ProgressListener = () => void

class GlobalProgressManager {
  private listeners: ProgressListener[] = []
  public currentModule: string | null = null
  public currentSection: string | null = null

  constructor() {
    if (typeof window !== "undefined") {
      this.init()
    }
  }

  private init() {
    // Load progress from localStorage
    const savedProgress = localStorage.getItem(STORAGE_KEY)
    if (savedProgress) {
      this.mergeProgress(JSON.parse(savedProgress))
    }

    // Load current position
    this.loadCurrentPosition()
  }

  private mergeProgress(savedProgress: any) {
    courseStructure.modules.forEach((module) => {
      const savedModule = savedProgress.modules?.find((m: any) => m.id === module.id)
      if (savedModule) {
        module.sections.forEach((section) => {
          const savedSection = savedModule.sections?.find((s: any) => s.id === section.id)
          if (savedSection) {
            section.completed = savedSection.completed
          }
        })
      }
    })
  }

  private loadCurrentPosition() {
    const saved = localStorage.getItem(POSITION_KEY)
    if (saved) {
      const { moduleId, sectionId } = JSON.parse(saved)
      this.currentModule = moduleId
      this.currentSection = sectionId
    }
  }

  setCurrentPosition(moduleId: string, sectionId: string) {
    this.currentModule = moduleId
    this.currentSection = sectionId

    localStorage.setItem(POSITION_KEY, JSON.stringify({ moduleId, sectionId }))
    this.notifyListeners()
  }

  markSectionComplete(moduleId: string, sectionId: string) {
    const module = courseStructure.modules.find((m) => m.id === moduleId)
    if (module) {
      const section = module.sections.find((s) => s.id === sectionId)
      if (section) {
        section.completed = true
        this.saveProgress()
        this.notifyListeners()
      }
    }
  }

  markSectionIncomplete(moduleId: string, sectionId: string) {
    const module = courseStructure.modules.find((m) => m.id === moduleId)
    if (module) {
      const section = module.sections.find((s) => s.id === sectionId)
      if (section) {
        section.completed = false
        this.saveProgress()
        this.notifyListeners()
      }
    }
  }

  private saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(courseStructure))
  }

  getModuleProgress(moduleId: string): number {
    const module = courseStructure.modules.find((m) => m.id === moduleId)
    if (!module) return 0

    const completed = module.sections.filter((s) => s.completed).length
    const total = module.sections.length
    return Math.round((completed / total) * 100)
  }

  getOverallProgress(): number {
    let totalSections = 0
    let completedSections = 0

    courseStructure.modules.forEach((module) => {
      totalSections += module.sections.length
      completedSections += module.sections.filter((s) => s.completed).length
    })

    return Math.round((completedSections / totalSections) * 100)
  }

  getCompletedSections(moduleId: string): string[] {
    const module = courseStructure.modules.find((m) => m.id === moduleId)
    if (!module) return []

    return module.sections.filter((s) => s.completed).map((s) => s.id)
  }

  getNextSection(): { moduleId: string; sectionId: string } | null {
    const currentModuleIndex = courseStructure.modules.findIndex((m) => m.id === this.currentModule)
    const currentModule = courseStructure.modules[currentModuleIndex]
    const currentSectionIndex = currentModule?.sections.findIndex((s) => s.id === this.currentSection)

    // Next section in current module
    if (currentSectionIndex !== undefined && currentSectionIndex < currentModule.sections.length - 1) {
      return {
        moduleId: this.currentModule!,
        sectionId: currentModule.sections[currentSectionIndex + 1].id,
      }
    }

    // First section of next module
    if (currentModuleIndex < courseStructure.modules.length - 1) {
      const nextModule = courseStructure.modules[currentModuleIndex + 1]
      return {
        moduleId: nextModule.id,
        sectionId: nextModule.sections[0].id,
      }
    }

    return null // Course complete
  }

  subscribe(callback: ProgressListener) {
    this.listeners.push(callback)
    return () => {
      this.listeners = this.listeners.filter((l) => l !== callback)
    }
  }

  private notifyListeners() {
    this.listeners.forEach((callback) => callback())
  }

  resetProgress() {
    if (typeof window === "undefined") return

    localStorage.removeItem(STORAGE_KEY)
    localStorage.removeItem(POSITION_KEY)

    // Reset in-memory structure
    courseStructure.modules.forEach((module) => {
      module.sections.forEach((section) => {
        section.completed = false
      })
    })

    this.currentModule = null
    this.currentSection = null
    this.notifyListeners()
  }

  getCourseStructure() {
    return courseStructure
  }
}

export const progressManager = new GlobalProgressManager()

export const GlobalProgress = progressManager
