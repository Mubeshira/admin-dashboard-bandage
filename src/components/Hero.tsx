



import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';

async function Hero() {
  const res = await client.fetch(
    "*[_type == 'landingPage'] [0]{'heroHeading': sections[0].heroHeading,'heroHeading2':sections[0].heroHeading2,'heroHeadingParagraph':sections[0].heroHeadingParagraph,'heroHeadingButton':sections[0].heroHeadingButton,'heroImage':sections[0].heroImage.asset->url,}  "
  );

  const {
    heroHeading,
    heroHeading2,
    heroHeadingParagraph,
    heroHeadingButton,
    heroImage,
  } = await res;

  return (
    <>
      <div className="w-full h-[716px] relative m-0 p-0">
        <Image
          src={heroImage}
          alt="hero"
          width={1438}
          height={716}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-[40%] left-[10%] xsm:w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%]">
          <div className="font-Montserrat text-white xsm:text-sm md:text-base lg:text-lg">
            <h1>
              <span>{heroHeading}</span>
            </h1>
          </div>
          <h1 className="font-Montserrat text-white mt-4 xsm:text-2xl sm:text-3xl md:text-4xl lg:text-[58px]">
            <span>{heroHeading2}</span>
          </h1>
          <p className="font-Montserrat text-white mt-4 xsm:text-xs sm:text-sm md:text-base lg:text-[20px] leading-[1.5]">
            <span>{heroHeadingParagraph}</span>
          </p>
          <Link href={"/shops"}>
            <Button className="bg-[#2DC071] mt-4 xsm:w-[120px] xsm:h-[40px] sm:w-[140px] sm:h-[50px] md:w-[160px] md:h-[56px] lg:w-[170px] lg:h-[62px]">
              {heroHeadingButton}
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;

