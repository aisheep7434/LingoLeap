export interface StudyStats {
  totalCards: number
  studiedCards: number
  correctRate: number
  averageTime: number
  streak: number
}

export interface UserProgress {
  level: number
  experience: number
  nextLevelExp: number
  totalDecks: number
  completedDecks: number
}