/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
          {
            protocol: 'https',
            hostname:'images.unsplash.com',
            port: ''
          },
          {
            protocol: 'https',
            hostname:'res.cloudinary.com',
            port: ''
          },
          {
            protocol: 'https',
            hostname:'lh3.googleusercontent.com',
            port: ''
          }, 
          {
            protocol: 'https',
            hostname:'avatars.githubusercontent.com',
            port: ''
          }, 
          {
            protocol: 'https',
            hostname:'picsum.photos',
            port: ''
          }, 
        ] }
};

export default nextConfig;
