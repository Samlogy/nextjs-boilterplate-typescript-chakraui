import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Heading } from '@chakra-ui/react'

export default function Users ({ users }: { users: any}) {
  return (
    <div>
      <Heading> Users </Heading>
      <ul>
      {users.map(user => (
        <Link href={'/users/' + user.id} key={user.id}>
          <a> <h3> { user.name } </h3> </a>
        </Link>
      ))}
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();

  return{
    props: {
      users: data
    }
  }
}
