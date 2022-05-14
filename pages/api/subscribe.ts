import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../lib/prisma'

const subscribeHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }
  console.log(req.body)
  const new_subscribe = await prisma.subscribe.create({ data: req.body })
  console.log(new_subscribe)

  return res.status(201).json({ message: 'subscribe saved', data: new_subscribe })
}

export default subscribeHandler
