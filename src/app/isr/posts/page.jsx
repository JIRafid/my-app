import React from 'react'

export default function Posts() {
  return (
   <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold"> Static Site Generation</h1>
      <ul className='flex flex-col gap-4 list-image-[url(/checkmark.svg)] m-5>'>
       <li  className='pl-2'>Post Title 1</li>
       <li  className='pl-2'>Post Title 2</li>
       <li  className='pl-2'>Post Title 3</li>
       <li  className='pl-2'>Post Title 4</li>
        
      </ul>
    </div>

  )
}
