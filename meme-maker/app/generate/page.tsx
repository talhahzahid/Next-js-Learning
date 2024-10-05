"use client"
import React from 'react'
import Image from 'next/image';

const Generate = (props : {searchParams:{id : string , url : string }}) => {
    console.log(props.searchParams);
  return (
      <>
      <h1 className='text-center'>Generate Memes</h1> 
    <div className='flex justify-center'>
    <Image src={props.searchParams.url}  width={300} height={300} alt='no-image '/>
    </div>
    <div className='text-center mt-5'>
    <input
  type="text"
  placeholder="Type here"
  className="input input-bordered input-success w-full max-w-xs" /> <br /> <br />
        <input
  type="text"
  placeholder="Type here"
  className="input input-bordered input-success w-full max-w-xs" /> <br /> <br />
        <button className='btn btn-primary'>Generate Meme</button>
    </div>
    </>
  )
}

export default Generate