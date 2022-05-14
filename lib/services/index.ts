import { request } from './http'

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

export async function CONTACT(data) {
  try {
    const response = await request('post', `/contact`, data)
    if (response) {
      return response
    }
  } catch (err: any) {
    return err.message
  }
}

export async function SUBSCRIBE(data) {
  try {
    const response = await request('post', `/subscribe`, data)
    if (response) {
      return response
    }
  } catch (err: any) {
    return err.message
  }
}

export async function GET_SINGLE_BLOG(id) {
  try {
    const response = await request('get', `/blog/${id}`)
    if (response) {
      return response
    }
  } catch (err: any) {
    return err.message
  }
}

export async function GET_BLOGS() {
  try {
    const response = await request('get', `/blog`)
    if (response) {
      return response
    }
  } catch (err: any) {
    return err.message
  }
}
