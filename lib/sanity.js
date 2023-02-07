import { groq } from "next-sanity";
import { client } from "./config";
export default async function getBanner (){
    const banner = await client.fetch(groq`*[_type=='banner']`);   
    const features = [];
    for(let feature in banner.features){
        console.log(feature)
    }
    return banner;
}