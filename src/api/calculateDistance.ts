import {AxiosResponse} from "axios";
import {ResultDistance} from "@/types/input-type";
import {http} from "@/plugins/http";

export const calculateDistance = (from: number, to: number): Promise<AxiosResponse<ResultDistance>> => http().post('/calculate', { from, to })