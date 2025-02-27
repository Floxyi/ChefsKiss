export const Difficulty = {
    ALL: { value: 'ALL', label: 'All' },
    EASY: { value: 'EASY', label: 'Easy' },
    MEDIUM: { value: 'MEDIUM', label: 'Medium' },
    HARD: { value: 'HARD', label: 'Hard' }
}

export const DifficultyLabels = Object.fromEntries(Object.values(Difficulty).map((item) => [item.value, item.label]))

export const DifficultyValues = Object.fromEntries(Object.values(Difficulty).map((item) => [item.label, item.value]))

export const DifficultyOptions = Object.values(Difficulty)
    .filter((item) => item.value !== 'ALL')
    .map((item) => item.label)

export const DifficultyOptionsFull = Object.values(Difficulty).map((item) => item.label)
