export function formatDate(date: Date): string {
    const month = date.toLocaleString('en-us', { month: 'long' })
    const day = date.getDate()
    const year = date.getFullYear()
    return `${month} ${day}, ${year}`
}
