import React from 'react'

function Service() {

  const services = [
    {id:1 , title: "Secure Health Data Storage" , description: "Medichronicle provides a robust and secure platform for storing all your health data. Your information is encrypted and stored in compliance with stringent privacy regulations, ensuring confidentiality and peace of mind." , image: "/img/medical-prescription.png"},
    {id:2 , title: "Seamless Record Access" , description: "Access your medical records anytime, anywhere with Medichronicle. Our user-friendly interface allows for effortless retrieval of your health history, empowering you to make informed decisions and seamlessly coordinate with healthcare providers." , image: "/img/medical-prescription.png"},
    {id:3 , title: " Collaborative Health Management" , description: "Medichronicle facilitates collaborative health management by enabling easy sharing of medical records with authorized healthcare professionals. Improve communication and coordination between you and your healthcare team for personalized and efficient care." , image: "/img/medical-prescription.png"}
  ]

  return (
    <div id='service'>
      {/*services card */}
      <div className='mt-20 md:w-1/2 mx-auto text-center'>
        <h2 className='text-6xl text-neutralDGrey font-semibold mb-3'>MediChronicle Service Specification</h2>
        <p className=' text-neutralGrey'>MediChronicle offers prescription management, medical history tracking, appointment scheduling, and secure communication between patients and healthcare providers</p>
      </div>

      {/*cards */}
      <div className=' mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
        {
          services.map(service =>
            <div className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
              <div>
                <div className=' bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'><img src={service.image} alt="" /></div>
                <h4 className=' text-2xl font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>'
                <p className=' text-sm text-neutralDGrey'>{service.description}</p>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Service
