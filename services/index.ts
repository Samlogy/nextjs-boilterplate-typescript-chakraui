import { request } from './http'

export async function LOGOUT_USER() {
  try {
    const response = await request('get', `/user/logout`)
    if (response) {
      return response.data
    }
  } catch (err: any) {
    return err.response.data
  }
}
