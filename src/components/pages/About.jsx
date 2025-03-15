import React from 'react'
import Navbar from '../Navbar'

const About = () => {
  const visionImg = "https://res.cloudinary.com/dnxovvjcz/image/upload/v1721146251/Image_3_qxp4s5.png"
  const historyImg = "https://res.cloudinary.com/dnxovvjcz/image/upload/v1721150066/Image_4_nwxncq.png"
  
  return (
    <>
    <Navbar />

    {/* Services */}
    <div className="relative bg-aboutBG h-[620px] w-full -z-50  ">
    <div className='absolute top-[150px] left-[300px] w-[788px] h-[267px] bg-white opacity-[0.85] rounded-3xl'>
      <button className='bg-[#FFCC4A] w-[118px] h-[24px] rounded-3xl ml-[60px] mt-[48px]'>SERVICES</button>
      <p className='text-[#181818] font-bold text-[45px] ml-[60px] mt-[13px] leading-[58px]'>Creative Services For Boost <br /> Your Business Growth</p>
    </div>

    </div>

    {/*Our Vision */}
    <div className='flex container justify-between mt-[90px] mx-auto'>
      <div>
      <button className=' bg-[#4EAF4E] w-[118px] h-[24px] text-white rounded-3xl  '>Our Vision</button>
      <h1 className='text-[##181818] text-[45px] font-semibold'>Turn your ideas into reality.</h1>
      <p className='text-[#595566] text-[16px]'>Capitalize on low hanging fruit to identify a ballpark value added activity beta test. <br /> Override the digital divide with additional from DevOps.</p>
      <p className='text-[#595566] text-[16px] mt-5'>Bring to the table win-win survival strategies to ensure proactive domination. <br /> At the end of the day.</p>
      <p className='text-[#595566] text-[16px]'>Capitalize on low hanging fruit to identify a ballpark value added activity to <br /> beta test override the digital.</p>
      </div>

      <div className='flex'>
        <img src={visionImg} alt="" />
        
      </div>

    </div>

    
    <div className='flex justify-around mx-[100px] mt-10 mb-40'>
        <div>
          <p className='font-bold text-[50px]'>1128+</p>
          <p className='text-[18px]'>Successful Work</p>
        </div>

        <div>
          <p className='font-bold text-[50px]'>908+</p>
          <p className='text-[18px]'>Team Members</p>
        </div>

        <div>
          <p className='font-bold text-[50px]'>258+</p>
          <p className='text-[18px]'>Happy Customers</p>
        </div>

        <div>
          <p className='font-bold text-[50px]'>1128+</p>
          <p className='text-[18px]'>Creative Idea</p>
        </div>
      </div>

      { /* Core Values */}
      <div className='bg-[#F5F5F5] w-full h-[700px]'>
        <div className='flex justify-between  '>
          <div className='mx-auto'>
        <button className='w-[319PX] h-[24px] bg-[#FFCC4A] rounded-3xl mt-[100px]'>GROWING WITH OUR CLIENTS</button>
        <h1 className='font-semibold text-[45px]'>Our core values & principles</h1>
        <p className='text-[#595566] text-[16px]'>Capitalize on low hanging fruit to identify a ballpark value added activity beta test. <br /> Override the digital divide with additional from DevOps.</p>
        </div>
        <div className='mx-auto'>
        <button className='w-[167px] h-[59px] bg-[#181818] rounded-[42px] text-white mt-[160px] '>Get in touch</button>
        </div>
        </div>
      </div>

      { /*History */}
      <div className=' w-full h-[500px] place'>
      <button className='bg-[#4EAF4E] w-[151px] h-[24px] rounded-2xl text-white items-center mx-auto '>Our History</button>
      <h1 className='font-semibold text-[#181818] text-[45px] text-center '>Better Website Means A <br /> User Experience</h1>
      <p className='text-[#595566] text-center '>Ippsum is the result of synergy between our teams and our customers. Our company culture is focused <br /> on excellent productivity, customer satisfaction, respect for team and individual achievements.</p>
      <img src={historyImg} alt="" />
      </div>
    </>
  )
}

export default About