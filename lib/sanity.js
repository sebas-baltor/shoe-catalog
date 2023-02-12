import { groq } from "next-sanity";
import { client } from "./config";
export async function getBanner() {
  return await client.fetch(groq`*[_type=="banner"][0]{
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
        shoes_images[0]{
          asset->{
            ...,
            metadata
          }
        }
      }
  }
  `);
}

export async function getBasicShoesInfo(){
  return await client.fetch(groq`*[_type=="shoe"]{
    _id,
    name,
    description,
    price,
    shoes_images[0]{
      asset->{
        ...,
        metadata
      }
    }
  }`)
}

export async function getShoeById(id){
  return await client.fetch(groq`*[_type=="shoe"&&_id=="${id}"]{
    _id,
      description,
      gender->{
        gender
      },
      name,
      price,
      shoes_images[]{
        asset->{
          ...,
          metadata
        }
      },
    size[]->{
      size
    },
      types[]->{
        type
      }
      
  }`)
}