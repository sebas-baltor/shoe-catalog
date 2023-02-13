import { client } from "lib/config";
import Img from "next/image";
import Link from "next/link";
import { useNextSanityImage } from "next-sanity-image";
import { GiConverseShoe } from "react-icons/gi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
// import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import styles from "@/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Banner({ data }) {
  const swiperRef = useRef();
  const swiperIndex = useRef();
  const swiperBreackpoints = {
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    }
  };
  const imageProps = useNextSanityImage(client, data.image);

  return (
    <main className={`${styles.bannerPaddings}`}>
      <div className={`${styles.innerWidth} mx-auto flex h-[100vh] `}>
        <div className="border-r-2 border-slate-200 px-2 h-full w-[5%]">
          <div className="w-full bg-black my-2">
            <GiConverseShoe className="text-white text-6xl mx-auto" />
          </div>
        </div>
        <div className="pl-4 h-full w-full">
          <div className={`h-4/6 relative w-full ${styles.flexCenter}`}>
            <h1 className="col-span-3 text-8xl text-slate-300 font-black inset-0 bottom-0 text-center">
              {data.title.toUpperCase()}
            </h1>
            <div className="absolute right-1 bottom-10 w-[20%]">
              <h4 className="font-black text-2xl">{data.shoe_model}</h4>
              <p>{data.description.substring(0, 60)}...</p>
            </div>
            <div className="absolute inset-x-0 bottom-0 w-full md:w-1/2 mx-auto">
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
          <div className="h-2/6 grid grid-cols-3">
            <div className="flex items-end gap-1 mb-10">
              <div ref={swiperIndex} className="font-black text-2xl">
                01
              </div>
              <div className="relative w-1/2 rounded-sm">
                <div id="custom_pagination" className="h-2 w-full"></div>
              </div>
            </div>
            <div className="col-span-2 flex items-end">
              <div className="flex flex-col justify-end">
                <button
                  className="w-10 h-10 bg-slate-500 text-white hover:bg-black"
                  onClick={() => swiperRef.current.swiper.slidePrev()}
                >
                  <BsArrowLeft className="m-auto" />
                </button>
                <button
                  className="w-10 h-10 bg-slate-500 text-white hover:bg-black"
                  onClick={() => swiperRef.current.swiper.slideNext()}
                >
                  <BsArrowRight className="m-auto" />
                </button>
              </div>
              <div className="overflow-hidden w-full">
                <Swiper
                  ref={swiperRef}
                  slidesPerView={1}
                  modules={[Pagination, Navigation]}
                  pagination={{
                    el: "#custom_pagination",
                    type: "progressbar",
                    progressbarFillClass:
                      "bg-black w-full h-full absolute left-0 top-0 origin-top-left",
                  }}
                  breakpoints={swiperBreackpoints}
                  centeredSlides={true}
                  onActiveIndexChange={(swiper) => {
                    swiperIndex.current.innerText =
                      swiper.activeIndex < 10
                        ? `0${swiper.activeIndex + 1}`
                        : swiper.activeIndex;
                  }}
                >
                  {data.features.map((shoe) => {
                    const shoeImageData = useNextSanityImage(
                      client,
                      shoe.shoes_images
                    );
                    return (
                      <SwiperSlide key={shoe._id} className="w-60">
                        <Link href={`shoe/${shoe._id}`} className="w-60 h-48 max-h-48 bg-slate-100 flex flex-col justify-center items-center">
                          <h5 className="font-semibold">{shoe.name}</h5>
                          <div>
                            <Img
                              key={`key-${shoe.name}`}
                              {...shoeImageData}
                              className="h-32"
                              style={{ width: "auto" }} // layout="responsive" prior to Next 13.0.0
                              sizes="(max-width: 800px) 100vw, 800px"
                              placeholder="blur"
                              blurDataURL={
                                shoe.shoes_images.asset.metadata.lqip
                              }
                              alt={shoe.name}
                            />
                          </div>
                        </Link>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
