import React from "react";
import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Image from "next/image";
import "swiper/css";

const Banner = () => {
  return (
    <>
      <div className={styles.container}>
        <Swiper
          modules={[Autoplay]}
          className={styles.myswiper}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          <SwiperSlide>
            <Image
              priority={true}
              src="/tmp/banner1.png"
              alt="Landscape picture"
              width={380}
              height={190}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/tmp/banner2.png"
              alt="Landscape picture"
              width={380}
              height={190}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
