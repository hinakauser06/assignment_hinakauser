import React from 'react';

export const Footer = () => {
  return (
    <footer className="mt-44 h-auto bg-[#1A8D91] rounded-t-3xl py-2 mx-auto">
      {/* Adjust padding and spacing for responsiveness */}
      <div className="w-full flex flex-col md:flex-row gap-6 md:gap-1 px-4 md:px-24">
        {/* Section 1 */}
        <div className="w-full md:w-1/6 pt-4 md:pt-20 text-[#8cc6c8] font-thin text-sm text-center md:text-left">
          <p>ABG</p>
          <p>Impressum</p>
          <p>Datenschutz</p>
        </div>
        
        {/* Section 2 */}
        <div className="w-full md:w-2/6  pt-4 md:pt-10 space-y-3 text-center md:text-left">
          <div className="flex flex-col md:flex-row gap-4 md:gap-7 text-white items-center md:items-start">
            <div className="flex flex-row gap-1 items-center">
              <div className="w-2.5 h-4 mt-1 rounded-tl-2xl rounded-br-2xl bg-[#28e3e9]"></div>
              <div>Rezept einlösen</div>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <div className="w-2.5 h-4 mt-1 rounded-tl-2xl rounded-br-2xl bg-[#28e3e9]"></div>
              <div>Live Bestand</div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-7 text-white items-center md:items-start">
            <div className="flex flex-row gap-1 items-center">
              <div className="w-2.5 h-4 mt-1 rounded-tl-2xl rounded-br-2xl bg-[#28e3e9]"></div>
              <div>Videosprechstunde</div>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <div className="w-2.5 h-4 mt-1 rounded-tl-2xl rounded-br-2xl bg-[#28e3e9]"></div>
              <div>FAQs</div>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <div className="w-2.5 h-4 mt-1 rounded-tl-2xl rounded-br-2xl bg-[#28e3e9]"></div>
              <div>Kontakt</div>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="w-full md:w-1/6 pt-4 md:pt-10 text-center md:text-left">
          <div className="text-[#8cc6c8]">Standort</div>
          <div className="text-white font-semibold">
            Bergstraße 49 – 57 <br />
            69469 Weinheim <br />
            (3 Golcken Quartier)
          </div>
        </div>

        {/* Section 4 */}
        <div className="w-full md:w-1/6 pt-4 md:pt-10 text-center md:text-left">
          <div className="text-[#8cc6c8]">Telefon</div>
          <div className="text-white font-semibold">0223 545 5250</div>
        </div>

        {/* Section 5 */}
        <div className="w-full md:w-1/6 pt-4 md:pt-10 text-center md:text-left">
          <div className="text-[#8cc6c8]">Öffnungszeiten <br/>Mo-Fr</div>
          <div className="text-white font-semibold">09:00 - 18:00 hr</div>
          <div className="text-[#8cc6c8]">Sa</div>
          <div className="text-white font-semibold">09:00 - 14:00 hr</div>
        </div>
      </div>
    </footer>
  );
};
