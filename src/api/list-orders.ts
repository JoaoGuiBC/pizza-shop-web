import { api } from '@/lib/axios'

export interface ListOrdersQuery {
  pageIndex?: number | null
}

export interface ListOrdersResponse {
  orders: {
    id: string
    status: 'pending' | 'processing' | 'delivering' | 'delivered' | 'canceled'
    restaurantId: string
    createdAt: string
    customerId: string | null
    totalInCents: number
    customerName: string
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function listOrders({ pageIndex }: ListOrdersQuery) {
  const response = await api.get<ListOrdersResponse>('/orders', {
    params: {
      pageIndex: pageIndex || 0,
    },
  })

  return response.data
}
