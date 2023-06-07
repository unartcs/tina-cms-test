import React from 'react'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div className='home-wrapper'>
        <Navbar/>
        <div className='welcome-wrapper'>
            <h1>Welcome to the website</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore sit harum quam modi ex ducimus necessitatibus dolores omnis corrupti nemo. Officiis reprehenderit inventore, tempora quidem velit doloremque accusantium labore aliquid?</p>
        </div>
    </div>
  )
}

export default Home