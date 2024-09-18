import React from 'react'
import IconButton from '@mui/material/IconButton';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

function Home() {
  return (
    <div className='p-4 h-screen'>
      <nav className='flex items-center justify-between'>
        <a href="/"className='text-3xl font-semibold'>instate</a>
        <div className='flex text-xs'>
          <a className='mx-2' href="/Home">Home</a>
          <a className='mx-2' href="/About">About</a>
          <a className='mx-2' href="/Home">Contact</a>
        </div>
        <IconButton>
          <TipsAndUpdatesIcon />
        </IconButton>
      </nav> 
      <section className='flex flex-col items-start h-2/4 justify-center' >
        <h1 className='text-2xl'>Break the Mold. <br/> Your Next Big Idea Starts Here.</h1>
        <button className='rounded-lg border-2 px-5 py-1 mt-2 shadow-lg text-sm hover:bg-slate-100'>Get Started</button>
      </section>
    </div>

  )
}

export default Home

