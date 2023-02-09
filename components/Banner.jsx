import { client } from "lib/config";
import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { GiConverseShoe } from "react-icons/gi";
import {AiOutlineArrowRight,AiOutlineArrowLeft} from "react-icons/ai"
import styles from "@/styles";
import useEmblaCarousel from "embla-carousel-react";

export default function Banner({ data }) {
  const imageProps = useNextSanityImage(client, data.image);
  const [bannerCarousel] = useEmblaCarousel()
  return (
    <main className={`w-full h-[100vh] flex`}>
      <div className="border-r-2 border-slate-200 px-2 h-full w-[10%]">
        <div className="w-full bg-black my-2">
          <GiConverseShoe className="text-white text-6xl mx-auto" />
        </div>
      </div>
      <div className="px-4 h-full w-screen">
        <div className={`h-4/6 relative w-full ${styles.flexCenter}`}>
          <h1 className="col-span-3 text-8xl text-slate-300 font-black inset-0 bottom-0 text-center">
            {data.title.toUpperCase()}
          </h1>
          <div className="absolute right-1 bottom-10 w-[20%]">
              <h4 className="font-black text-2xl">{data.shoe_model}</h4>
              <p>{data.description.substring(0,60)} ...</p>
            </div>
          <div className="absolute inset-x-0 bottom-0 w-full lg:w-1/2 mx-auto">
            <Img
              {...imageProps}
              style={{ width: "auto", height: "100%" }} // layout="responsive" prior to Next 13.0.0
              sizes="(max-width: 800px) 100vw, 800px"
              placeholder="blur"
              blurDataURL={data.image.asset.metadata.lqip}
              alt="shoe"
            />
          </div>
        </div>
        <div className="h-2/6 flex justify-between items-center">
          <div>indicator</div>
          <div>
            <div>
              <button><AiOutlineArrowLeft/></button>
              <button><AiOutlineArrowRight/></button>
            </div>
            <div className="embla" ref={bannerCarousel}>
              <div className="embla__container">
              <div className="embla__slider">shoe 1</div>
              <div className="embla__slider">shoe 2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
