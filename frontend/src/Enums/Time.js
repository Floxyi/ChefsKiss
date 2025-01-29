export const Time = {
    ALL: { value: 'ALL', label: 'All' },
    SHORT: { value: 'SHORT', label: 'Short (~ 30 min)' },
    MEDIUM: { value: 'MEDIUM', label: 'Medium (~ 60 min)' },
    LONG: { value: 'LONG', label: 'Long (> 60 min)' }
}

export const TimeLabels = Object.fromEntries(
    Object.values(Time).map((item) => [item.value, item.label])
)

export const TimeValues = Object.fromEntries(
    Object.values(Time).map((item) => [item.label, item.value])
)
