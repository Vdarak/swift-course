/**
 * COURSE STRUCTURE
 * Centralized definition of all modules and sections
 * Single source of truth for course content
 */

export interface Section {
  id: string
  title: string
  completed: boolean
}

export interface Module {
  id: string
  title: string
  sections: Section[]
}

export interface CourseStructure {
  modules: Module[]
}

export const courseStructure: CourseStructure = {
  modules: [
    {
      id: "module-0",
      title: "Module 0: Introduction",
      sections: [
        { id: "about-swiftcourse", title: "About Swiftcourse", completed: false },
        { id: "the-problem", title: "The Problem", completed: false },
        { id: "our-solution", title: "Our Solution", completed: false },
        { id: "the-product", title: "The Product", completed: false },
        { id: "strategic-model", title: "Strategic Model", completed: false },
        { id: "big-five-factors", title: "Big Five Factors", completed: false },
        { id: "action-plan", title: "Action Plan", completed: false },
        { id: "summary", title: "Summary", completed: false },
      ],
    },
    {
      id: "module-1",
      title: "Module 1: Neurobiology & Growth Mindset",
      sections: [
        { id: "never-split-difference", title: "Never Split the Difference", completed: false },
        { id: "neurology-goal-seeking", title: "Neurology of Goal Seeking", completed: false },
        { id: "mad-analysis", title: "MAD Analysis", completed: false },
        { id: "growth-mindset", title: "Growth Mindset", completed: false },
        { id: "mindset-discoveries", title: "Mindset Discoveries", completed: false },
        { id: "elevated-stress", title: "Elevated Stress Levels", completed: false },
        { id: "stress-achievement", title: "Does Stress Limit Achievement", completed: false },
        { id: "goals-improvement", title: "Goals and Improvement", completed: false },
        { id: "interactive-quiz", title: "Interactive Quiz", completed: false },
      ],
    },
    {
      id: "module-2",
      title: "Module 2: Learning, Habits & Measurement",
      sections: [
        { id: "module-overview", title: "Module Overview", completed: false },
        { id: "process-of-learning", title: "The Process of Learning", completed: false },
        { id: "limbic-friction", title: "Limbic Friction", completed: false },
        { id: "making-mistakes", title: "Making Mistakes", completed: false },
        { id: "learning-styles", title: "Learning Styles", completed: false },
        { id: "absorptive-capacity", title: "Building Absorptive Capacity", completed: false },
        { id: "perfectionism-spiral", title: "Perfectionism Spiral", completed: false },
        { id: "self-judgment", title: "Self-Judgment", completed: false },
        { id: "harmonious-passion", title: "Harmonious Passion", completed: false },
        { id: "task-bracketing", title: "Task Bracketing", completed: false },
        { id: "21-day-protocol", title: "21-Day Habit Protocol", completed: false },
        { id: "context-independent", title: "Context-Independent Habits", completed: false },
        { id: "key-takeaways", title: "Key Takeaways", completed: false },
        { id: "module-assessment", title: "Module Assessment", completed: false },
      ],
    },
  ],
}
