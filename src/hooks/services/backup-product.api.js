import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const productApi = createApi({
    reducerPath: 'product',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/'}),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: ()=> `products/categories`
        }),
        getProductsByCategory: builder.query({
            query: (category) => `products/category/${category}/?limit=6`
        }),
        getProductById:builder.query({
            query: (productId) => `products/${productId}`
        })
    })
});


export const {
    useGetCategoriesQuery,
    useGetProductsByCategoryQuery,
    useGetProductByIdQuery
} = productApi;