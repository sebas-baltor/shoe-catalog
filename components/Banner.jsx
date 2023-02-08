import { client } from "lib/config";
import Image from "next/image";
// import { useNextSanityImage } from "next-sanity-image";
// import { ImageUrlBuilder } from "next-sanity-image";
import imageUrlBuilder from "@sanity/image-url";
export default function Banner({ data }) {
  const builder = imageUrlBuilder(client)
  function urlFor(source){
    return builder.image(source)
  }
  // const imgBannerProps = useNextSanityImage(client, data.image);
  return (
    <main className={`w-full h-[100vh] flex`}>
      <div className="border-r-2 border-slate-200 px-2 h-full">decoration</div>
      <div className="px-4 h-full">
        <div className="h-4/6">
          <img src={urlFor(data.image).width(200)} alt="banner"/>
        </div>
        <div className="h-2/6">best sellers</div>
      </div>
    </main>
  );
}
