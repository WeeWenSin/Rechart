import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from '../types/Post';

export const apiService = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    //GET : 获取post
    getPosts: builder.query<Post[],{limit: number; offset: number}>({
      query: ({limit, offset}) => `/posts?_limit=${limit}&_offset=${offset}`,//request address = baseURL + 'posts'
    }),
    //POST : 加post
    createPost: builder.mutation<Post,Omit<Post,'id'>>({
      query: (newPost) => ({
        url: 'posts',
        method: 'POST',
        body: newPost,
      }),
    }),
    //PUT or PATCH 
    updatePost: builder.mutation<{ id:Number; title: string; body:string}, {id:number; title:string; body: string}>({
      query: (updatePost) => ({
        url: `/posts/${updatePost.id}`,
        method:'PUT',
        body: updatePost,
      }),
    }),
    //DELETE
    deletePost: builder.mutation<{ success: boolean }, number>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});
// 
// auto generate Hook
export const { useGetPostsQuery, useCreatePostMutation,useUpdatePostMutation,useDeletePostMutation} = apiService;
