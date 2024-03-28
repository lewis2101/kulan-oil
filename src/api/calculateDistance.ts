import {distance} from '@/data/distance'
export const postDistance = (from: number, to: number): Promise<number> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = distance.find(i => i.from === from && i.to === to)
            if(!result) result = distance.find(i => i.from === to && i.to === from)
            resolve(result.value)
        }, 0)
    })
}