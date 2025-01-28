export const updateQueryString = (key, value) => {
    const params = new URLSearchParams(window.location.search)
    value === 'All' ? params.delete(key) : params.set(key, value)
    return params.toString()
}
