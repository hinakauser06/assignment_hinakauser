import React from 'react'

export const MainCard = ({ item }) => {
    return (

        <div className={`w-full bg-white  shadow-lg overflow-hidden  rounded-tl-3xl rounded-br-3xl ${!item.isAvailable ? 'border-2 border-[#28e3e9]' : ''} `}>
            {/* Top Part */}
            <div className="p-1 flex flex-col md:flex-col-3 sm:flex-col-1 lg:flex-col-3 items-center pt-4">
                {/* check for availability */}
                {!item.isAvailable ?
                    <div className=' w-5/12 mr-24 '>
                        <div className='flex flex-row text-[#a10c0c] bg-[#faf3f3] ps-2 px-1 rounded-xl space-x-1 '>
                            <div className='rounded-full  bg-[#a10c0c] h-1 w-1 my-1'></div>
                            <div className='text-[10px]'>nicht lieferbar</div>
                        </div>
                    </div>
                    :
                    <div className='flex flex-row text-[#0d7052] space-x-16'>
                        <div className='flex flex-row w-9/12 text-[#0d7052] bg-[#f3f8f6]  ms-0 px-2 rounded-xl space-x-1  '>
                            <div className='rounded-full  bg-[#0d7052] h-[3px] w-[3px] my-[7px]'></div>
                            <div className='text-[10px]'>sofort lieferbar</div>
                        </div>
                        <div className='w-3/12 text-[10px] bg-[#f3f8f6] px-3 rounded-3xl'>Neu</div>
                    </div>}
                <img
                    className="h-26 w-24 pt-3 pb-2 "
                    src="/Medicine1.png"
                    alt="Product"
                />
            </div>

            {/* Bottom Part */}
            
            <div className={`p-4 bg-[#D0EDEE] ${!item.isAvailable ? 'border-t-2 border-[#28E3E9]' : ''}`}>
                <div>
                    <span className='bg-[#AFE0E2]  font-medium text-[rgb(54,87,88)] px-2 pb-1 text-[14px] rounded'>{item.name}</span>
                    <div className='mt-3 space-x-2  flex font-semibold '>
                        <span className='bg-white text-[#116A6C] rounded-sm px-2 py-1 md:text-[14px] lg:text-[14px]'>THC {item.discount}% </span>
                        <span className='bg-[#62C3C6] text-white px-2 py-1 rounded-sm md:text-[14px ] lg:text-[14px] '> CBD &lt; 1% </span>
                        <img src="/icon1.png " alt="icon-leaf" className='h-6 w-6' />
                    </div>
                    <p className='text-[#116A6C] font-bold pt-2 text-[16px]'>{item.description}</p>
                    <div className='text-[14px] pt-4 text-[#365758] font-semibold '>
                        <div className='grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 justify-between'>
                            {item.list.map((data, index) => (
                                <span key={index} className={index % 2 === 0 ? 'text-left' : 'text-right'} >{data}</span>

                            ))}
                        </div>

                    </div>
                    <div className='flex flex-row pt-5 h-18 sm:flex-row justify-between'>
                        <div className='flex flex-col size-4/12'>
                            <div className='text-[#116a6c] font-extrabold text-xl'>
                                <span className='text-[#62c3c6] '>&euro;</span>11,66<sup className='text-[10px] pt-0 '>1</sup>
                            </div>
                            <div className='text-[10px] text-[#365758] '>pro Gramm</div>
                        </div>
                        <button className='size-7/12 text-[10px] text-center bg-[#ECFEAA] text-[#365758] py-1 mt-2 rounded-tl-3xl rounded-br-3xl'>
                            in den Warenkorb
                        </button>
                    </div>
                </div>
            </div>
        </div>





    )
}
