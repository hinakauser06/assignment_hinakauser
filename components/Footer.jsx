import React from 'react'

export const Footer = () => {
  return (
    <footer className='mt-44 h-52 bg-[#1A8D91] rounded-t-3xl'>
      <div className='w-full flex gap-1 px-24'>
        <div className='w-1/6 pt-20 text-[#8cc6c8] font-thin text-sm'>
          <p>ABG</p>
          <p>Impressum</p>
          <p>Datenschutz</p>
        </div>
        <div className='w-2/6 pt-10 space-y-3'>
          <div className='flex flex-row gap-7 text-white'>
            <div className='flex flex-row gap-1 '>
              <div className='w-2.5 h-4 mt-1 rounded-tl-2xl rounded-br-2xl bg-[#28e3e9] '></div>
              <div>Rezept einlösen </div>
            </div>
            <div className='flex flex-row gap-1 '>
              <div className='w-2.5 h-4 mt-1 rounded-tl-2xl rounded-br-2xl bg-[#28e3e9] '></div>
              <div>Live Bestand</div>
            </div>
          </div>
          <div className='flex flex-row gap-7 text-white'>
            <div className='flex flex-row gap-1 '>
              <div className='w-2.5 h-4 mt-1 rounded-tl-2xl rounded-br-2xl bg-[#28e3e9] '></div>
              <div>Videosprechstunde </div>
            </div>
            <div className='flex flex-row gap-1 '>
              <div className='w-2.5 h-4 mt-1 rounded-tl-2xl rounded-br-2xl bg-[#28e3e9] '></div>
              <div>FAQs </div>
            </div>
            <div className='flex flex-row gap-1 '>
              <div className='w-2.5 h-4 mt-1 rounded-tl-2xl rounded-br-2xl bg-[#28e3e9] '></div>
              <div>Kontakt </div>
            </div>
          </div>
        </div>
        <div className='w-1/6 pt-10'>
          <div className='text-[#8cc6c8]'>Standort </div>
          <div className='text-white font-semibold'>
            Bergstraße 49 – 57 <br />
            69469 Weinheim <br />
            (3 Golcken Quartier)

          </div>
        </div>
        <div className='w-1/6 pt-10 '>
          <div className='text-[#8cc6c8]'>Telefon </div>
          <div className='text-white font-semibold'>
            0223 545 5250

          </div>
        </div>
        <div className='w-1/6 pt-10'>
          <div className='text-[#8cc6c8]'>Offnungszeiten
            Mo-Fr </div>
          <div className='text-white font-semibold'>
            09:00 - 18:00 hr

          </div>
          <div className='text-[#8cc6c8]'>Sa
          </div>
          <div className='text-white font-semibold'>
            09:00 - 14:00 hr

          </div>
        </div>

      </div>


    </footer>

  )
}
