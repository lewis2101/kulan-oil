import {TypeCities} from "@/types/input-type";
import {AxiosResponse} from "axios";
import {http} from "@/plugins/http";
export const getCities = (): Promise<AxiosResponse<TypeCities[]>> => http().get('/getCity')