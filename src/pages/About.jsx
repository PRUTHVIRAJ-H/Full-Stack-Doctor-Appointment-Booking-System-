import React from 'react'
import { assets } from '../assets_frontend/assets'

const About = () => {
  return (
    <div>


        <div className='text-center text-2xl pt-10 text-gray-500'>
           <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>


           <div className='my-10 flex flex-col md:flex-row gap-12'>
              <img className='max-w-90' src={assets.about_image} alt="" />
              <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloremque non illo quas cum consectetur perferendis in. Libero sit mollitia ipsam explicabo in nam minima ea, blanditiis perspiciatis quis maxime inventore. Dolorem molestias nihil rem quis, repudiandae expedita ipsam qui quam iusto aliquid eaque optio, necessitatibus animi! Ea molestias voluptate dignissimos, veritatis cumque ut inventore ad itaque labore quidem alias nemo numquam harum dolores nesciunt placeat quo! Voluptate aut, numquam voluptatem veritatis a magni officia sed expedita nostrum aperiam illum reiciendis illo in et quas dolores iure exercitationem quae similique ipsa quidem molestiae ipsum eaque! Exercitationem illo temporibus omnis iure.</p>
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem alias tempora, beatae fugit nulla aspernatur autem repellendus sequi quis labore?</p>
                 <b className='text-gray-800'>Our vision</b>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam doloremque culpa architecto laborum! Eius, modi quia amet suscipit velit omnis sequi illum quas dolorum. Magnam?</p>
              </div>
           </div>
        </div>



        <div className = "text-gray-700 text-2xl my-4">
          <p>Why <span className='text-gray-900'>choose us</span></p>
        </div>


        <div className='flex flex-col md:flex-row mb-20'>
            <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px]'>
                <b>Efficeincy</b>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, ipsa?</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px]'>
                <b>Convinience</b>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, ipsa?</p>
            </div>
            <div className='border px-10 md:px-20 py-8 sm:py-16 flex flex-col gap-5 text-[15px]'>
                <b>Personalization</b>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, ipsa?</p>
            </div>
        </div>
    </div>

  )
}

export default About