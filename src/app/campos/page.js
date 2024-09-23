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
  
  return (
    <main id='main' className='fields'>
        <section className='hero-section relative bg-[url("/images/hero_campos_bg.jpg")] h-[200px] lg:h-[260px] bg-no-repeat bg-cover flex items-center bg-bottom text-white'>
            <div className='container relative z-10'>
              <h1 className='text-[30px] lg:text-[40px] uppercase text-center leftBorder'>Nuestros Campos</h1>
            </div>
        </section>

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
                <div>
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
                    <h4 className='text-base font-bold mb-2 uppercase underline'>Información general</h4>
                    <span><strong>Superficie:</strong> 1470 HAS</span>
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
                <div>
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
                    <span className='block'><strong>Superficie:</strong> 100000000.0 HAS</span>
                    <span className='block'><strong>Incultas:</strong> 1.500 ha</span>
                    <span className='block'><strong>Pasto Natural:</strong> 8.500 ha</span>
                    <span className='block'><strong>Costas Santafesinas:</strong> 20 min en lancha rápida</span>
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
        </section>
    </main>
  )
}

export default Campos