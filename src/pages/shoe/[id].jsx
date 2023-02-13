import { useState } from "react";
import { getShoeById } from "lib/sanity";
import Navbar from "components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs,Navigation } from "swiper";
import Img from "next/image";
import styles from "@/styles";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
          <div className="flex flex-col gap-4">
            <div className="h-2/3 bg-slate-100">
            <Swiper
              thumbs={{ swiper: thumSlider }}
              modules={[Thumbs,Navigation]}
            >
              {shoe.shoes_images.map((img) => (
                <SwiperSlide key={img.asset._id}>
                  <img
                    className="h-96 mx-auto"
                    src={img.asset.url}
                    alt={img.asset._id}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            </div>
            <div className="h-1/3">
            <Swiper
              slidesPerView={3}
              spaceBetween={10}
            //   onSwiper={(swiper)=>setThumSlider(swiper)}
              modules={[Thumbs]}
            >
              {shoe.shoes_images.map((img) => (
                <SwiperSlide className="bg-slate-100" key={`thumb-${img.asset._id}`}>
                  <img className="h-20 mx-auto" src={img.asset.url} alt={img.asset._id} />
                </SwiperSlide>
              ))}
            </Swiper>
            </div>
          </div>
          
          <div className="flex flex-col gap-3 justify-evenly">
            <div className="flex justify-between">
              <h1 className="font-black uppercase text-2xl lg:text-4xl">
                {shoe.name}
              </h1>
              {/* <span>{shoe.gender}</span> */}
            </div>
            <p className="text-justify text-lg">{shoe.description}</p>
            <div>
              <h3 className="text-slate-400 text-xl">Tallas disponibles:</h3>
              <div className="flex gap-2">
                {shoe.size.map((item) => (
                  <div
                    className={`${styles.flexCenter} rounded-full bg-slate-200 h-10 w-16 inline-flex`}
                  >
                    {item.size}
                  </div>
                ))}
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
