import React from 'react'
import Navbar from './Navbar'

function Blog() {

  const blogs = [
    {id:1 , title: "Understanding the Basics of Cardiovascular Health", description: " This blog post delves into the fundamentals of cardiovascular health, exploring topics such as heart anatomy, common cardiovascular diseases, risk factors, and preventive measures. It provides readers with essential knowledge to promote heart health and reduce the risk of cardiovascular issues."  , image:"/img/blog1.jpg"},
    {id:2 , title: "The Importance of Mental Health Awareness: Breaking the Stigma" , description: "Mental health awareness is crucial yet often stigmatized. This blog post discusses the significance of raising awareness about mental health, addressing common misconceptions, and providing tips for maintaining emotional well-being. It aims to empower readers to prioritize their mental health and seek support when needed." , image:"/img/blog2.jpg"},
    {id:3 , title: "Nutrition Essentials: Building a Balanced Diet for Optimal Health" , description: "Good nutrition is essential for overall health and well-being. This blog post offers practical guidance on building a balanced diet, including information on essential nutrients, portion control, and healthy eating habits. It equips readers with the knowledge they need to make informed dietary choices and support their long-term health goals." , image:"/img/blog3.jpg"}
  ]

  return (
    <>
    
    <div className='  px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='blog'>
      <div className='mt-20 md:w-1/2 mx-auto text-center'>
        <h2 className='text-6xl text-neutralDGrey font-semibold mb-3'>Recent Blog</h2>
        
      </div>

      {/*all blogs*/}
      <div className=' my-0 flex'>
        {
          blogs.map(blog =>
            <div class="max-w-sm mx-auto my-8 bg-white border border-gray-200 rounded-lg shadow-lg">
          <a href="#">
             <img class="rounded-t-lg" src={blog.image} alt="Blog Post Image"/>
          </a>
          <div class="p-5">
              <a href="#">
                  <h5 class="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-700">{blog.title}</h5>
              </a>
              <p class="mb-3 text-sm md:text-base font-normal text-gray-700">{blog.description}</p>
              <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-brandPrimary rounded-lg hover:bg-neutralDGrey focus:ring-4 focus:outline-none focus:ring-blue-300">
                  Read more
                  <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </a>
    </div>
</div>

          )
        }
      </div>

    </div>
    </>
  )
}

export default Blog
