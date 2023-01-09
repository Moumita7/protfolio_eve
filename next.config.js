/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    unoptimized:true,
    remotePatterns:[
      {
        protocol:"https",
        hostname:"avatars.githubusercontent.com",
        port:"",
        pathname:"/u/97180521**"
     
      }
    ]
  }
}

module.exports = nextConfig
