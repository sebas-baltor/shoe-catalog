import { useState } from "react";
import { getShoeById } from "lib/sanity";
import Navbar from "components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation } from "swiper";
import Img from "next/image";
import styles from "@/styles";
import "swiper/css";
import "swiper/css/navigation";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "lib/config";

export default function Shoe({ shoe }) {
  const intl = new Intl.NumberFormat("en-US");

  const [thumSlider, setThumSlider] = useState();
  return (
    <>
      <Navbar />
      <section className={`${styles.paddings} h-screen`}>
        <div
          className={`${styles.innerWidth} mx-auto grid grid-cols-1 lg:grid-cols-2 items-center h-full gap-4`}
        >
          <div className="flex flex-col gap-4 ">
            <div className="h-2/3 bg-slate-100">
              <Swiper
                thumbs={{ swiper: thumSlider }}
                modules={[Thumbs, Navigation]}
                className="cursor-grabbing"
              >
                {shoe.shoes_images.map((img, i) => {
                  const imgPropsFirstSliders = useNextSanityImage(client, img);
                  return (
                    <SwiperSlide key={img.asset._id}>
                      <Img
                        key={`key-${img._id}`}
                        {...imgPropsFirstSliders}
                        className="h-48 lg:h-96 mx-auto w-auto object-contain"
                        style={{ width: "auto" }} // layout="responsive" prior to Next 13.0.0
                        sizes="(max-width: 800px) 100vw, 800px"
                        placeholder="blur"
                        blurDataURL={img.asset.metadata.lqip}
                        alt={`${shoe.name}-image-${i}`}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="h-1/3">
              <Swiper
                slidesPerView={3}
                spaceBetween={10}
                onSlideChange={setThumSlider}
                modules={[Thumbs]}
              >
                {shoe.shoes_images.map((img, i) => {
                  const imgPropsSecondSlider = useNextSanityImage(client, img);
                  return (
                    <SwiperSlide
                      className="bg-slate-100 hover:bg-slate-200 cursor-pointer"
                      key={`thumb-${img.asset._id}`}
                    >
                      <Img
                        key={`key-${img._id}`}
                        {...imgPropsSecondSlider}
                        className="h-14 lg:h-20 mx-auto object-contain"
                        style={{ width: "auto" }} // layout="responsive" prior to Next 13.0.0
                        sizes="(max-width: 800px) 100vw, 800px"
                        placeholder="blur"
                        blurDataURL={img.asset.metadata.lqip}
                        alt={`${shoe.name}-image2-${i}`}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>

          <div className="flex flex-col gap-3 justify-evenly">
            <div className="flex justify-between">
              <h1 className="font-black uppercase text-2xl lg:text-4xl">
                {shoe.name}
              </h1>
            </div>
            <p className="text-justify text-lg">{shoe.description}</p>
            <div>
              <h3 className="text-slate-400 text-xl">Tallas disponibles:</h3>
              <div className="flex gap-2 font-semibold">
                {shoe.size.map((item, i) =>
                  i !== shoe.size.length - 1 ? (
                    <span>{item.size} - </span>
                  ) : (
                    <span>{item.size}</span>
                  )
                )}
              </div>
            </div>
            <div className="font-black tracking-wide text-2xl lg:text-4xl self-end">
              ${intl.format(shoe.price)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export async function getServerSideProps({ query }) {
  const { id } = query;
  const shoe = await getShoeById(id);
  return {
    props: {
      shoe,
    },
  };
}
