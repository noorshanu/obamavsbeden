import React from 'react'

function Meme() {
  return (
    <section className=' py-8'>
        <div className='container-wrapper'>
            <div className=' flex justify-center gap-6 items-center flex-col sm:flex-row'>

                <img src="images/meme1.jpeg" alt="" className=' h-[300px] rounded-lg shadow-md' />
                <img src="images/meme2.jpeg" alt=""  className=' h-[300px] rounded-lg shadow-md'  />
                <img src="images/meme3.jpeg" alt=""  className=' h-[300px] rounded-lg shadow-md'  />

                


            </div>

        </div>
    </section>
  )
}

export default Meme