import axios from 'axios'

const API_URL = 'http://localhost:4000/api'

export const request = async (
  method: string,
  route: string,
  params?: any,
  data?: any,
  headers = {}
) => {
  // const token = await getToken();
  // console.log(headers)

  const response = await axios({
    url: API_URL + route,
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers
    },
    data: data,
    params: params
  })

  return response.data
}
