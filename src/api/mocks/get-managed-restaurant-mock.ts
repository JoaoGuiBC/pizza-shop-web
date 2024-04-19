import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'restaurant-id-mock',
    name: 'Pizza Shop',
    description: 'Mocked restaurant description.',
    managerId: 'user-id-mock',
    createdAt: new Date(),
    updatedAt: new Date(),
  })
})
