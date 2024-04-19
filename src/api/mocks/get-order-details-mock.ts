import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'
import { orders } from './list-orders-mock'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  const order = orders.find((order) => order.id === params.orderId)

  if (!order) {
    throw new Error()
  }

  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: order.customerName,
      email: 'admin@admin.com',
      phone: '99999999999',
    },
    status: order.status,
    createdAt: order.createdAt,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: (order.totalInCents * (2 / 3)) / 2,
        product: { name: 'Pizza broto' },
        quantity: 2,
      },
      {
        id: 'order-item-2',
        priceInCents: order.totalInCents / 3,
        product: { name: 'Refrigerante 2L' },
        quantity: 1,
      },
    ],
    totalInCents: order.totalInCents,
  })
})
