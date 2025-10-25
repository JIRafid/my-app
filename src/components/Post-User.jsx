import React from 'react'
import Button from './Button'

export default async function PostUser({userId}) {
  const res= await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user= await res.json();
  
  
    return (
    <div className='border border-gray-700 p-4'>
        <Button> {user.name} </Button>


    </div>
  )
}
