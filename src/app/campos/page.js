'use client'
import Gallery from '@/components/Gallery';
import Link from 'next/link';
import React, { useState, useEffect } from 'react'

const Campos = () => {
  
  const [modalActive, setModalactive] = useState(false);
  
  const openModal = (id) => {
    setModalactive(!modalActive);
  }

  const images100agricola = [
    { src: '/images/100agricola/100agricola_01.jpg', thumb: '/images/100agricola/100agricola_01.jpg' },
    { src: '/images/100agricola/100agricola_02.jpg', thumb: '/images/100agricola/100agricola_02.jpg' },
    { src: '/images/100agricola/100agricola_03.jpg', thumb: '/images/100agricola/100agricola_03.jpg' },
    { src: '/images/100agricola/100agricola_04.jpg', thumb: '/images/100agricola/100agricola_04.jpg' },
    { src: '/images/100agricola/100agricola_05.jpg', thumb: '/images/100agricola/100agricola_05.jpg' }
  ];

  const imagesZarate = [
    { src: '/images/zarate/zarate_01.jpg', thumb: '/images/zarate/zarate_01.jpg' },
    { src: '/images/zarate/zarate_02.jpg', thumb: '/images/zarate/zarate_02.jpg' },
    { src: '/images/zarate/zarate_03.jpg', thumb: '/images/zarate/zarate_03.jpg' },
    { src: '/images/zarate/zarate_04.jpg', thumb: '/images/zarate/zarate_04.jpg' },
    { src: '/images/zarate/zarate_05.jpg', thumb: '/images/zarate/zarate_05.jpg' },
    { src: '/images/zarate/zarate_06.jpg', thumb: '/images/zarate/zarate_06.jpg' },
    { src: '/images/zarate/zarate_07.jpg', thumb: '/images/zarate/zarate_07.jpg' },
    { src: '/images/zarate/zarate_08.jpg', thumb: '/images/zarate/zarate_08.jpg' },
    { src: '/images/zarate/zarate_10.jpg', thumb: '/images/zarate/zarate_10.jpg' },
    { src: '/images/zarate/zarate_11.jpg', thumb: '/images/zarate/zarate_11.jpg' },
    { src: '/images/zarate/zarate_12.jpg', thumb: '/images/zarate/zarate_12.jpg' }
  ];

  const imagesVictoria = [
    { src: '/images/victoria/victoria_01.jpg', thumb: '/images/victoria/victoria_01.jpg' },
    { src: '/images/victoria/victoria_02.jpg', thumb: '/images/victoria/victoria_02.jpg' },
    { src: '/images/victoria/victoria_03.jpg', thumb: '/images/victoria/victoria_03.jpg' },
    { src: '/images/victoria/victoria_04.jpg', thumb: '/images/victoria/victoria_04.jpg' },
    { src: '/images/victoria/victoria_05.jpg', thumb: '/images/victoria/victoria_05.jpg' },
    { src: '/images/victoria/victoria_06.jpg', thumb: '/images/victoria/victoria_06.jpg' },
    { src: '/images/victoria/victoria_07.jpg', thumb: '/images/victoria/victoria_07.jpg' },
    { src: '/images/victoria/victoria_08.jpg', thumb: '/images/victoria/victoria_08.jpg' },
    { src: '/images/victoria/victoria_09.jpg', thumb: '/images/victoria/victoria_09.jpg' },
    { src: '/images/victoria/victoria_10.jpg', thumb: '/images/victoria/victoria_10.jpg' },
    { src: '/images/victoria/victoria_11.jpg', thumb: '/images/victoria/victoria_11.jpg' },
    { src: '/images/victoria/victoria_12.jpg', thumb: '/images/victoria/victoria_12.jpg' },
    { src: '/images/victoria/victoria_13.jpg', thumb: '/images/victoria/victoria_13.jpg' },
    { src: '/images/victoria/victoria_14.jpg', thumb: '/images/victoria/victoria_14.jpg' },
    { src: '/images/victoria/victoria_15.jpg', thumb: '/images/victoria/victoria_15.jpg' },
    { src: '/images/victoria/victoria_16.jpg', thumb: '/images/victoria/victoria_16.jpg' },
    { src: '/images/victoria/victoria_17.jpg', thumb: '/images/victoria/victoria_17.jpg' },
    { src: '/images/victoria/victoria_18.jpg', thumb: '/images/victoria/victoria_18.jpg' },
    { src: '/images/victoria/victoria_19.jpg', thumb: '/images/victoria/victoria_19.jpg' },
    { src: '/images/victoria/victoria_20.jpg', thumb: '/images/victoria/victoria_20.jpg' },
  ];

  const imagesNuevaEsperanza = [
    { src: '/images/nueva_esperanza/nueva_esperanza_01.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_01.jpg' },
    { src: '/images/nueva_esperanza/nueva_esperanza_02.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_02.jpg' },
    { src: '/images/nueva_esperanza/nueva_esperanza_03.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_03.jpg' },
    { src: '/images/nueva_esperanza/nueva_esperanza_04.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_04.jpg' },
    { src: '/images/nueva_esperanza/nueva_esperanza_05.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_05.jpg' },
    { src: '/images/nueva_esperanza/nueva_esperanza_06.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_06.jpg' },
    { src: '/images/nueva_esperanza/nueva_esperanza_07.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_07.jpg' },
    { src: '/images/nueva_esperanza/nueva_esperanza_08.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_08.jpg' },
    { src: '/images/nueva_esperanza/nueva_esperanza_09.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_09.jpg' },
    { src: '/images/nueva_esperanza/nueva_esperanza_10.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_10.jpg' },
    { src: '/images/nueva_esperanza/nueva_esperanza_11.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_11.jpg' },
    { src: '/images/nueva_esperanza/nueva_esperanza_12.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_12.jpg' },
    { src: '/images/nueva_esperanza/nueva_esperanza_13.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_13.jpg' },
    { src: '/images/nueva_esperanza/nueva_esperanza_14.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_14.jpg' },
    { src: '/images/nueva_esperanza/nueva_esperanza_15.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_15.jpg' },
    { src: '/images/nueva_esperanza/nueva_esperanza_16.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_16.jpg' },
    { src: '/images/nueva_esperanza/nueva_esperanza_17.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_17.jpg' },
    { src: '/images/nueva_esperanza/nueva_esperanza_18.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_18.jpg' },
    { src: '/images/nueva_esperanza/nueva_esperanza_19.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_19.jpg' },
    { src: '/images/nueva_esperanza/nueva_esperanza_20.jpg', thumb: '/images/nueva_esperanza/nueva_esperanza_20.jpg' },
  ];

  const imagesElNochero = [
    { src: '/images/el_nochero/el_nochero_01.jpg', thumb: '/images/el_nochero/el_nochero_01.jpg' },
    { src: '/images/el_nochero/el_nochero_02.jpg', thumb: '/images/el_nochero/el_nochero_02.jpg' },
    { src: '/images/el_nochero/el_nochero_03.jpg', thumb: '/images/el_nochero/el_nochero_03.jpg' },
    { src: '/images/el_nochero/el_nochero_04.jpg', thumb: '/images/el_nochero/el_nochero_04.jpg' },
    { src: '/images/el_nochero/el_nochero_05.jpg', thumb: '/images/el_nochero/el_nochero_05.jpg' },
    { src: '/images/el_nochero/el_nochero_06.jpg', thumb: '/images/el_nochero/el_nochero_06.jpg' },
    { src: '/images/el_nochero/el_nochero_07.jpg', thumb: '/images/el_nochero/el_nochero_07.jpg' },
    { src: '/images/el_nochero/el_nochero_08.jpg', thumb: '/images/el_nochero/el_nochero_08.jpg' },
    { src: '/images/el_nochero/el_nochero_09.jpg', thumb: '/images/el_nochero/el_nochero_09.jpg' },
    { src: '/images/el_nochero/el_nochero_10.jpg', thumb: '/images/el_nochero/el_nochero_10.jpg' },
    { src: '/images/el_nochero/el_nochero_11.jpg', thumb: '/images/el_nochero/el_nochero_11.jpg' },
    { src: '/images/el_nochero/el_nochero_12.jpg', thumb: '/images/el_nochero/el_nochero_12.jpg' },
    { src: '/images/el_nochero/el_nochero_13.jpg', thumb: '/images/el_nochero/el_nochero_13.jpg' },
    { src: '/images/el_nochero/el_nochero_14.jpg', thumb: '/images/el_nochero/el_nochero_14.jpg' },
    { src: '/images/el_nochero/el_nochero_15.jpg', thumb: '/images/el_nochero/el_nochero_15.jpg' },
    { src: '/images/el_nochero/el_nochero_16.jpg', thumb: '/images/el_nochero/el_nochero_16.jpg' },
    { src: '/images/el_nochero/el_nochero_17.jpg', thumb: '/images/el_nochero/el_nochero_17.jpg' }
  ];

  const imagesFortinElPatria = [
    { src: '/images/fortin_el_patria/fortin_el_patria_01.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_01.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_02.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_02.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_03.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_03.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_04.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_04.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_05.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_05.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_06.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_06.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_07.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_07.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_08.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_08.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_09.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_09.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_10.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_10.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_11.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_11.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_12.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_12.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_13.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_13.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_14.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_14.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_15.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_15.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_16.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_16.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_17.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_17.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_18.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_18.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_19.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_19.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_20.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_20.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_21.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_21.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_22.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_22.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_23.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_23.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_24.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_24.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_25.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_25.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_26.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_26.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_27.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_27.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_28.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_28.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_29.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_29.jpg' },
    { src: '/images/fortin_el_patria/fortin_el_patria_30.jpg', thumb: '/images/fortin_el_patria/fortin_el_patria_30.jpg' }
  ];

  const imagesLujan = [
    { src: '/images/lujan/lujan_01.jpg', thumb: '/images/lujan/lujan_01.jpg' },
    { src: '/images/lujan/lujan_02.jpg', thumb: '/images/lujan/lujan_02.jpg' },
    { src: '/images/lujan/lujan_03.jpg', thumb: '/images/lujan/lujan_03.jpg' },
    { src: '/images/lujan/lujan_04.jpg', thumb: '/images/lujan/lujan_04.jpg' },
    { src: '/images/lujan/lujan_05.jpg', thumb: '/images/lujan/lujan_05.jpg' },
    { src: '/images/lujan/lujan_06.jpg', thumb: '/images/lujan/lujan_06.jpg' },
    { src: '/images/lujan/lujan_07.jpg', thumb: '/images/lujan/lujan_07.jpg' },
    { src: '/images/lujan/lujan_08.jpg', thumb: '/images/lujan/lujan_08.jpg' },
    { src: '/images/lujan/lujan_09.jpg', thumb: '/images/lujan/lujan_09.jpg' },
    { src: '/images/lujan/lujan_10.jpg', thumb: '/images/lujan/lujan_10.jpg' },
    { src: '/images/lujan/lujan_11.jpg', thumb: '/images/lujan/lujan_11.jpg' },
    { src: '/images/lujan/lujan_12.jpg', thumb: '/images/lujan/lujan_12.jpg' },
    { src: '/images/lujan/lujan_13.jpg', thumb: '/images/lujan/lujan_13.jpg' },
    { src: '/images/lujan/lujan_14.jpg', thumb: '/images/lujan/lujan_14.jpg' },
    { src: '/images/lujan/lujan_15.jpg', thumb: '/images/lujan/lujan_15.jpg' },
    { src: '/images/lujan/lujan_16.jpg', thumb: '/images/lujan/lujan_16.jpg' },
    { src: '/images/lujan/lujan_17.jpg', thumb: '/images/lujan/lujan_17.jpg' },
    { src: '/images/lujan/lujan_18.jpg', thumb: '/images/lujan/lujan_18.jpg' },
    { src: '/images/lujan/lujan_19.jpg', thumb: '/images/lujan/lujan_19.jpg' },
    { src: '/images/lujan/lujan_20.jpg', thumb: '/images/lujan/lujan_20.jpg' }
  ];
  
  return (
    <main id='main' className='fields'>
      <section className='hero-section relative bg-[url("/images/hero_campos_bg.jpg")] h-[200px] lg:h-[260px] bg-no-repeat bg-cover flex items-center bg-bottom text-white'>
          <div className='container relative z-10'>
            <h1 className='text-[30px] lg:text-[40px] uppercase text-center leftBorder'>Nuestros Campos</h1>
          </div>
      </section>

      <div className='bg-blue-100 py-5'>
        <div className='container'>
          <p className='text-sm'><strong>Nota importante:</strong> Toda la información y medidas provistas son aproximadas y deberán ratificarse con la documentación pertinente y no compromete contractualmente a nuestra empresa. Los gastos (expensas, gastos) expresados refieren a la última información recabada y deberán confirmarse. Fotografías no vinculantes ni contractuales.</p>
        </div>
      </div>

      <section id='fields' className='pt-0 lg:pt-8 pb-0'>

        {/* Campo 100% Agrícola: Begin */}
        <div className='field' id='100-agricola'>
          <div className='container'>
            <div className='grid lg:grid-cols-2 gap-10 lg:gap-[4rem]'>
              <div>
                <h2 className='leftBorder text-[24px] lg:text-[28px] mb-10 uppercase'>Campo 100% Agrícola</h2>
                <p className='flex lg:items-center mb-1 text-xl'>
                  <svg className='icon mr-2 w-5 h-5 shrink-0 translate-y-[0.5rem] lg:translate-y-0' width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z" fill="black"/>
                  </svg>
                  San Nicolas De Los Arroyos | San Nicolas | Interior Buenos Aires
                </p>
                <Link className="font-semibold underline ml-6 text-base text-blueMain" href={"https://www.google.com/maps/search/?api=1&query=-33.3023181,-60.2688949"} target='_blank'>Ver en Google Maps</Link>
                {/* <button className="font-semibold underline ml-6 text-base text-blueMain"  type="button" onClick={() => openModal("100-agricola")}>Ver en Google Maps</button> */}
                <div className='flex items-center mt-5'>
                  <span className='bg-green-300 rounded-md px-3 py-1 grid place-items-center text-[11px] uppercase mr-3 font-bold'>Venta</span>
                  <span className='text-2xl font-bold'>USD 375.000</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                <div>
                  <h4 className='text-base font-bold mb-2 uppercase underline'>Información general</h4>
                  <span className='block'><strong>Condición:</strong> Excelente</span>
                  {/* <span className='block'><strong>Antigüedad:</strong> A estrenar</span> */}
                  <span><strong>Superficie:</strong> 50 HAS</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                <h4 className='text-base font-bold mb-2 uppercase underline'>Descripción</h4>
                <p>Cuartel primero de campaña, señalado con el número nueve, compuesta su superficie de cincuenta hectáreas, sesenta y dos áreas, veinte centiareas y treinta decímetros cuadrados.</p>
                <p>El campo es 100% agricola, ubicado a 2km del pavimento (ex ruta 21, actualmente Avenida Illia), acceso en muy buen estado. No cuenta con mejoras, salvo alambrado perimetral en muy buen estado.</p>
              </div>
              <div>
                <Gallery images={images100agricola} />
              </div>
            </div>
          </div>
        </div>
        {/* Campo 100% Agrícola: End */}

        {/* Zarate: Begin */}
        <div className='field' id='zarate'>
          <div className='container'>
            <div className='grid lg:grid-cols-2 gap-10 lg:gap-[4rem]'>
              <div className='fieldInfo'>
                <h2 className='leftBorder text-[24px] lg:text-[28px] mb-10 uppercase'>Zarate</h2>
                <p className='flex items-center mb-2'>
                  <svg className='icon mr-2 w-5 h-5' width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z" fill="black"/>
                  </svg>
                  Lima | Zarate | G.B.A. Zona Norte
                </p>
                <Link className="font-semibold underline ml-6 text-base text-blueMain" href={"https://www.google.com/maps/search/?api=1&query=-34.0447565,-59.1961093"} target='_blank'>Ver en Google Maps</Link>
                <div className='flex items-center mt-5'>
                  <span className='bg-green-300 rounded-md px-3 py-1 grid place-items-center text-[11px] uppercase mr-3 font-bold'>Venta</span>
                  <span className='text-2xl font-bold'>USD 15.000.000</span>
                </div>               
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                <div>
                  <h4 className='text-base font-bold mb-2 uppercase underline'>Superficies y medidas</h4>
                  <span><strong>Superficie:</strong> 14700000.0 HA</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                <h4 className='text-base font-bold mb-2 uppercase underline'>Descripción</h4>
                <p>732 has El campo se ubica sobre el camino real de tierra que costea las vías del ex ferrocarril general Bartolomé Mitre, a la altura de la Estación Atucha, en las localidades de Lima y Alsina. La autovía nacional Nº 9 se encuentra a tan solo 7,5 km en dirección noroeste. CARACTERÍSTICAS: El campo se encuentra en el extremo noroeste de la Provincia de Buenos Aires, dentro de la región conocida como Pampa Ondulada. Esta se caracteriza por presentar un relieve conformado por amplias lomadas, recortadas por arroyos y cursos de agua, que actúan como vías de drenaje. La aptitud de la Pampa ondulada es eminentemente agrícola. Su topografía, conscientemente con la de la zona, ondulada a suavemente ondulada, conformada por lomas y medias lomas, con pendientes de destino gradiente, hacia el norte y noroeste, en dirección al Río Areco. Previo al rio, hay una franja deprimida o bañado. A fin de moderar o atenuar los efectos de ésta, se ha sistematizado gran parte del campo, mediante el trazado de curvas de nivel. La superficie del campo se distribuye en siete ambientes principales, con características propias y distintas posibilidades de aprovechamiento. a) Loma: 531 Has. Es uno de los ambientes que predominan en el campo, donde se encuentran los suelos de mejor calidad. Estos son profundos, bien drenados, de textura franca a franco limosa en su primer horizonte, que tiene una profundidad aproximada a 30 cm. Suelos Atucha 1, clasificadas con clase I-2, según su capacidad de uso. Son suelos aptos para la realización de cultivos como trigo, soja, maíz. b) Media Loma: 393has. Se desarrolla a continuación del ambiente anterior, en un nivel inferior del relieve, estando conformado por planos inclinados de distinto gradiente. Son suelos similares a los descriptos, aunque algo menos profundos. c) Hondonada: 70,5has. d) Barranca con monte natural: 78 has. Este ambiente comprende una franja mayormente estrecha, que divide los sectores más altos del campo con el bañado del Río Areco. S e) Tendido y vías de escurrimiento: 29Has. f) Bañado: 111 Has. Comprende la franja que se extiende desde el pie de la barranca hasta el margen del Río Areco. g) Bajo : 62,6 has.</p>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                <h4 className='text-base font-bold mb-2 uppercase underline'>Servicios</h4>
                <ul className='services'>
                  <li>Electricidad</li>
                </ul>
              </div>
              <div>
                <Gallery images={imagesZarate} />
                <iframe className='mt-12 border-4 border-blueMain' width="100%" height="400" src="https://www.youtube.com/embed/XDdpHSRwC4A?si=1ZJXWRvVROrgB6yk" title="Zarate video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </div>
          </div>

          {/* <div className={`modal-las-mellizas ${modalActive ? "block" : "hidden"}`}>
            <p>Modal</p>
          </div> */}
        </div>
        {/* Zarate: End */}

        {/* Victoria, Entre Rios: Begin */}
        <div className='field' id='victoria'>
          <div className='container'>
            <div className='grid lg:grid-cols-2 gap-10 lg:gap-[4rem]'>
              <div className='fieldInfo'>
                <h2 className='leftBorder text-[24px] lg:text-[28px] mb-10 uppercase'>Victoria, Entre Ríos - 10000 ha</h2>
                <p className='flex items-center mb-2'>
                  <svg className='icon mr-2 w-5 h-5' width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z" fill="black"/>
                  </svg>
                  Victoria | Entre Rios | Argentina
                </p>
                <Link className="font-semibold underline ml-6 text-base text-blueMain" href={"https://www.google.com/maps/place/32%C2%B037'57.9%22S+60%C2%B008'30.5%22W/@-32.6327523,-60.1418019,698m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d-32.6327523!4d-60.1418019?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"} target='_blank'>Ver en Google Maps</Link>
                <div className='flex items-center mt-5'>
                  <span className='bg-green-300 rounded-md px-3 py-1 grid place-items-center text-[11px] uppercase mr-3 font-bold'>Venta</span>
                  <span className='text-2xl font-bold'>USD 15.000.000</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                <div>
                  <h4 className='text-base font-bold mb-2 uppercase underline'>Información general</h4>
                  <span className='block'><strong>Precio HA u$s:</strong> 1500</span>
                  <span className='block'><strong>Costas Santafesinas:</strong> 20 min en lancha rápida</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                <div>
                  <h4 className='text-base font-bold mb-2 uppercase underline'>Superficies y medidas</h4>
                  <span className='block'><strong>Superficie:</strong> 100000000.0 HAS</span>
                  <span className='block'><strong>Incultas:</strong> 1.500 ha</span>
                  <span className='block'><strong>Pasto Natural:</strong> 8.500 ha</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                <h4 className='text-base font-bold mb-2 uppercase underline'>Descripción</h4>
                <span className='block'>MEJORAS</span>
                <ul className='services mb-5'>
                  <li>2.500 ha endicadas por terraplenes.</li>
                  <li>24 km de terraplenes de gran altura. 25 km de caminos internos.</li>
                  <li>45 km de canales de drenaje. 2 estaciones de bombeo.</li>
                  <li>4 corrales con manga, cepo y balanza electrónica.</li>
                  <li>Casa para puestero. Galpón en construcción (50x25 m).</li>
                  <li>Planta de silo con 4 silos de 120 tn y noria de 80 tn/hora, con descarga al barco.</li>
                  <li>Alteo de 2 ha levantado 5 m en altura para refugio (100.000 m3 de tierra). Su cota supera cualquier crecida cualquier crecida y permite tener un lugar seguro en caso de emergencia hidrológica para situar los animales y proceder su evacuación. Arriba de este alteo se construyó el galpón y los silos.</li>
                  <li>25.000 horas movimiento de suelo.</li>
                  <li>Dársena para el barco.</li>
                  <li>Alcantarilla de hormigón de 100 cm de diámetro.</li>
                  <li>200 ha niveladas con pendiente de 5% para su mejor drenaje.</li>
                  <li>Pista de aterrizaje.</li>
                  <li>Telefonía celular con cobertura en todo el campo.</li>
                </ul>
                <span className='block'>APTITUD</span>
                <p>Muy buena isla para, engorde, cría y recría por sus pasturas permanentes, pastosas, abundantes y de gran altura.
                  Posee habilitación de SENASA para exportación de carne del mismo ganado.
                  Su perímetro se compone con ríos de buen calado (Los Laureles). Hasta en épocas de sequías su calado mínimo con el río bajo es de 10 m. Siempre entra y sale el barco de hacienda o cereal.</p>
              </div>
              <div>
                <Gallery images={imagesVictoria} />
              </div>
            </div>
          </div>
        </div>
        {/* Victoria, Entre Rios: End */}

        {/* Nueva Esperanza: Begin */}
        <div className='field' id='nueva-esperanza'>
          <div className='container'>
            <div className='grid lg:grid-cols-2 gap-10 lg:gap-[4rem]'>
              <div className='fieldInfo'>
                <h2 className='leftBorder text-[24px] lg:text-[28px] mb-10 uppercase'>Nueva Esperanza 6.963 ha</h2>
                <p className='flex items-center mb-2'>
                  <svg className='icon mr-2 w-5 h-5' width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z" fill="black"/>
                  </svg>
                  Pellegrini | Santiago Del Estero | Argentina
                </p>
                <Link className="font-semibold underline ml-6 text-base text-blueMain" href={"https://www.google.com/maps/search/?api=1&query=-26.1993333,-64.239096"} target='_blank'>Ver en Google Maps</Link>
                <div className='flex items-center mt-5'>
                  <span className='bg-green-300 rounded-md px-3 py-1 grid place-items-center text-[11px] uppercase mr-3 font-bold'>Venta</span>
                  <span className='text-2xl font-bold'>USD 15.318.600</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                <div>
                  <h4 className='text-base font-bold mb-2 uppercase underline'>Información general</h4>
                  <span className='block'><strong>Precio HA u$s:</strong> 2200</span>
                  <span className='block'><strong>Ruta provincial:</strong> 4:4 Km</span>
                  <span className='block'><strong>Nueva Esperanza:</strong> 30 Km</span>
                  <span className='block'><strong>7 de abril (RN 34):</strong> 60 Km</span>
                  <span className='block'><strong>San Miguel de Tucumán:</strong> 150 Km</span>
                  <span className='block'><strong>Ciudad de Santiago del Estero:</strong> 240 Km</span>
                  <span className='block'><strong>Ciudad de Salta:</strong> 300 Km</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                <div>
                  <h4 className='text-base font-bold mb-2 uppercase underline'>Superficies y medidas</h4>
                  <span className='block'><strong>Superficie:</strong> 69630000.0 HA</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                <h4 className='text-base font-bold mb-2 uppercase underline'>Descripción</h4>
                <span className='block'>MEJORAS</span>
                <ul className='services mb-5'>
                  <li>El campo está totalmente alambrado con 7 hilos (nuevo).</li>
                  <li>Cortinas de monte natural.</li>
                  <li>Picadas perimetrales e internas.</li>
                  <li>Casa con 3 Habitaciones, 1 baño, cocina y comedor (muy buen estado)</li>
                  <li>Luz por energía solar (tendido eléctrico a 2 Kms)</li>
                  <li>Aljibe para consumo Humano (30.000 litros)</li>
                  <li>Tanque de agua apta para consumo animal y fumigar (25.000 litros)</li>
                </ul>
                <span className='block'>APTITUD</span>
                  <p>El campo tiene 3.606 ha desmontadas y en agricultura. El resto es monte abierto.</p>
                  <span>Campaña 2018/2019:</span>
                  <ul className='services mb-5'>
                    <li>Soja: 1391 ha.</li>
                    <li>Maíz: 1.683 ha.</li>
                    <li>Poroto negro: 431 ha.</li>
                    <li>Poroto mung: 100 ha.</li>
                  </ul>
                  <span className='block'>PRECIPITACIÓN ANUAL PROMEDIO: 700-800 mm</span>
              </div>
              <div>
                <Gallery images={imagesNuevaEsperanza} />
              </div>
            </div>
          </div>
        </div>
        {/* Nueva Esperanza: End */}

        {/* El Nochero: Begin */}
        <div className='field' id='el-nochero'>
          <div className='container'>
            <div className='grid lg:grid-cols-2 gap-10 lg:gap-[4rem]'>
              <div className='fieldInfo'>
                <h2 className='leftBorder text-[24px] lg:text-[28px] mb-10 uppercase'>El Nochero 30.000 Ha</h2>
                <p className='flex items-center mb-2'>
                  <svg className='icon mr-2 w-5 h-5' width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z" fill="black"/>
                  </svg>
                  9 De Julio | Santa Fe | Argentina
                </p>
                <Link className="font-semibold underline ml-6 text-base text-blueMain" href={"https://www.google.com/maps/search/?api=1&query=-28.2312607917,-61.5204701551"} target='_blank'>Ver en Google Maps</Link>
                <div className='flex items-center mt-5'>
                  <span className='bg-green-300 rounded-md px-3 py-1 grid place-items-center text-[11px] uppercase mr-3 font-bold'>Venta</span>
                  <span className='text-2xl font-bold'>USD 18.000.000</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                <div>
                  <h4 className='text-base font-bold mb-2 uppercase underline'>Información general</h4>
                  <span className='block'><strong>Precio HA u$s:</strong> 600</span>
                  <span className='block'><strong>Asfalto:</strong> 16 Km</span>
                  <span className='block'><strong>Tostado:</strong> 140 Km</span>
                  <span className='block'><strong>Ciudad de Santa Fé:</strong> 470 Km</span>
                  <span className='block'><strong>Ciudad Autónoma de Buenos Aires:</strong> 920 Km</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                <div>
                  <h4 className='text-base font-bold mb-2 uppercase underline'>Superficies y medidas</h4>
                  <span className='block'><strong>Superficie:</strong> 300000000.0 HA</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                <h4 className='text-base font-bold mb-2 uppercase underline'>Descripción</h4>
                <p>Mejoras: Los alambrados perimetrales de la Estancia se encuentran en su mayoría en estado aceptable, debiendo realizar reparaciones en algunos tramos, pero en tramos faltantes de alambrados fijos se encuentran alambrados eléctricos, también se hace la salvedad que existen también tramos de perimetrales posteados, faltando colocar hilos y varillas. La Estancia tiene una casa habitación, en buenas condiciones, y un pequeño puesto, un galpón para herramientas y maquinarias. En el extremo Suroeste se cuenta una casa para puestero. también hay corrales, manga, balanza y bañadero. A nivel de reserva de agua ha proyectado en toda su superficie una serie de represas que fueron construidas, analizando los escurrimientos naturales del agua, para que, en caso de producirse precipitaciones de importancia, se logre acumular la mayor cantidad de la misma. Es un trabajo de gran importancia y de costos, que le permiten al establecimiento en condiciones climáticas normales, acumular agua para los momentos de faltante. La estancia cuenta con bebederos y molinos. Si bien no se hicieron estudio para localizar en el subsuelo, todos los campos linderos a “Los Algodonales” cuentan con agua subterránea de buena calidad. Aptitud: Cría de vacunos y agricultura en menor escala. Precipitación: 700-1000 mm anuales. Su mayor superficie está dedicada a la explotación ganadera (cría de vacunos) sobre tierras con vegetación originariamente cubierta de bosques donde ya se ha explotado la madera más valiosa (quebracho) para la producción de tanino, postes de alambrados y durmientes de ferrocarril. Su mitad norte tiene una importante superficie dedicada al cultivo de algodón. En parte se cultiva maíz, sorgo granífero y girasol. Superficie de monte: 8.000Has (predomina el algarrobo apto para silvicultura) Aptitud Ganadería: 1/3Has (1 animal cada 3Has) – Se podría llegar a 1/1,5Has con siembra de gramíneas subtropicales (Grama Rhodes y Gatton Panic) y leguminosas (Alfalfa y Melilotus) Aptitud Agrícola: Girasol: 2,000-3,000Kg Sorgo: 3,500-4,000Kg Algodón: 2,500-3,000Kg Maíz: 2,500-3,000Kg Superficie Agrícola: Hasta 15.000Has. Superficie Ganadera: Hasta 30.000Has.</p>
              </div>
              <div>
                <Gallery images={imagesElNochero} />
              </div>
            </div>
          </div>
        </div>
        {/* El Nochero: End */}

        {/* Fortin El Patria: Begin */}
        <div className='field' id='fortin-el-patria'>
          <div className='container'>
            <div className='grid lg:grid-cols-2 gap-10 lg:gap-[4rem]'>
              <div className='fieldInfo'>
                <h2 className='leftBorder text-[24px] lg:text-[28px] mb-10 uppercase'>Fortin El Patria, Dupuy, San Luis - 7.611 ha</h2>
                <p className='flex items-center mb-2'>
                  <svg className='icon mr-2 w-5 h-5' width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z" fill="black"/>
                  </svg>
                  Fortin El Patria | Dupuy | San Luis
                </p>
                <Link className="font-semibold underline ml-6 text-base text-blueMain" href={"https://www.google.com/maps/search/?api=1&query=-34.7710294,-65.522684"} target='_blank'>Ver en Google Maps</Link>
                <div className='flex items-center mt-5'>
                  <span className='bg-green-300 rounded-md px-3 py-1 grid place-items-center text-[11px] uppercase mr-3 font-bold'>Venta</span>
                  <span className='text-2xl font-bold'>USD 14.841.450</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                <div>
                  <h4 className='text-base font-bold mb-2 uppercase underline'>Información general</h4>
                  <span className='block'><strong>Precio HA u$s:</strong> 1950</span>
                  <span className='block'><strong>Sobre ruta:</strong> 12 y 27</span>
                  <span className='block'><strong>Fotin El Patria:</strong> 5 km</span>
                  <span className='block'><strong>Buena Esperanza:</strong> 28 km</span>
                  <span className='block'><strong>Rio Cuarto:</strong> 270 km</span>
                  <span className='block'><strong>Rosario:</strong> 600 km</span>
                  <span className='block'><strong>Buenos Aires:</strong> 720 km</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                <div>
                  <h4 className='text-base font-bold mb-2 uppercase underline'>Superficies y medidas</h4>
                  <span className='block'><strong>Superficie:</strong> 76110000.0 HA</span>
                  <span className='block'><strong>Agrícolas:</strong> 3.500 ha</span>
                  <span className='block'><strong>Ganaderas:</strong> 3.300 ha</span>
                  <span className='block'><strong>Monte Alto:</strong> 800 ha</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                <h4 className='text-base font-bold mb-2 uppercase underline'>Descripción</h4>
                <span className='block'>MEJORAS</span>
                <ul className='services mb-5'>
                  <li>Casco con casa principal de 450 m2</li>
                  <li>Casa de encargado, casa de peones y galpones</li>
                  <li>Servicios: teléfono de línea, Internet, luz eléctrica de alta tensión con transformador de 24 Kwa</li>
                  <li>El campo se encuentra dividido en 27 potreros y posee 15 molinos con sus correspondientes tanques y bebederos.</li>
                  <li>Distancia al agua de 1 a 4 m en la superficie agrícola</li>
                  <li>Agua dulce apta también para el consumo humano. Posibilidad de riego</li>
                  <li>Instalaciones para feedlot</li>
                  <li>2 mangas (con balanza para 3000 kg)</li>
                </ul>
                <span className='block uppercase'>Aptitud:</span>
                <p>Campo agrícola-ganadero que se dedica a la recría, cuenta con 6.000 cabezas entre novillos y vaquillonas y tiene 1500 vientres. La superficie agrícola es apta para girasol, maíz, sorgo, centeno y muy buenas alfalfas y la superfice ganadera es sembrable con llorón, digitaria, panicum, etc, en las lomas.</p>
              </div>
              <div>
                <Gallery images={imagesFortinElPatria} />
                <iframe className='mt-12 border-4 border-blueMain' width="100%" height="400" src="https://www.youtube.com/embed/JqV9X0H6TCY?si=d2eW8cJisKReeOUR" title="El Fortin Patria video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
        {/* Fortin El Patria: End */}

        {/* Lujan: Begin */}
        <div className='field' id='lujan'>
          <div className='container'>
            <div className='grid lg:grid-cols-2 gap-10 lg:gap-[4rem]'>
              <div className='fieldInfo'>
                <h2 className='leftBorder text-[24px] lg:text-[28px] mb-10 uppercase'>Lujan, Buenos Aires - 877 ha</h2>
                <p className='flex items-center mb-2'>
                  <svg className='icon mr-2 w-5 h-5' width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z" fill="black"/>
                  </svg>
                  Lujan | G.B.A. Zona Oeste | Argentina
                </p>
                <Link className="font-semibold underline ml-6 text-base text-blueMain" href={"https://www.google.com/maps/search/?api=1&query=-34.5798993,-59.1858183"} target='_blank'>Ver en Google Maps</Link>
                <div className='flex items-center mt-5'>
                  <span className='bg-green-300 rounded-md px-3 py-1 grid place-items-center text-[11px] uppercase mr-3 font-bold'>Venta</span>
                  <span className='text-2xl font-bold'>USD 25.000.000</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                <div>
                  <h4 className='text-base font-bold mb-2 uppercase underline'>Información general</h4>
                  <span className='block'><strong>Precio HA u$s:</strong> 28506.27</span>
                  <span className='block'><strong>Basílica de Luján: </strong> 8 km</span>
                  <span className='block'><strong>Buenos Aires:</strong> 75 km</span>
                  <span className='block'><strong>Sobre Rutas Nacionales n°:</strong> 7 y 5</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                <div>
                  <h4 className='text-base font-bold mb-2 uppercase underline'>Superficies y medidas</h4>
                  <span className='block'><strong>Superficie:</strong> 8770000.0 HA</span>
                </div>
                <hr className='border-0 h-[1px] bg-slate-300 w-full my-6' />
                <h4 className='text-base font-bold mb-2 uppercase underline'>Descripción</h4>
                <span className='block'>MEJORAS</span>
                <p>Casa principal de 1943, diseño del arquitecto holandés Van Brant, se asemeja a un castillo anglo normando. Está ubicada sobre una pequeña colina, que privilegia la vista de los jardines de los alrededores y a su vez ofrece una esplendida visión de la casa observada desde el campo. La construcción se realizó con los mejores materiales disponibles, para ser elegante, pero no pretenciosa, y ser capaz de resistir el paso del tiempo. Todos los pisos, techos, escaleras y ornamentos fueron hechos de madera dura y están en condiciones excelentes.<br />
                El sótano es muy luminoso y bien ventilado debido a que en el diseño de la casa se incluyó &quot;un cavado&quot; que rodea toda la parte trasera de este nivel. En él se encuentran los vestuarios con cómodas duchas, preparados para cubrir todas las necesidades de los invitados que hayan realizado actividades en el campo.
                La planta baja destinada a las diversas actividades sociales cuenta con un hall de entrada y recepción y tres salones comunicados entre sí que miran a la gran terraza (329 m2) desde la cual se puede acceder al parque de ciervos, ideal para reuniones y disfrutar de las increíbles puestas de sol sobre los campos y bosques.
                La planta alta cuenta con 15 habitaciones, dentro de las cuales se encuentran la suite principal (120 m2) que está destinada a la novia y consiste en un dormitorio de 40m2 con chimenea, un cuarto de baño y una antecámara; y la habitación del novio con cuarto de baño privado.
                <br />
                Caballeriza:
                <br />
                Es un ámbito especial para la realización de eventos diferentes en un lugar mágico. Recibe a los invitados el gran patio de grava de 20m x90m donde se destaca la espectacular fachada cuya puerta de ingreso al &quot;Salón de los Establos&quot; es una gran herradura. El otro salón es el de los carruajes donde pueden realizarse cenas hasta 150 personas.
                <br />
                Capilla:
                <br />
                Fue construida alrededor de añosas casuarinas, araucarias y arbustos, a menos de 100 metros de la entrada de la Casa Principal. Regalo de Jules a su querida esposa en el aniversario de sus 25 años de casados. Diseñada en estilo Art Noveau, se destacan sus extraordinarios vitraux, realizados por el renombrado arquitecto, artista y escritor eslovaco, Ronsky. Tiene capacidad para 50 personas y cumple con las autorizaciones necesarias para celebrar ceremonias religiosas.
                <br />
                Parques:
                <br />
                Cuenta con 14 hectáreas de jardines diseñados estratégicamente alrededor de la Casa Principal, que fueron realizados bajo la supervisión de Jules Steverlynck, y su esposa, Marie Alice, que incorporaron a lo largo de los años, plantas y árboles traídos de diferentes partes del mundo.
                <br />
                Los jardines son atravesados por 2 kilómetros de serpenteantes senderos de grava, donde se encuentran a lo largo del día, docenas de pavos reales, faisanes y gallinas de Guinea.
                <br />
                La Gran Casa marca el punto de encuentro de dos tipos distintos de parque.
                <br />
                El del norte de una exquisita densidad forestal y el del sur sobre una inclinada pradera natural, habitada por ciervos y delimitada en la línea del horizonte por frondosos bosques de más de 300 variedades de árboles.
                <br />
                Otro rasgo único de los jardines son sus &quot;glorietas&quot;. Éstos son espacios circulares, abiertos y ligeramente elevados, con estructuras de bóveda metálicas cubiertas por glicinas y otras variedades de plantas en flor. Son puntos ideales para asados ya que proporcionan una sombra naturalmente fresca.
                <br />
                A sólo unos metros de la Casa Principal y escondida por un pequeño bosque denso, se encuentra la pista de tenis de polvo de ladrillo.
                <br />
                Uno de los lugares preferidos a la hora de recepcionar a los invitados es el prado sur de la casa Principal, desde donde puede contemplarse la puesta de sol en la inmensidad del campo, momento que es acompañado del murmullo del agua que fluye por las piedras del tajamar, convirtiéndose en fuente de alimentación de la reserva de aves, entre los que se encuentran pavos, gansos y flamencos, desembocando en una de las lagunas de la Estancia.
                <br />
                Pileta de natación.
                <br />
                Bosques:
                <br />
                Las aproximadamente 400 hectáreas de bosques que tiene Santa Elena, ya tienen casi 80 años y son una parte inestimable de la herencia de Jules. Como un amante fiel de la naturaleza, él personalmente supervisó todos los aspectos de la perquizacion, que armoniosamente combinó entre más de 300 especies locales y extranjeras de árboles, plantas industriales y escénicas y animales que se desarrollaron en espacios naturales. Más tarde se creó un sistema de siete lagunas interconectadas. Estas lagunas son uno de los toques de luz de Santa Elena y otorgan un paisaje impresionante, sobre todo en otoño cuando los colores están en su pico.
                <br />
                El Río Luján, silencioso, tranquilo y que serpentea rápidamente, es realmente una de las piedras angulares de Villa Flandria y la historia de Santa Elena de vida y progreso. Es una fuente de entretenimiento, ocio, belleza y la base del ecosistema circundante.
                <br />
                Esta frontera del Este se estira más de 5 kilómetros, que comienzan en el sitio de la fábrica y alcanzan al área de sistema de laguna. El río es de navegación y tiene tendencia para todas las clases de actividades acuáticas recreativas</p>
                <span className='block uppercase'>Aptitud:</span>
                <p>Santa Elena es una Estancia única, con más de 400 variedades de árboles y seis lagunas diseñadas en la reserva forestal, conformando un ecosistema de incalculable belleza a través de sus campos, jardines y prados. El diseño funcional de Santa Elena la hace propicia para todo tipo de usos y actividades, desde eventos sociales, eventos empresariales, convenciones o reuniones de trabajo. Este carácter polifacético del uso es principalmente debido a la distribución inteligente de espacios funcionales.
                <br />
                La estancia posee áreas destinadas a la agricultura y a la ganadería vacuna y ovina.</p>
              </div>
              <div>
                <Gallery images={imagesLujan} />
                <iframe className='mt-12 border-4 border-blueMain' width="100%" height="400" src="https://www.youtube.com/embed/WMXQkLBcbh4?si=UEkzKp24VIP0t7I_" title="El Fortin Patria video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
        {/* Lujan: End */}

      </section>
    </main>
  )
}

export default Campos