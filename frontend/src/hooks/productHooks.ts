import { useQuery } from "@tanstack/react-query"
import apiClient from "../apiClient"
import { Product } from "../types/Product"

export const useGetProductsQuery = () =>
    useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const { data } = await apiClient.get<Product[]>('api/products')
            return data
        },
    })

export const useGetProductDetailsBySlugQuery = (slug: string) =>
    useQuery({
        queryKey: ['products', slug],
        queryFn: async () => {
            const { data } = await apiClient.get<Product>(`api/products/${slug}`)
            return data
        },
    })
