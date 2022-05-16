import type { NextApiRequest, NextApiResponse } from 'next'

export default function homeHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }
  // Get data from your database
  res.status(200).json({
    data: 'data'
  })
}
