/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "links.papareact.com",
        port: '',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: "a0.muscache.com",
        port: '',
        pathname: '**'
      },
    ],
  }

}
// domains: ['https://links.papareact.com/qd3'],

// module.exports = {

// }

module.exports = nextConfig
