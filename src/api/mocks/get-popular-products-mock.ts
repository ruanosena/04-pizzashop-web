import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza Toscana', amount: 5 },
    { product: 'Pizza Muçarela', amount: 2 },
    { product: 'Pizza Fafá', amount: 6 },
    { product: 'Pizza Marguerita', amount: 8 },
    { product: 'Pizza 4 Queijos', amount: 7 },
  ])
})
