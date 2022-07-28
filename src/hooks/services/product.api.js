import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const productApi = createApi({
    reducerPath: 'product',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyproducts-api.herokuapp.com/api/v1/'}),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: ()=> `departments`
        }),
        getProductsByCategory: builder.query({
            query: (categoryId) => `departments/${categoryId}`
        }),
        getProductByName:builder.query({
            query: (productId) => `products/${productId}`
        })
    })
});


export const {
    useGetCategoriesQuery,
    useGetProductsByCategoryQuery,
    useGetProductByNameQuery
} = productApi;