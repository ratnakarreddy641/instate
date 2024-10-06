import React from 'react'
import IconButton from '@mui/material/IconButton';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

function Home() {
  return (
    <div className='p-4 h-screen text-sm'>
      <nav className='flex items-center justify-between'>
        <a href="/" className='text-3xl font-semibold'>instate</a>
        <div className='flex'>
          <a className='mx-2' href="/Home">Home</a>
          <a className='mx-2' href="/About">About</a>
          <a className='mx-2' href="/Home">Contact</a>
        </div>
        <div className='flex' >
          <div className='outline	outline-slate-100	rounded shadow'>
            <input className='px-2 border-0 text-sm rounded outline-none' type="text" />
            <button className='px-2 outline rounded outline-slate-100 hover:bg-slate-100 '>Search</button>
          </div>
          <button className='mx-2 px-2 outline rounded outline-slate-100 shadow hover:bg-slate-100'>Sign up</button>

        </div>



      </nav>
      <section className='flex flex-col items-start h-2/4 justify-center' >
        <h1 className='text-2xl'>Break the Mold. <br /> Your Next Big Idea Starts Here.</h1>
        <button className='rounded-lg border-2 px-5 py-1 mt-2 shadow text-sm hover:bg-slate-100'>Get Started</button>
      </section>
    </div>

  )
}

export default Home

