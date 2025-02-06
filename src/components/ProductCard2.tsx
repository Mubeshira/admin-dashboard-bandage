
// 'use client'
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { client } from '@/sanity/lib/client';
// import { fetchData } from '@/services/api';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

// interface Card {
//   price: number;
//   name: string;
//   description: string;
//   image: string;
//   tags: string[];
// }

// function ProductCard2() {
//   const [cards, setCards] = useState<Card[]>([]);
//   const [filter, setFilter] = useState<string>("");

//   useEffect(() => {
//     const fetchCards = async () => {
//       const res: Card[] = await client.fetch(`*[_type == 'product'][]{
//         price,
//         name,
//         description,
//         tags,
//         'image': image.asset->url
//       }`);
//       setCards(res);
//     };
//     fetchCards();
//   }, []);

//   const filteredCards = filter
//     ? cards.filter((card) => {
//         console.log('Filter:', filter);
//         console.log('Tags:', card.tags); // Debugging: log tags to see the actual data
//         return Array.isArray(card.tags) && 
//           card.tags.some(tag => tag.toLowerCase().trim().includes(filter.toLowerCase().trim()));
//       })
//     : cards;

  

//   return (
//     <>
//       {/* Filter Button and Input */}
//       <div className='flex justify-center mt-10 gap-2'>
//       <button onClick={() => setFilter("")} className='bg-[#23A6F0] text-white px-4 py-2 rounded-md'>All</button>
//         <button onClick={() => setFilter("electronics")} className='bg-[#23A6F0] text-white px-4 py-2 rounded-md mr-2'>Electronics</button>
//         <button onClick={() => setFilter("jewelery")} className='bg-[#23A6F0] text-white px-4 py-2 rounded-md mr-2'>Jewelry</button>
//         <button onClick={() => setFilter("mens clothing")} className='bg-[#23A6F0] text-white px-4 py-2 rounded-md mr-2'>Mens Clothing</button>
       
//       </div>

//       {/* Product Cards */}
//       <div className="w-full py-10">
//         <h1 className="font-bold text-5xl text-[#252B42] flex justify-center mb-14 mt-9">
//           Popular Products
//         </h1>
//         <div className="mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4 mt-6 bg-slate-100">
//           {filteredCards.map((pic: Card, index: number) => (
//             <Link
//               key={index}
//               href={`/shops/shopsid?productCard2Heading=${pic.name}&productCard2SubHeading=${pic.description}&productCard2OriginalPrice=${pic.price}&productCard2Image=${pic.image}`}
//             >
//               <Card className="w-full max-w-[280px] mx-auto shadow-md hover:shadow-lg transition-shadow duration-300">
//                 {/* Image Section */}
//                 <div className="w-full h-[250px] overflow-hidden rounded-t-lg bg-gray-100 flex items-center justify-center">
//                   <Image
//                     src={pic.image}
//                     alt="Product Image"
//                     width={200}
//                     height={200}
//                     className=" w-[200px] h-[200px]"
//                   />
//                 </div>
//                 {/* Card Content */}
//                 <CardContent className="p-4">
//                   <CardHeader className="text-center">
//                     <CardTitle className="text-lg font-bold text-gray-800">
//                       {pic.name}
//                     </CardTitle>
//                     <CardDescription className="text-sm text-gray-600">
//                       {pic.tags.join(", ")}
//                     </CardDescription>
//                     <p className="text-sm text-gray-800 mt-2">${pic.price}</p>
//                   </CardHeader>
//                   <div className="mt-2 flex justify-center">
//                     <Image
//                       src="/col.png"
//                       alt="Rating"
//                       width={82}
//                       height={16}
//                     />
//                   </div>
//                 </CardContent>
//               </Card>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default ProductCard2;




// function setSearchQuery(query: any) {
//   throw new Error('Function not implemented.');
// }






import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { fetchData } from '@/services/api';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface Card {
  price: number;
  name: string;
  description: string;
  image: string;
  tags: string[];
}

export default async function ProductCard2() {
      const res: Card[] = await client.fetch(`*[_type == 'product'][]{
        price,
        name,
        description,
        tags,
        'image': image.asset->url
      }`);
     if (!res || res.length === 0) {
       fetchData();
     }

  return (
    <>
     

      {/* Product Cards */}
      <div className="w-full py-10">
        <h1 className="font-bold text-5xl text-[#252B42] flex justify-center mb-14 mt-9">
          Popular Products
        </h1>
        <div className="mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4 mt-6 bg-slate-100">
          {res.map((pic: Card, index: number) => (
            <Link
              key={index}
              href={`/shops/shopsid?productCard2Heading=${pic.name}&productCard2SubHeading=${pic.description}&productCard2OriginalPrice=${pic.price}&productCard2Image=${pic.image}`}
            >
              <Card className="w-full max-w-[280px] mx-auto shadow-md hover:shadow-lg transition-shadow duration-300">
                {/* Image Section */}
                <div className="w-full h-[250px] overflow-hidden rounded-t-lg bg-gray-100 flex items-center justify-center">
                  <Image
                    src={pic.image}
                    alt="Product Image"
                    width={200}
                    height={200}
                    className=" w-[200px] h-[200px]"
                  />
                </div>
                {/* Card Content */}
                <CardContent className="p-4">
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg font-bold text-gray-800">
                      {pic.name}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600">
                      {pic.tags.join(", ")}
                    </CardDescription>
                    <p className="text-sm text-gray-800 mt-2">${pic.price}</p>
                  </CardHeader>
                  <div className="mt-2 flex justify-center">
                    <Image
                      src="/col.png"
                      alt="Rating"
                      width={82}
                      height={16}
                    />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}






function setSearchQuery(query: any) {
  throw new Error('Function not implemented.');
}
