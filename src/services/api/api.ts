import axios, { AxiosResponse } from "axios";
import { ItemListProps } from "../../components/HomeCard";

const api = axios.create({
    baseURL: 'https://fakestoreapi.com/'
});

export function getItemList(): Promise<AxiosResponse> {
    const url = 'products/1';

    return api.get(url)
        .then(response => {
            console.log(response.data['title']);
            return response;
        });
}

export interface getItemDetailsResponse {
	id: number;
	title: string;
	price: number;
	description: string;
	category?: string;
	image: string;
	rating?: (string)[] | null;
}

export function getItemDetails(id:number): Promise<AxiosResponse<getItemDetailsResponse, any>> {
	const url = `products/${id}`
	return api.get(url);
}
