import { groq } from "next-sanity";
import { client } from "./config";
export default async function getBanner() {
  const banner = await client.fetch(groq`*[_type=="banner"]{
        _id,
        description,
        image,
        shoe_model,
        title,
        features[]->{_id,
                     name,
                     price,
                     shoes_images
                    }
       }`);
  return banner;
}
