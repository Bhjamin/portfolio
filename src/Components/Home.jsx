import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()


  return (
    <div className='flex items-center flex-col h-96 justify-between' >


        <section className=' border-2 border-info rounded-lg max-w-3xl p-4 shadow-2xl'>
            <h1>About me:</h1>
            <br/>
           <p className=' leading-9 '>
           I am a highly motivated front-end web developer based in Lehi, UT. I recently completed an intensive web development boot camp at Dev Mountain where I have learned the latest and most popular technology for building modern and responsive websites. My primary focus is creating user-friendly websites that provide seamless experiences for visitors. I am dedicated to delivering high-quality results and am always eager to learn new techniques and technologies to make that possible.
           </p>
        </section>


        <button className='btn rounded-lg mt-4 ' onClick={() => navigate('/projects')}>My Projects</button>
    </div>
  )
}

export default Home