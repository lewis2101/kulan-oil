import {distance} from '@/data/distance'
export const calculateDistance = (from: number, to: number): Promise<number> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = distance.find(i => i.from === from && i.to === to)
            if(!result) result = distance.find(i => i.from === to && i.to === from)
            resolve({
                distance: result.value,
                time: Math.floor(Math.random() * 1000),
                price: Math.floor(Math.random() * 30000)
            })
        }, 0)
    })
}