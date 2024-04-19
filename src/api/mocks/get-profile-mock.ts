import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'user-id-mock',
      name: 'John Doe',
      email: 'admin@admin.com',
      role: 'manager',
      phone: '99999999999',
      createdAt: new Date(),
      updatedAt: new Date(),
    })
  },
)
