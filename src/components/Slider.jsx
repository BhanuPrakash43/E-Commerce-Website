import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import styles from "./Slider.module.css"


function Slider() {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <article className={styles.slide}>
          <img
            src="https://t3.ftcdn.net/jpg/02/41/43/18/360_F_241431868_8DFQpCcmpEPVG0UvopdztOAd4a6Rqsoo.jpg"
            alt={"carousel-1 image"}
          />
        </article>
      </SwiperSlide>
      <SwiperSlide>
        <article className={styles.slide}>
          <img
            src="https://img.freepik.com/free-photo/female-friends-out-shopping-together_53876-25041.jpg?size=626&ext=jpg"
            alt={"carousel-2 image"}
          />
        </article>
      </SwiperSlide>
      <SwiperSlide>
        <article className={styles.slide}>
          <img
            src="https://img.freepik.com/free-photo/stylish-clothing-displayed-boutique_157027-3566.jpg?size=626&ext=jpg&ga=GA1.1.1960292268.1707197364&semt=sph"
            alt={"carousel-2 image"}
          />
        </article>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
