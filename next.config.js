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
  },
  env: {
    mapbox_key: "pk.eyJ1IjoiYXNodXRvc2gyMjExMDEiLCJhIjoiY2xoYnZ6cWU1MHZqMzN0bnRzaWthajdoZSJ9.MCjgl3MqyevtY24n3ZEYGg"
  }

}
// domains: ['https://links.papareact.com/qd3'],

// module.exports = {

// }

module.exports = nextConfig
