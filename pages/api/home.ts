import type { NextApiRequest, NextApiResponse } from 'next'

import homeImage from '../../public/images/home.png'
import reactImage from '../../public/images/react.png'
import graphqlImage from '../../public/images/graphql.png'
import stripejsImage from '../../public/images/stripejs.png'
import nodejsImage from '../../public/images/nodejs.jpg'
import sql from '../../public/images/sql.png'
import nosql from '../../public/images/nosql.png'
import versionning from '../../public/images/versionning.webp'
import redis from '../../public/images/redis.png'

const about = {
  image: homeImage.src,
  title: 'Sam corp',
  text: [
    'Fondée en 2012, Aventique est une agence de développement mobile et web basée à Paris, Fondée en 2012, Aventique est une agence de développement mobile et web basée à Paris',
    'Fondée en 2012, Aventique est une agence de développement mobile et web basée à Paris, Fondée en 2012, Aventique est une agence de développement mobile et web basée à Paris',
    'Fondée en 2012, Aventique est une agence de développement mobile et web basée à Paris, Fondée en 2012, Aventique est une agence de développement mobile et web basée à Paris'
  ]
}
const techStack = [
  {
    image: reactImage.src,
    name: 'react'
  },
  {
    image: graphqlImage.src,
    name: 'graphQL'
  },
  {
    image: stripejsImage.src,
    name: 'stripe js'
  },
  {
    image: nodejsImage.src,
    name: 'node js'
  },
  {
    image: sql.src,
    name: 'MySQL / PostgreSQL'
  },
  {
    image: nosql.src,
    name: 'MongoDB'
  },
  {
    image: versionning.src,
    name: 'git / gitHub / gitLab'
  },
  {
    image: redis.src,
    name: 'redis'
  }
]

const services = [
  {
    id: '01.',
    title: 'DÉVELOPPEMENT D’APPLICATIONS MOBILES',
    text: 'Fondée en 2012, Aventique fait partie des premières agences françaises à proposer le service de développement mobile. Conscients de la révolution que représentait cette technologie, nous y avons investi toutes nos forces, pour devenir aujourd’hui une agence parisienne reconnue.',
    image: homeImage.src,
    link: '/services',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    callToAction: 'Build mobile app Now'
  },
  {
    id: '02.',
    title: 'DÉVELOPPEMENT D’APPLICATIONS MOBILES',
    text: 'Fondée en 2012, Aventique fait partie des premières agences françaises à proposer le service de développement mobile. Conscients de la révolution que représentait cette technologie, nous y avons investi toutes nos forces, pour devenir aujourd’hui une agence parisienne reconnue.',
    image: homeImage.src,
    link: '/services',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    callToAction: 'Build mobile app Now'
  },
  {
    id: '03.',
    title: 'DÉVELOPPEMENT D’APPLICATIONS MOBILES',
    text: 'Fondée en 2012, Aventique fait partie des premières agences françaises à proposer le service de développement mobile. Conscients de la révolution que représentait cette technologie, nous y avons investi toutes nos forces, pour devenir aujourd’hui une agence parisienne reconnue.',
    image: homeImage.src,
    link: '/services',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    callToAction: 'Build mobile app Now'
  }
]
const reviews = [
  {
    review:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo',
    rate: 2.5,
    name: 'jane',

    avatar: homeImage.src,
    position: 'Lead'
  },
  {
    review:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo',
    rate: 2.5,
    name: 'jane',

    avatar: homeImage.src,
    position: 'Lead'
  },
  {
    review:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo',
    rate: 2.5,
    name: 'jane',

    avatar: homeImage.src,
    position: 'Lead'
  }
]
const projects = [
  {
    id: 0,
    image: homeImage.src,
    title: 'Book Summaries (Blog)',
    author: 'Sam',
    text: 'Blog on “Book Summaries” theme a community of readers who share summaries around the books they have read in the article'
  },
  {
    id: 1,
    image: homeImage.src,
    title: 'Admin Dashboard',
    author: 'Sam',
    text: 'Design and implementation of an admin dashboard'
  },
  {
    id: 2,
    image: homeImage.src,
    title: 'Recruitment web application',
    author: 'Sam',
    text: ' Implement a response web app from figma design (pixel perfect)'
  },
  {
    id: 3,
    image: homeImage.src,
    title: 'mobile app',
    app: 'mobile',
    text: 'Developing an mobile app with both client and server side with a team (spellz), taking notes with an AI assistant for salesman'
  }
]
const blogs = [
  {
    id: 1,
    image: homeImage.src,
    title: 'Book Summaries (Blog)',
    author: 'Sam',
    createdAt: '20/04/2022',
    text: [
      'Blog on “Book Summaries” theme a community of readers who share summaries around the books they have read in the article',
      'Blog on “Book Summaries” theme a community of readers who share summaries around the books they have read in the article',
      'Blog on “Book Summaries” theme a community of readers who share summaries around the books they have read in the article'
    ]
  },
  {
    id: 2,
    image: homeImage.src,
    title: 'Admin Dashboard',
    author: 'Sam',
    createdAt: '20/04/2022',
    text: [
      'Blog on “Book Summaries” theme a community of readers who share summaries around the books they have read in the article',
      'Blog on “Book Summaries” theme a community of readers who share summaries around the books they have read in the article',
      'Blog on “Book Summaries” theme a community of readers who share summaries around the books they have read in the article'
    ]
  },
  {
    id: 3,
    image: homeImage.src,
    title: 'Recruitment web application',
    author: 'Sam',
    createdAt: '20/04/2022',
    text: [
      'Blog on “Book Summaries” theme a community of readers who share summaries around the books they have read in the article',
      'Blog on “Book Summaries” theme a community of readers who share summaries around the books they have read in the article',
      'Blog on “Book Summaries” theme a community of readers who share summaries around the books they have read in the article'
    ]
  },
  {
    id: 4,
    image: homeImage.src,
    title: 'mobile app',
    author: 'Sam',
    createdAt: '20/04/2022',
    text: [
      'Blog on “Book Summaries” theme a community of readers who share summaries around the books they have read in the article',
      'Blog on “Book Summaries” theme a community of readers who share summaries around the books they have read in the article',
      'Blog on “Book Summaries” theme a community of readers who share summaries around the books they have read in the article'
    ]
  }
]

export default function homeHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }
  // Get data from your database
  res.status(200).json({
    about,
    techStack,
    services,
    reviews,
    projects,
    blogs
  })
}
