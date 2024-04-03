import { api } from '@/lib/axios'

export interface GetManagedRestaurantResponse {
  description: string | null
  id: string
  name: string
  createdAt: Date
  updatedAt: Date
  managerId: string | null
}

export async function getManagedRestaurant() {
  const response = await api.get<GetManagedRestaurantResponse>(
    '/managed-restaurant',
  )

  return response.data
}
