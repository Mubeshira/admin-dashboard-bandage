
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';

async function EditorsPick() {
  const res = await client.fetch("*[_type =='landingPage'][0].sections[1]{'editorsPickSectionHeading':editorsPickSectionHeading,'editorsPickSectionPara':editorsPickSectionPara,'editorsPick':editorsPick[]{'cardSecImg':cardSecImg.asset->url,'cardSecBtn':cardSecBtn }}  ")
 
 

  return (
    <>
      <div className="w-full min-h-[770px] bg-[#FAFAFA] flex justify-center flex-col px-4 xsm:px-6 sm:px-8">
        <div className="mt-8 xsm:mt-10 sm:mt-[80px]">
          {/* Header Section */}
          <div className="w-full text-center max-w-lg md:max-w-xl mx-auto">
            <h3 className="font-Montserrat text-base xsm:text-lg sm:text-2xl lg:text-3xl text-[#252B42] font-semibold leading-6 sm:leading-[32px]">
              {res.editorsPickSectionHeading}
            </h3>
            <p className="mt-2 text-sm xsm:text-base sm:text-base font-Montserrat text-[#252B42]">
              {res.editorsPickSectionPara}
            </p>
          </div>

          {/* Images Section */}
          <Link href={"/shops"}><div className="mt-10 xsm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xsm:gap-6">
            {/* Men Image */}
            <div className="relative w-full aspect-[5/6] xsm:aspect-[4/5] md:aspect-[10/12]  hover:scale-105 transition-transform duration-300 ease-in-out">
              <Image 
                src={res.editorsPick[0].cardSecImg}
                alt="image1" 
                layout="fill" 
                objectFit="cover" 
              />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 xsm:px-6 sm:px-10 py-2 font-Montserrat font-bold text-[#252B42] leading-6 hover:bg-gray-100">
              {res.editorsPick[0].cardSecBtn}
             
              </button>
            </div>

            {/* Women Image */}
            <div className="relative w-full aspect-[4/5] xsm:aspect-[10/12]  hover:scale-105 transition-transform duration-300 ease-in-out">
              <Image 
               
              
              src={res.editorsPick[1].cardSecImg}
                alt="women" 
                layout="fill" 
                objectFit="cover" 
              />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 xsm:px-6 py-2 font-Montserrat font-bold text-[#252B42] leading-6 hover:bg-gray-100">
              {res.editorsPick[1].cardSecBtn}
              </button>
            </div>

            {/* Accessories and Kids Section */}
            <div className="grid grid-cols-1 gap-4 h-auto w-full lg:h-[500px] lg:w-[240px]">
              {/* Accessories */}
              <div className="relative w-full aspect-[4/5] xsm:aspect-[10/12]  hover:scale-105 transition-transform duration-300 ease-in-out">
                <Image
                  src={res.editorsPick[2].cardSecImg}
                  alt="accessories"
                  objectFit="cover"
                  layout="responsive"
                  width={240}
                  height={242}
                />
                {/* Uncomment the button below if needed */}
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 mb-8 bg-white px-4 xsm:px-6 py-2 font-Montserrat font-bold text-[#252B42] leading-6 hover:bg-gray-100">
                {res.editorsPick[2].cardSecBtn}
                </button>
              </div>

              {/* Kids */}
              <div className="relative w-full aspect-[4/5] xsm:aspect-[10/12]   hover:scale-105 transition-transform duration-300 ease-in-out">
                <Image
                  src={res.editorsPick[3].cardSecImg}
                  alt="kids"
                  objectFit="cover"
                  layout="responsive"
                  width={240}
                  height={242}
                />
                {/* Uncomment the button below if needed */}
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 xsm:px-6 py-2 font-Montserrat font-bold text-[#252B42] leading-6 hover:bg-gray-100">
                {res.editorsPick[3].cardSecBtn}
                </button>
              </div>
            </div>
          </div></Link>
        </div>
      </div>
    </>
  );
}

export default EditorsPick;





// ...........



// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { client } from '@/sanity/lib/client';

// async function EditorsPick() {
//   const res = await client.fetch(
//     "*[_type =='landingPage'][0].sections[1]{'editorsPickSectionHeading':editorsPickSectionHeading,'editorsPickSectionPara':editorsPickSectionPara,'editorsPick':editorsPick[]{'cardSecImg':cardSecImg.asset->url,'cardSecBtn':cardSecBtn }}  "
//   );

//   return (
//     <>
//       <div className="w-full min-h-[770px] bg-[#FAFAFA] flex justify-center flex-col px-4 xsm:px-6 sm:px-8">
//         <div className="mt-8 xsm:mt-10 sm:mt-[80px]">
//           {/* Header Section */}
//           <div className="w-full text-center max-w-lg md:max-w-xl mx-auto">
//             <h3 className="font-Montserrat text-base xsm:text-lg sm:text-2xl lg:text-3xl text-[#252B42] font-semibold leading-6 sm:leading-[32px]">
//               {res.editorsPickSectionHeading}
//             </h3>
//             <p className="mt-2 text-sm xsm:text-base sm:text-base font-Montserrat text-[#252B42]">
//               {res.editorsPickSectionPara}
//             </p>
//           </div>

//           {/* Images Section */}
//           <Link href="/shops">
//             <div className="mt-10 xsm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xsm:gap-6">
//               {/* Men Image */}
//               <div className="relative w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] hover:scale-105 transition-transform duration-300 ease-in-out">
//                 <Image
//                   src={res.editorsPick[0].cardSecImg}
//                   alt="Men"
//                   layout="fill"
//                   objectFit="cover"
//                 />
//                 <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 xsm:px-6 sm:px-10 py-2 font-Montserrat font-bold text-[#252B42] leading-6 hover:bg-gray-100">
//                   {res.editorsPick[0].cardSecBtn}
//                 </button>
//               </div>

//               {/* Women Image */}
//               <div className="relative w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] hover:scale-105 transition-transform duration-300 ease-in-out">
//                 <Image
//                   src={res.editorsPick[1].cardSecImg}
//                   alt="Women"
//                   layout="fill"
//                   objectFit="cover"
//                 />
//                 <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 xsm:px-6 sm:px-10 py-2 font-Montserrat font-bold text-[#252B42] leading-6 hover:bg-gray-100">
//                   {res.editorsPick[1].cardSecBtn}
//                 </button>
//               </div>

//               {/* Accessories and Kids Section */}
//               <div className="grid grid-cols-1 gap-4 lg:grid-rows-2 lg:w-full">
//                 {/* Accessories */}
//                 <div className="relative w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] hover:scale-105 transition-transform duration-300 ease-in-out">
//                   <Image
//                     src={res.editorsPick[2].cardSecImg}
//                     alt="Accessories"
//                     layout="fill"
//                     objectFit="cover"
//                   />
//                   <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 xsm:px-6 sm:px-10 py-2 font-Montserrat font-bold text-[#252B42] leading-6 hover:bg-gray-100">
//                     {res.editorsPick[2].cardSecBtn}
//                   </button>
//                 </div>

//                 {/* Kids */}
//                 <div className="relative w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] hover:scale-105 transition-transform duration-300 ease-in-out">
//                   <Image
//                     src={res.editorsPick[3].cardSecImg}
//                     alt="Kids"
//                     layout="fill"
//                     objectFit="cover"
//                   />
//                   <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 xsm:px-6 sm:px-10 py-2 font-Montserrat font-bold text-[#252B42] leading-6 hover:bg-gray-100">
//                     {res.editorsPick[3].cardSecBtn}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }

// export default EditorsPick;
