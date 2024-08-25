import SliderHero from "@/components/SliderHero";
import SliderServices from "@/components/SliderServices";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen" id="main">

      {/* HERO: Begin */}
      <section className='hero pt-0 pb-4 mt-2'>
            <div className='container'>
                <div className='hero-content flex flex-col items-center bg-[url("/images/hero_bg.jpg")] min-h-[88vh] bg-no-repeat bg-cover rounded-3xl bg-bottom pt-[3rem] pb-5 px-4 lg:px-[100px] relative'>
                    <h1 className='text-white text-center text-[40px] lg:text-[52px] z-10 relative uppercase font-extrabold'>Kerlin Campos</h1>
                    {/* <h2 className='text-white text-center text-[30px] lg:text-[42px] z-10 relative mt-10 mb-8 noBorder'>Descubre la nueva era en comercialización de campos </h2>
                    <p className="text-white text-center relative z-10 text-xl">En <strong>KERLIN CAMPOS</strong> Nos encanta lo que hacemos y siempre estamos buscando maneras nuevas y creativas para hacer las cosas. Con la ayuda de lo último en inteligencia artificial y marketing digital, conseguimos resultados increíbles para quienes quieren comprar o vender sus campos.</p> */}
                    <SliderHero />
                    <Link href="#contact" className="btn btn-primary absolute translate-x-[-50%] bottom-[7rem] left-[50%] z-20 mt-[5rem]">
                      Contactanos
                      <svg className="icon" width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.4417 12.3334V7.66669H0.0349997L0 5.32169H10.4417V0.666687L16.275 6.50002L10.4417 12.3334Z" fill="white"/>
                      </svg>
                    </Link>
                </div>
            </div>
        </section>
        {/* HERO: End */}

        {/* NUESTRA HISTORIA: Begin */}
        <section id="nuestra-historia">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-[5rem]">
              <div>
                <h3 className="text-blueMain leftBorder mb-10">Nuestra Historia</h3>
                <p className="text-justify">Entendemos cuánto cuenta para vos tener a alguien de confianza a tu lado cuando estás comprando o vendiendo un campo. Por eso, en <strong>KERLIN CAMPOS</strong>, nos hemos puesto las botas para ofrecerte un servicio que va de la mano con vos en cada paso: desde saber cada detalle del mercado hasta celebrar juntos al final de la venta.</p>
                <p className="text-justify">Te lo pintamos claro y completo, con informes que te muestran todo: desde cómo está el suelo y el agua hasta el mejor camino para llegar. Te acompañamos con consejos legales, contables y financieros, porque sabemos que los números y la letra chica también importan.</p>
                <p className="text-justify">Lo que nos mueve es la experiencia que tenemos en hacer tratos que terminan con apretones de manos y sonrisas de ambos lados. En <strong>KERLIN CAMPOS</strong>, nos llena de orgullo ser tu aliado completo y ofrecerte un servicio de primera que hace que todo valga la pena.</p>
                <p className="text-justify">Nuestras alianzas con líderes del sector agropecuario abren puertas y crean oportunidades, conectándote con una red de posibilidades.</p>
              </div>
              <div>
                <Image src={"/images/quienes_somos.jpg"} alt="Bulldozer" width={800} height={500} className="border-[6px] border-blueMain rounded-xl w-full rounded-bl-[120px]" />
              </div>
            </div>
          </div>
        </section>
        {/* NUESTRA HISTORIA: End */}

        {/* NUESTRO EQUIPO: Begin */}
        <section className="nuestra-propuesta bg-[url('/images/nuestra_propuesta_bg.jpg')] bg-no-repeat bg-cover relative bg-fixed">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-14">
            <div className="relative z-10">
                <Image src={"/images/nuestra_propuesta.jpg"} alt="Hombre casechando en el campo" width={300} height={200} className="border-[4px] border-white w-[65%] block rounded-xl absolute top-0 left-0" />
                <Image src={"/images/marketing_digital.jpg"} alt="Equipo de Marketing Digital" width={300} height={200} className="border-[4px] border-white w-[65%] block rounded-xl absolute bottom-0 right-2" />
              </div>
              <div className="relative z-10">
                <h3 className="text-white leftBorder mb-10">Nuestro Equipo</h3>
                <p className="text-white text-justify">Somos un grupo de entusiastas del campo y la tecnología: desde ingenieros agrónomos que aman la tierra hasta expertos del marketing digital y asesores inmobiliarios. Pero lo mejor es que no estamos solos en esto. Con el apoyo del Grupo Bee, que lleva más de 30 años cosechando éxitos en el agro, nuestra familia tiene una mezcla única de juventud y sabiduría.</p>
                <p className="text-white text-justify">En <strong>KERLIN CAMPOS</strong>, todos compartimos una misma pasión: el campo y su gente. Unimos nuestra energía y experiencia para darte el mejor servicio, con ese calor humano que solo un equipo unido por años de trabajar juntos puede ofrecerte. Porque para nosotros, cada hectárea, cada venta, y cada cliente son parte de nuestra gran historia rural.</p>
                <hr className="h-0.5 w-full bg-greenMain my-9 border-0 rounded-sm" />
                {/* <p className="text-3xl text-white font-medium mb-8">Con Kerlin el futuro cobra vida</p> */}
                <Image src={"/images/logo_grupo_bee.png"} alt="Logo Grupo Bee" width={150} height={50} />
              </div>
            </div>
          </div>
        </section>
        {/* NUESTRO EQUIPO: End */}

        {/* NUESTROS SERVICIOS: Begin */}
        <section>
          <div className="container">
              <div className="text-center">
                <h3 className="text-blueMain mb-14 mx-auto">Nuestros Servicios</h3>
                <p className='text-xl text-left'>Un equipo que siente el campo: más que servicios, en <strong>KERLIN CAMPOS</strong> te ofrecemos experiencias, acompañamiento y una relación que crece y prospera como el maíz en verano.</p>
                <p className='text-xl text-left'>Para nosotros, cada cliente es único y cada campo tiene su propia historia. Por eso, te damos una atención personalizada, escuchando tus necesidades y cuidando cada detalle como si fuera nuestro.</p>
              </div>
              <SliderServices />
          </div>
        </section>
        {/* NUESTROS SERVICIOS: End */}

        <a href="https://wa.me/5493364379531?text=¡Hola!%20Quisiera%20recibir%20más%20información%20sobre" target="_blank" className="whatsapp-button w-15 h-15 rounded-full bg-whatsapp block fixed bottom-5 left-5 bg-whatsapp flex p-3 z-40 hover:bg-green-700 transition-all duration-300 animate-bounce">
          <svg className="w-10 h-10" height="100" fill="#fff" viewBox="-23 -21 682 682.66669" width="100" xmlns="http://www.w3.org/2000/svg">
            <path d="m544.386719 93.007812c-59.875-59.945312-139.503907-92.9726558-224.335938-93.007812-174.804687 0-317.070312 142.261719-317.140625 317.113281-.023437 55.894531 14.578125 110.457031 42.332032 158.550781l-44.992188 164.335938 168.121094-44.101562c46.324218 25.269531 98.476562 38.585937 151.550781 38.601562h.132813c174.785156 0 317.066406-142.273438 317.132812-317.132812.035156-84.742188-32.921875-164.417969-92.800781-224.359376zm-224.335938 487.933594h-.109375c-47.296875-.019531-93.683594-12.730468-134.160156-36.742187l-9.621094-5.714844-99.765625 26.171875 26.628907-97.269531-6.269532-9.972657c-26.386718-41.96875-40.320312-90.476562-40.296875-140.28125.054688-145.332031 118.304688-263.570312 263.699219-263.570312 70.40625.023438 136.589844 27.476562 186.355469 77.300781s77.15625 116.050781 77.132812 186.484375c-.0625 145.34375-118.304687 263.59375-263.59375 263.59375zm144.585938-197.417968c-7.921875-3.96875-46.882813-23.132813-54.148438-25.78125-7.257812-2.644532-12.546875-3.960938-17.824219 3.96875-5.285156 7.929687-20.46875 25.78125-25.09375 31.066406-4.625 5.289062-9.242187 5.953125-17.167968 1.984375-7.925782-3.964844-33.457032-12.335938-63.726563-39.332031-23.554687-21.011719-39.457031-46.960938-44.082031-54.890626-4.617188-7.9375-.039062-11.8125 3.476562-16.171874 8.578126-10.652344 17.167969-21.820313 19.808594-27.105469 2.644532-5.289063 1.320313-9.917969-.664062-13.882813-1.976563-3.964844-17.824219-42.96875-24.425782-58.839844-6.4375-15.445312-12.964843-13.359374-17.832031-13.601562-4.617187-.230469-9.902343-.277344-15.1875-.277344-5.28125 0-13.867187 1.980469-21.132812 9.917969-7.261719 7.933594-27.730469 27.101563-27.730469 66.105469s28.394531 76.683594 32.355469 81.972656c3.960937 5.289062 55.878906 85.328125 135.367187 119.648438 18.90625 8.171874 33.664063 13.042968 45.175782 16.695312 18.984374 6.03125 36.253906 5.179688 49.910156 3.140625 15.226562-2.277344 46.878906-19.171875 53.488281-37.679687 6.601563-18.511719 6.601563-34.375 4.617187-37.683594-1.976562-3.304688-7.261718-5.285156-15.183593-9.253906zm0 0" />
          </svg>
        </a>
        <a href="#main" className="back-to-top border-2 block w-12 h-12 flex fixed right-5 bottom-5 items-center justify-center rounded-full bg-white border-2 border-blueMain z-50">
          <svg className="w-6 h-6" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 2L6.293 1.293L7 0.585999L7.707 1.293L7 2ZM8 17C8 17.2652 7.89464 17.5196 7.70711 17.7071C7.51957 17.8946 7.26522 18 7 18C6.73478 18 6.48043 17.8946 6.29289 17.7071C6.10536 17.5196 6 17.2652 6 17H8ZM0.292999 7.293L6.293 1.293L7.707 2.707L1.707 8.707L0.292999 7.293ZM7.707 1.293L13.707 7.293L12.293 8.707L6.293 2.707L7.707 1.293ZM8 2V17H6V2H8Z" fill="black"/>
          </svg>
        </a>

    </main>
  );
}
