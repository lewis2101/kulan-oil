import {city} from '@/data/city'
import {TypeCities} from "@/types/input-type";
export const getCities = (): Promise<TypeCities[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = city.map(i => {
                i.selected = false
                return i
            })
            resolve(data)
        }, 0)
    })
}