import { http, HttpResponse } from 'msw'

import type { ListOrdersResponse } from '../list-orders'

type Orders = ListOrdersResponse['orders']
type OrderStatus = ListOrdersResponse['orders'][number]['status']

const statuses: OrderStatus[] = [
  'canceled',
  'delivered',
  'delivering',
  'pending',
  'processing',
]

export const orders: Orders = Array.from({ length: 60 }).map((_, i) => ({
  id: `order-${i + 1}`,
  customerName: `Customer ${i + 1}`,
  customerId: `customer-${i + 1}`,
  restaurantId: `restaurant-${i + 1}`,
  createdAt: new Date().toISOString(),
  totalInCents: Math.random() * 10000,
  status: statuses[i % 5],
}))

export const listOrdersMock = http.get<never, never, ListOrdersResponse>(
  '/orders',
  ({ request }) => {
    const { searchParams } = new URL(request.url)

    const pageIndex = searchParams.get('pageIndex')
      ? Number(searchParams.get('pageIndex'))
      : 0

    const customerName = searchParams.get('customerName')
    const orderId = searchParams.get('orderId')
    const status = searchParams.get('status')

    let filteredOrders = orders

    if (customerName) {
      filteredOrders = filteredOrders.filter((order) =>
        order.customerName.includes(customerName),
      )
    }
    if (orderId) {
      filteredOrders = filteredOrders.filter((order) =>
        order.id.includes(orderId),
      )
    }
    if (status) {
      filteredOrders = filteredOrders.filter((order) => order.status === status)
    }

    const paginatedOrders = filteredOrders.slice(
      pageIndex * 10,
      (pageIndex + 1) * 10,
    )

    return HttpResponse.json({
      orders: paginatedOrders,
      meta: { pageIndex, perPage: 10, totalCount: filteredOrders.length },
    })
  },
)
