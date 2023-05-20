import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// import Swiper and modules styles
// import "../../../node_modules/swiper/swiper.css";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import "../../components/slider/slider.css";

//images
import arepa_rellena from "../../assets/images/productos/arepa_rellena_producto.png";
import arepa_amarilla from "../../assets/images/productos/arepa_amarilla_producto.png";
import loncheritas from "../../assets/images/productos/arepa_loncherita_producto.png";
import arepa_huevo from "../../assets/images/productos/empanadas_coctelera_producto.png";
import empanada_coctelera from "../../assets/images/productos/empanadas_coctelera_producto.png";
import pandebono_rosca from "../../assets/images/productos/pandebono_rosca_producto.png";
import tequenos from "../../assets/images/productos/tequeno_producto.png";
import tequenos_con_gva from "../../assets/images/productos/tequeno_guayaba_producto.png";

const Slider = () => {
  return (
    <>
      <div className="container__products_title">
        <h2>Nuestros Productos</h2>
      </div>
      <div className="swiper__container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="slider images" src={arepa_rellena} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slider images" src={loncheritas} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slider images" src={arepa_amarilla} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slider images" src={arepa_huevo} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slider images" src={empanada_coctelera} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slider images" src={pandebono_rosca} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slider images" src={tequenos} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slider images" src={tequenos_con_gva} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
