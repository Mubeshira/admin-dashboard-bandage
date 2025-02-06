import React from 'react'
import Image from 'next/image'
import { FaFacebook, FaInstagramSquare, FaTwitter } from 'react-icons/fa'
import { client } from '@/sanity/lib/client'

async function MeetOurTeam() {
  const res= await client.fetch(`*[_type == 'aboutPage'][0].sections[2]{
  'meetTheTeamSectionHeading':meetTheTeamSectionHeading,
    'meetTheTeamSectionPara':meetTheTeamSectionPara,
    'meetTheTeamCard':meetTheTeamCard[]{
    'meetTheTeamCardImage':meetTheTeamCardImage.asset->url,
    'meetTheTeamCardHeading':meetTheTeamCardHeading,
    'meetTheTeamCardSubHeading':meetTheTeamCardSubHeading  ,
    }
}`)

  return (
    <>
      <div className='w-full flex justify-center px-4'>
               <div className='w-full max-w-[1050px] flex flex-col items-center'>
                 <div className='text-center mt-16 mb-12'>
                   <h1 className='text-3xl sm:text-4xl font-bold text-[#252B42]'>{res.meetTheTeamSectionHeading}</h1>
                   <p className='text-sm sm:text-base text-[#737373] mt-4'>{res.meetTheTeamSectionPara}</p>
                 </div>
                 <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                   {(res.meetTheTeamCard).map((src:any,index:number) => (
                     <div key={index} className='flex flex-col items-center'>
                       <Image src={res.meetTheTeamCard[index].meetTheTeamCardImage} alt='Team Member' width={329} height={383} className='rounded-lg' />
                       <h2 className='mt-4 text-lg font-bold text-[#252B42]'>{res.meetTheTeamCard[index].meetTheTeamCardHeading}</h2>
                       <p className='text-sm text-[#737373]'>{res.meetTheTeamCard[index].meetTheTeamCardSubHeading}</p>
                       <div className='flex gap-4 text-[#23A6F0] mt-2'>
                         <FaFacebook />
                         <FaInstagramSquare />
                         <FaTwitter />
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
             </div>
      
    </>
  )
}

export default MeetOurTeam
