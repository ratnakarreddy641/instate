import React from 'react'

function Ideaform() {
    return (
        <>
            <nav className='flex items-center justify-center m-2'>
                <a href="/" className='text-3xl font-semibold'>instate</a>
            </nav>
            <section className='flex justify-center'>
                <div className="w-1/2 flex flex-col idea_ip">
                    <label htmlFor="ip_Title">Title</label>
                    <input className="p-2 rounded border" type="text" id="ip_Title" />
                    <label htmlFor="ip_Desc">Description</label>
                    <textarea className="p-2 rounded border"type="text" id="ip_Desc" />
                </div>
            </section>


        </>
    )
}

export default Ideaform