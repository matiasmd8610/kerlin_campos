"use client";
import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SliderHero = () => {
  return (
    <Swiper
        className='sliderHero relative !z-20 w-full mt-10 !pb-[7rem] lg:!pb-[11rem]'
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        // navigation
        loop={true}
        autoplay={{
            delay: 7000,
            disableOnInteraction: false,
        }}
        pagination={{ clickable: true, type: "bullets" }}
    >
      <SwiperSlide className='!flex flex-col items-center'>
        <h2 className='text-white text-center text-[26px] lg:text-[40px] relative mb-8 noBorder max-w-[900px]'>Descubre la nueva era en comercialización de campos</h2>
        <p className="text-white text-center relative text-base lg:text-xl">En <strong>KERLIN CAMPOS</strong> nos encanta lo que hacemos y siempre estamos buscando maneras nuevas y creativas para hacer las cosas. Con la ayuda de lo último en inteligencia artificial y marketing digital, conseguimos resultados increíbles para quienes quieren comprar o vender sus campos.</p>
        <p className="text-white text-center relative text-base lg:text-xl">Descubre con nosotros una forma rápida, lista y moderna de comercializar campos.</p>
      </SwiperSlide>
      {/* <SwiperSlide className='!flex flex-col items-center'>
        <h2 className='text-white text-center text-[26px] lg:text-[40px] relative mb-8 noBorder max-w-[950px]'>Descubre con nosotros una forma rápida, lista y moderna de comercializar campos</h2>
        <p className="text-white text-center relative text-base lg:text-xl">Formamos un equipo con corazón de campo. Los ingenieros agrónomos que forman parte de nuestro personal saben todo sobre la tierra y cómo sacarle jugo. Además, nos hemos unido con algunas de las mejores empresas del rubro para darte consejos de primera sobre propiedades rurales. Para nosotros, innovar es como sembrar: ponemos las ideas más frescas en la tierra fértil de nuestro trabajo y de ahí brotan los éxitos de nuestros clientes.</p>
      </SwiperSlide> */}
    </Swiper>
  )
}

export default SliderHero