export const formatSum = (sum: string) =>
    sum.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

export const formatTime = (time: number) => {
    const hour = Math.floor(time / 60)
    const minutes = time % 60
    return `${hour} ч ${minutes} мин`
}