import React from 'react'
import Image from 'next/image'

export const Cards = ({nombre}) => {
  return (
    <div className='w-auto mt-5 border-2 border-gray-100 m-auto'>
      <Image
        src="/bottle-1.png"
        alt="LOGO"
        width={250}
        height={250}
        className='rounded w-auto'
      />
      <h1 className='text-center p-3 font-medium text-xl'>
        {nombre}
      </h1>
      <div className='flex flex-col pb-5'> 
        <button className=' place-self-center w-fit m-1 px-2 p-1 text-l text-[#5A33AD] border-2 border-[#29184D] rounded'>
          Amazon</button>
        <button className=' place-self-center w-fit m-1 px-2 p-1 text-l text-white bg-[#29184D] rounded'>Mercado Libre</button>
      </div>
    </div>
  )
}
