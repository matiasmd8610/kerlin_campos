import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* HERO: Begin */}
      <section className='hero mt-2'>
            <div className='container'>
                <div className='hero-content bg-[url("/images/field_hero.jpg")] min-h-[600px] bg-no-repeat bg-cover rounded-3xl bg-bottom py-10 px-[100px] relative'>
                    <h1 className='text-white text-center text-[40px] lg:text-[55px] z-10 relative uppercase'>Kerlin Campos</h1>
                    <h2 className='text-white text-center text-[30px] lg:text-[45px] z-10 relative mt-8'>Pensamos Proyectos productivos a medida de nuestros cliente </h2>
                </div>
            </div>
        </section>
        {/* HERO: End */}

    </main>
  );
}
