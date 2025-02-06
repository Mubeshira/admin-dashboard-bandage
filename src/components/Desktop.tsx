import React from 'react'
import Image from 'next/image'

function Desktop() {
  return (
    <>
      <div>
            <Image 
          src={"/desktop.png"} 
          alt="clients" 
          width={1440} 
          height={80} 
          className="w-full h-auto sm:h-[80px] md:h-[100px] lg:h-[120px] xl:h-[140px]" 
        />
      </div>
    </>
  )
}

export default Desktop
