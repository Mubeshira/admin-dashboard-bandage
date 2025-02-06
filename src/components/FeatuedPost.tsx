
// import { client } from "@/sanity/lib/client";
// import Image from "next/image";

// export default async function FeaturedPost() {
//   const posts = [
//     {
//       image: "/post1.png",
//       title: "Loudest à la Madison #1 (L'integral)",
//       description:
//         "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
//       date: "22 April 2021",
//       comments: "10 comments",
//     },
//     {
//       image: "/post2.png",
//       title: "Loudest à la Madison #1 (L'integral)",
//       description:
//         "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
//       date: "22 April 2021",
//       comments: "10 comments",
//     },
//     {
//       image: "/post3.png",
//       title: "Loudest à la Madison #1 (L'integral)",
//       description:
//         "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
//       date: "22 April 2021",
//       comments: "10 comments",
//     },
//   ];

//   const res = await  client.fetch(`*[_type == 'landingPage'][0].sections[5]{
//   'featuredPostSectionHeading':featuredPostSectionHeading,
//   'featuredPostSectionHeading2':featuredPostSectionHeading2,
//   'featuredPostSectionPara':featuredPostSectionPara,
//   'featuredPost':featuredPost[]{
//   'featuredPostImage':featuredPostImage.asset->url,
//   'featuredPostBtn' :featuredPostBtn,
//   'featuredPostHeading':featuredPostHeading,
//   'featuredPostSubHeading':featuredPostSubHeading,
//   'featuredPostParagraph':featuredPostParagraph,
//    'featuredPostDate':featuredPostDate,
//    'featuredPostComments':featuredPostComments  
// }
// }`)

//   return (
//     <div className="bg-gray-50 py-8 px-4 flex flex-col">
//       {/* Header Section */}
//       <div className="text-center mb-12">
//         <p className="text-blue-500 font-semibold uppercase">{res.featuredPostSectionHeading}</p>
//         <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 sm:text-4xl">
//           {res.featuredPostSectionHeading2}
//         </h2>
//         <p className="mt-3 text-sm md:text-base text-gray-500">
//           {res.featuredPostSectionPara}
//         </p>
//       </div>

//       {/* Posts Section */}
//       <div className="grid grid-cols-1 exsm:grid-cols-1 xsm:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
//         {(res.featuredPost).map((post: any, index:number) => (
//           <div
//             key={index}
//             className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
//           >
//             <div className="relative">
//               <Image
//                 src={res.featuredPost[index].featuredPostImage}
//                 alt={"post"}
//                 width={348}
//                 height={300}
//                 className="w-full  object-cover"
//               />
//               <span className="absolute top-2 left-2 bg-red-500 text-white text-xs uppercase px-2 py-1 rounded">
//                 {post.featuredPostBtn}
//               </span>
//             </div>
//             <div className="p-4 md:p-6 flex flex-col flex-grow">
//               <p className="text-xs md:text-sm text-gray-500 mb-1">
//                 {res.featuredPost[index].featuredPostHeading}
//               </p>
//               <h3 className="text-sm md:text-lg font-semibold text-gray-900">
//                 {res.featuredPost[index].featuredPostSubHeading}
//               </h3>
//               <p className="mt-2 text-xs md:text-sm text-gray-500">
//                 {res.featuredPost[index].featuredPostParagraph}
//               </p>
//               <div className="mt-4 flex items-center justify-between text-xs md:text-sm text-gray-500">
//                 <div className="flex items-center space-x-2">
//                   <svg
//                     className="h-4 w-4 text-gray-400"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path d="M6 2a6 6 0 0112 0v8a6 6 0 11-12 0V2zM2 14a4 4 0 014-4h8a4 4 0 014 4v2H2v-2z" />
//                   </svg>
//                   <span>{res.featuredPost[index].featuredPostDate}</span>
//                   <span className="hidden exsm:block">|</span>
//                   <span>{res.featuredPost[index].featuredPostComments}comments</span>
//                 </div>
//                 <a
//                   href="#"
//                   className="text-blue-500 font-semibold hover:underline"
//                 >
//                   Learn More →
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import { client } from "@/sanity/lib/client";
import Image from "next/image";

export default async function FeaturedPost() {
  const res = await client.fetch(`*[_type == 'landingPage'][0].sections[5]{
    'featuredPostSectionHeading':featuredPostSectionHeading,
    'featuredPostSectionHeading2':featuredPostSectionHeading2,
    'featuredPostSectionPara':featuredPostSectionPara,
    'featuredPost':featuredPost[] {
      'featuredPostImage':featuredPostImage.asset->url,
      'featuredPostBtn':featuredPostBtn,
      'featuredPostHeading':featuredPostHeading,
      'featuredPostSubHeading':featuredPostSubHeading,
      'featuredPostParagraph':featuredPostParagraph,
      'featuredPostDate':featuredPostDate,
      'featuredPostComments':featuredPostComments
    }
  }`);

  return (
    <div className="bg-gray-50 py-8 px-4 flex flex-col">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-blue-500 font-semibold uppercase">{res.featuredPostSectionHeading}</p>
        <h2 className="text-2xl xsm:text-3xl sm:text-4xl font-extrabold text-gray-900">
          {res.featuredPostSectionHeading2}
        </h2>
        <p className="mt-3 text-sm xsm:text-base sm:text-lg text-gray-500">
          {res.featuredPostSectionPara}
        </p>
      </div>

      {/* Posts Section */}
      <div className="grid grid-cols-1 xsm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {res.featuredPost.map((post: any, index: number) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
          >
            {/* Image Section */}
            <div className="relative">
              <Image
                src={post.featuredPostImage}
                alt={`Post ${index + 1}`}
                width={348}
                height={300}
                className="w-full object-cover"
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs xsm:text-sm uppercase px-2 py-1 rounded">
                {post.featuredPostBtn}
              </span>
            </div>

            {/* Content Section */}
            <div className="p-4 sm:p-6 flex flex-col flex-grow">
              <p className="text-xs sm:text-sm text-gray-500 mb-1">
                {post.featuredPostHeading}
              </p>
              <h3 className="text-sm sm:text-lg font-semibold text-gray-900">
                {post.featuredPostSubHeading}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-500">
                {post.featuredPostParagraph}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs sm:text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M6 2a6 6 0 0112 0v8a6 6 0 11-12 0V2zM2 14a4 4 0 014-4h8a4 4 0 014 4v2H2v-2z" />
                  </svg>
                  <span>{post.featuredPostDate}</span>
                  <span className="hidden sm:block">|</span>
                  <span>{post.featuredPostComments} comments</span>
                </div>
                <a
                  href="#"
                  className="text-blue-500 font-semibold hover:underline"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
