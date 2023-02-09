import { groq } from "next-sanity";
import { client } from "./config";
export default async function getBanner() {
  const banner = await client.fetch(groq`*[_type=="banner"][0]{
    _id,
      description,
    image{
      asset->{
        ...,
        metadata
      }
    },
    shoe_model,
      title,
      features[]->{
        _id,
        name,
        price,
        shoes_images[]{
          asset->{
            ...,
            metadata
          }
        }
      }
  }
  `);
  return banner;
}
