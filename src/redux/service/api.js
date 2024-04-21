import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiService = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
  tagTypes: ['Review', 'Restaurant'],
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => ({ url: 'restaurants' }),
    }),
    getMenuByRestaurantId: builder.query({
      query: (restaurantId) => ({
        url: 'dishes',
        params: { restaurantId },
      }),
    }),
    getDishByDishId: builder.query({
      query: (dishId) => `dish/${dishId}`,
    }),
    getReviewsByRestaurantId: builder.query({
      query: (restaurantId) => ({
        url: 'reviews',
        params: { restaurantId },
      }),
      providesTags: (result, _, restaurantId) => [
        ...result.map(({ id }) => ({ type: 'Review', id })),
        { type: 'Review', id: 'ALL' },
        { type: 'Restaurant', id: restaurantId },
      ],
      // providesTags: (result, _, restaurantId) =>
      //   result
      //     .map(({ id }) => ({ type: 'Review', id }))
      //     .concat(
      //       { type: 'Review', id: 'ALL' },
      //       { type: 'Restaurant', id: restaurantId }
      //     ),
    }),
    createReview: builder.mutation({
      query: ({ restaurantId, newReview }) => ({
        url: `review/${restaurantId}`,
        method: 'POST',
        body: newReview,
      }),
      invalidatesTags: (result, _, { restaurantId }) => [
        { type: 'Restaurant', id: restaurantId },
      ],
    }),
    updateReview: builder.mutation({
      query: ({ review }) => ({
        url: `review/${review.id}`,
        method: 'PATCH',
        body: review,
      }),
      invalidatesTags: (result, _, { review }) => [
        { type: 'Review', id: review.id },
      ],
    }),
    getUsers: builder.query({
      query: () => ({ url: 'users' }),
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetMenuByRestaurantIdQuery,
  useGetDishByDishIdQuery,
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
  useCreateReviewMutation,
  useUpdateReviewMutation,
} = apiService;
