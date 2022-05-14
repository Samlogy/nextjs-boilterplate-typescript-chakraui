import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../lib/prisma'

const contactHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }
  console.log(req.body)
  const new_contact = await prisma.contact.create({ data: req.body })
  console.log(new_contact)

  return res.status(201).json({ message: 'contact saved', data: new_contact })
}

export default contactHandler
