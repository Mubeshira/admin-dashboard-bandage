

// src\components\ProductCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { procards } from '../constant/procards';
import { client } from '@/sanity/lib/client';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

async function ProductCard() {
  const res = await client.fetch("*[_type=='landingPage'][0].sections[3]{'productCardSectionHeading':productCardSectionHeading,'productCardSectionHeading2':productCardSectionHeading2,'productCardSectionPara':productCardSectionPara,'productCard':productCard[]{'productCardImage':productCardImage.asset->url,'productCardHeading':productCardHeading,'productCardSubHeading':productCardSubHeading,'productCardOriginalPrice':productCardOriginalPrice,'productCardSalePrice':productCardSalePrice   }} ")



  return (
    <>
      <div className="w-full flex justify-center px-4 sm:px-8">
        <div className="w-full max-w-[1124px] py-10 sm:py-20 flex flex-col gap-10 sm:gap-20">
          {/* Text Section */}
          <div className="w-full flex flex-col gap-2.5 justify-center items-center text-center">
            <h4 className="font-Montserrat font-normal text-sm sm:text-lg text-gray-500">
              {res.productCardSectionHeading}
            </h4>
            <h3 className="font-Montserrat font-bold text-xl sm:text-2xl lg:text-3xl text-gray-800">
              {res.productCardSectionHeading2}
            </h3>
            <p className="font-Montserrat font-normal text-xs sm:text-sm text-gray-500">
              {res.productCardSectionPara}
            </p>
          </div>

          {/* Cards Section */}
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {(res.productCard).map((product: any, index: number) => (
              <div key={index} className="flex flex-col items-center">
               <Link href={"/shops"}> <Image
                  src={res.productCard[index].productCardImage}
                  alt={product.name}
                  width={700}
                  height={300}
                  className="rounded-lg object-cover  hover:scale-105 transition-transform duration-300 ease-in-out"
                /></Link>
                <div className="flex flex-col items-center text-center mt-10">
                  <h3 className="font-Montserrat font-bold text-base sm:text-lg text-gray-800">
                    {res.productCard[index].productCardHeading}
                  </h3>
                  <h6 className="font-Montserrat font-medium text-sm text-gray-600">
                    {res.productCard[index].productCardSubHeading}
                  </h6>
                  <pre className="font-Montserrat font-normal text-sm text-gray-800">
                    $ {res.productCard[index].productCardOriginalPrice}     $ {res.productCard[index].productCardSalePrice}
                  </pre>
                  <Image
                    src="/col.png"
                    alt="Rating"
                    width={82.23}
                    height={16}
                    className="mt-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;



