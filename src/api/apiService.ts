import axios, { AxiosResponse } from "axios"
import apiInstance from "."

// Define an interface for the API response data

interface ApiResponse<T> {
    data: T;
    status: number;
    statusText: string;
}

// Define an interface for the API service

export interface IApiService {
    get<T>(url: string, params?: Record<string, any>): Promise<ApiResponse<T>>;
}

// Implement the ApiService interface using the Axios instance

const ApiService: IApiService = {
    async get<T>(url: string, params?: Record<string, any>): Promise<ApiResponse<T>> {
        try{
            const response: AxiosResponse<T> = await apiInstance.get(url, {params});
            return {
                data: response.data,
                status: response.status,
                statusText: response.statusText
            }
        }catch(error){
            throw new Error(`Api request failed, please wait...., ${error}`);
        }
    }
}

export default ApiService;





// export const ApiService = () => {
//     const get = ({url: string, params: any}) => {
//         apiInstance.get(url, params)
//     } 
// }

