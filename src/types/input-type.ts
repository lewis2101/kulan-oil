export type FormInput = {
    id: number,
    label: string,
    value: string,
    cities: TypeCities[] | null
}

export type TypeCities = {
    id: number,
    address: string,
    selected: boolean
}

export type FormMenu = {
    active: boolean,
    id: number,
    label: string
}

export type ResultDistance = {
    distance: number,
    time: number,
    price: number
}