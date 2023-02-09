import { client } from "lib/config";
import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { GiConverseShoe } from "react-icons/gi";

export default function Banner({ data }) {
  const imageProps = useNextSanityImage(client, data.image);
  return (
    <main className={`w-full h-[100vh] flex`}>
      <div className="border-r-2 border-slate-200 px-2 h-full w-[10%]">
        <div className="w-full bg-black my-2">
          <GiConverseShoe className="text-white text-6xl mx-auto" />
        </div>
      </div>
      <div className="px-4 h-full w-screen">
        <div className="h-4/6 relative w-full">
          <h1 className="absolute text-8xl text-slate-300 font-black inset-0 text-center">
            {data.title.toUpperCase()}
          </h1>
          <div className="absolute inset-x-0 bottom-0 h-[80%]">
            <Img
            className="mx-auto"
              {...imageProps}
              style={{ width: "auto", height: "100%" }} // layout="responsive" prior to Next 13.0.0
              sizes="(max-width: 800px) 100vw, 800px"
              placeholder="blur"
              blurDataURL={data.image.asset.metadata.lqip}
            />
          </div>
        </div>
        <div className="h-2/6">best sellers</div>
      </div>
    </main>
  );
}
