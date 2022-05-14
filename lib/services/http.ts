const API_URL = 'http://localhost:3000/api'

export const request = async (method: string, route: string, data?: any, headers = {}) => {
  // const token = await getToken();

  let res = await fetch(API_URL + route, {
    method: method,
    body: data,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers
    }
  })
  res = await res.json()
  return res
}
