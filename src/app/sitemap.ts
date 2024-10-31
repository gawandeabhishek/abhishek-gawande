import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap>  {
      
    return [
         {
            url: `${`${process.env. NEXT_PUBLIC_BASE_URL}/`}`,
            lastModified:  new Date(),
            priority: 1,
         },
         {
            url: `${`${process.env. NEXT_PUBLIC_BASE_URL}/about`}`,
            lastModified:  new Date(),
            priority: 0.9,
         },
         {
            url: `${`${process.env. NEXT_PUBLIC_BASE_URL}/chat`}`,
            lastModified:  new Date(),
            priority: 0.4,
         },
         {
            url: `${`${process.env. NEXT_PUBLIC_BASE_URL}/contact`}`,
            lastModified:  new Date(),
            priority: 0.5,
         },
         {
            url: `${`${process.env. NEXT_PUBLIC_BASE_URL}/projects`}`,
            lastModified:  new Date(),
            priority: 0.8,
         },
         {
            url: `${`${process.env. NEXT_PUBLIC_BASE_URL}/skills`}`,
            lastModified:  new Date(),
            priority: 0.7,
         },
    ]
}