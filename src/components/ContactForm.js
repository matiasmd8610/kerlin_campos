import React from 'react'

const ContactForm = () => {
  return (
    <form className='w-full lg:w-[550px]' action='sendmail.php' data-aos="fade-up">
        <div className='form-group mb-6'>
            <input className='p-3 px-4 w-full rounded-lg text-base focus:outline-none focus:outline-[3px] focus:outline-greenMain focus:outline-offset-0 transition-all' type='text' name='name' id='name' placeholder='Nombre y Apellido' required />
        </div>
        <div className='form-group mb-6'>
            <input className='p-3 px-4 w-full rounded-lg text-base focus:outline-none focus:outline-[3px] focus:outline-greenMain focus:outline-offset-0 transition-all' type='tel' name='telephone' id='telephone' placeholder='Teléfono' required />
        </div>
        <div className='form-group mb-6'>
            <input className='p-3 px-4 w-full rounded-lg text-base focus:outline-none focus:outline-[3px] focus:outline-greenMain focus:outline-offset-0 transition-all' type='email' name='email' id='email' placeholder='E-mail' required />
        </div>
        <div className='form-group mb-8'>
            <textarea name='comment' id='comment' placeholder='Ingrese su mensaje aquí' className='p-3 px-4 w-full rounded-lg text-base h-[150px] focus:outline-none focus:outline-[3px] focus:outline-greenMain focus:outline-offset-0 transition-all' required></textarea>
        </div>
        <button type='submit' id='send' name='send' value={"Enviar"} className='btn btn-secondary' data-aos="fade-up">
            Enviar
            <svg className="icon" width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.4417 12.3334V7.66669H0.0349997L0 5.32169H10.4417V0.666687L16.275 6.50002L10.4417 12.3334Z" fill="#0b9444" />
            </svg>
        </button>
    </form>
  )
}

export default ContactForm