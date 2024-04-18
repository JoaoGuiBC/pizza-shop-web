import { render } from '@testing-library/react'

import { OrderStatus } from './order-status'

type Status = {
  status: OrderStatus
  text: string
  badge: string
}

const statuses: Status[] = [
  { status: 'pending', text: 'Pendente', badge: 'bg-slate-400' },
  { status: 'processing', text: 'Em preparo', badge: 'bg-amber-500' },
  { status: 'delivering', text: 'Em entrega', badge: 'bg-amber-500' },
  { status: 'delivered', text: 'Entregue', badge: 'bg-emerald-500' },
  { status: 'canceled', text: 'Cancelado', badge: 'bg-rose-500' },
]

describe('Order Status', () => {
  it('should display the right text based on order status', () => {
    statuses.forEach((status) => {
      const wrapper = render(<OrderStatus status={status.status} />)

      const statusText = wrapper.getByText(status.text)
      const badgeElement = wrapper.getByTestId('badge')

      expect(statusText).toBeInTheDocument()
      expect(badgeElement).toHaveClass(status.badge)

      wrapper.unmount()
    })
  })
})
