import {distance as distanceList} from '@/data/distance'

const calculateTime = (dist: number) => {
    if(dist < 100) return 1440
    if(dist < 499) return 2880
    if(dist > 500) return 5760
}

export const calculateDistance = (from: number, to: number): Promise<number> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = distanceList.find(i => i.from === from && i.to === to)
            if(!result) result = distanceList.find(i => i.from === to && i.to === from)

            const time = calculateTime(result.value)
            resolve({
                distance: result.value,
                time,
                price: time / 60 * result.value
            })
        }, 0)
    })
}