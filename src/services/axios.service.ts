import axios, {AxiosResponse} from "axios";
import {baseURL} from "../constants";

let axiosService = axios.create({baseURL});

export type Res<T> = Promise<AxiosResponse<T>>;


export {
    axiosService
}