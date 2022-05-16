import { request } from './_http'

export async function GET_HOME_DATA() {
  try {
    const response = await request('get', `/home`)
    if (response) {
      return response
    }
  } catch (err: any) {
    return err.message
  }
}
