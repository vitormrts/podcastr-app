export function convertDurationToTimeString(duration: number) {
    const hours = Math.floor(duration / 3600)
    const minutes = Math.floor((duration % 3600) / 60)
    const seconds = duration % 60

    const timeString = [hours, minutes, seconds]
        .map(unit => String(unit).padStart(2, '0')) // adiciona o 0 caso tenha somente 1 casa
            .join(":")

    return timeString
}