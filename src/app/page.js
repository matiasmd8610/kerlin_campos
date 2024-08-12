import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* HERO: Begin */}
      <section className='hero pt-0 pb-4'>
            <div className='container'>
                <div className='hero-content flex flex-col items-center bg-[url("/images/hero_bg.jpg")] min-h-[88vh] bg-no-repeat bg-cover rounded-3xl bg-bottom py-[4rem] lg:px-[100px] relative'>
                    <h1 className='text-white text-center text-[40px] lg:text-[55px] z-10 relative uppercase font-extrabold'>Kerlin Campos</h1>
                    <h2 className='text-white text-center text-[30px] lg:text-[42px] z-10 relative mt-10 noBorder lg:max-w-[800px]'>Pensamos Proyectos productivos a medida de nuestros cliente </h2>
                    <Link href="#contact" className="btn btn-primary relative z-10 mt-10">
                      Contactanos
                      <svg className="icon" width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.4417 12.3334V7.66669H0.0349997L0 5.32169H10.4417V0.666687L16.275 6.50002L10.4417 12.3334Z" fill="white"/>
                      </svg>
                    </Link>
                </div>
            </div>
        </section>
        {/* HERO: End */}

        {/* QUIENES SOMOS: Begin */}
        <section>
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <h3 className="text-blueMain leftBorder mb-10">¿Quienes somos?</h3>
                <p>Somos un equipo de interdisciplinario de profesionales que buscamos brindar a nuestros clientes la mejor experiencia en inversiones inmobiliarias rurales y el desarrollo de proyectos productivos. Lo hacemos ofreciendo oportunidades de inversiones a medida de lo requerido, maximizando los beneficios económicos y generando la sustentabilidad de su inversión mediante el desarrollo de proyectos productivos adaptados al potencial de su propiedad.</p>
                <p>Nuestro servicio es personalizado, comprendiendo las necesidades e intereses de nuestros clientes, basando nuestra atención en la integridad de los valores necesarios para generar un vínculo de confianza, seguridad y transparencia.</p>
              </div>
              <div>
                <Image src={"/images/quienes_somos.jpg"} alt="Bulldozer" width={800} height={500} className="border-8 border-blueMain border-rounded-5 w-full rounded-3xl" />
              </div>
            </div>
          </div>
        </section>
        {/* QUIENES SOMOS: End */}

        {/* NUESTRA PROPUESTA: Begin */}
        <section className="nuestra-propuesta bg-[url('/images/nuestra_propuesta_bg.jpg')] bg-no-repeat bg-cover relative">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-10">
            <div className="relative z-10">
                <Image src={"/images/nuestra_propuesta.jpg"} alt="Hombre casechando en el campo" width={800} height={500} className="border-8 border-blueMain border-rounded-5 w-full rounded-3xl" />
              </div>
              <div className="relative z-10">
                <h3 className="text-white leftBorder mb-10">Nuestra propuesta</h3>
                <p className="text-white">Somos un equipo de interdisciplinario de profesionales que buscamos brindar a nuestros clientes la mejor experiencia en inversiones inmobiliarias rurales y el desarrollo de proyectos productivos. Lo hacemos ofreciendo oportunidades de inversiones a medida de lo requerido, maximizando los beneficios económicos y generando la sustentabilidad de su inversión mediante el desarrollo de proyectos productivos adaptados al potencial de su propiedad.</p>
                <p className="text-white">Nuestro servicio es personalizado, comprendiendo las necesidades e intereses de nuestros clientes, basando nuestra atención en la integridad de los valores necesarios para generar un vínculo de confianza, seguridad y transparencia.</p>
              </div>
            </div>
          </div>
        </section>
        {/* NUESTRA PROPUESTA: End */}

    </main>
  );
}
