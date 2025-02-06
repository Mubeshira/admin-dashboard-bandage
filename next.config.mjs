// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         remotePatterns: [
//           {
//             protocol: 'https',
//             hostname: 'cdn.sanity.io',
//             port: '',
//             pathname: '**',
//             search: '',
            
//           },
//         ],
//       },
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'cdn.sanity.io',
              pathname: '**',
          },
          {
              protocol: 'https',
              hostname: 'randomuser.me',
              pathname: '**',
          },
      ],
  },
};

export default nextConfig;
