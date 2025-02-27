export const Time = {
    ALL: { value: 'ALL', label: 'All' },
    SHORT: { value: 'SHORT', label: '30 min' },
    MEDIUM: {
        value: 'MEDIUM',
        label: '60 min'
    },
    LONG: { value: 'LONG', label: '> 60 min' }
}

export const TimeLabels = Object.fromEntries(Object.values(Time).map((item) => [item.value, item.label]))

export const TimeValues = Object.fromEntries(Object.values(Time).map((item) => [item.label, item.value]))

export const TimeOptions = Object.values(Time)
    .filter((item) => item.value !== 'ALL')
    .map((item) => item.label)

export const TimeOptionsFull = Object.values(Time).map((item) => item.label)
