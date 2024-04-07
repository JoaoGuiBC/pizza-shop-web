import { api } from '@/lib/axios'

export interface ListOrdersQuery {
  pageIndex?: number | null
  orderId?: string | null
  customerName?: string | null
  status?: string | null
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

export async function listOrders({
  pageIndex,
  customerName,
  orderId,
  status,
}: ListOrdersQuery) {
  console.log(status)
  const response = await api.get<ListOrdersResponse>('/orders', {
    params: {
      pageIndex: pageIndex || 0,
      customerName,
      orderId,
      status: status === 'all' ? null : status,
    },
  })

  return response.data
}
