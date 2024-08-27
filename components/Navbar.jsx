// components/Navbar.js
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    // State to manage active tab
    const [activeTab, setActiveTab] = useState('Rezept einlösen');

    // Tabs data
    const tabs = [
        'Rezept einlösen',
        'Live Bestand',
        'Videosprechstunde',
        'FAQs',
        'Kontakt'
    ];

    return (
        <nav className=" sm:w-full sm:mx-auto">
            <div className="container mx-auto flex items-center md:justify-center  lg:justify-between my-8 py-2 leading-3 sm:px-0">
                {/* Search Bar */}
                <div className='w-4/12'>
                    {/* Search Bar */}
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            placeholder="Suchen"
                            className="w-full h-6 pl-4 border-0 pr-10 py-2 text-sm text-[#62c3c6] bg-[#eef7f7]
                             rounded-full focus:outline-none focus:ring-2 focus:ring-[#62c3c6] placeholder"
                        />
                        <FontAwesomeIcon icon={faSearch} className="absolute right-3 text-[#62c3c6]" />

                    </div>
                </div>

                {/* Navigation Links */}

                <div className=" sm:mr-0 sm:ml-0 sm:flex-row lg:flex-row items-center sm:space-x-1 md:space-x-4 ml-4 md:flex-row flex">
                    {tabs.map((tab) => (
                        <a
                            key={tab}
                            href="#"
                            onClick={() => setActiveTab(tab)}
                            className={`flex items-center sm:text-[14px] text-sm ${activeTab === tab ? 'text-[#045a5c] font-bold' : 'text-[#045a5c]'
                                }`}
                        >
                            {/* Icon and text container */}
                            <div className="flex items-center space-x-1 sm:flex-row ">
                                <div
                                    className={`w-2 h-3  rounded-tl-2xl rounded-br-2xl ${activeTab === tab ? 'bg-[#28e3e9]' : 'bg-[#ceebea]'
                                        }`}
                                ></div>
                                <span>{tab}</span>
                            </div>
                        </a>
                    ))}
                </div>


                {/* Cart Icon and Login Button */}
                <div className="flex items-center space-x-4">
                    {/* Cart Icon */}
                    <a href="#" className="relative">
                        <FontAwesomeIcon
                            icon={faShoppingCart}
                            className="w-6 h-6 text-[#28e3e9] hover:text-[#045a5c] "
                        />
                        <span className="absolute top-3 right-0 inline-flex items-center justify-center px-0.5 py-0.5 
                        text-[9px] font-bold leading-none text-[#28e3e9] transform translate-x-1/2
                         -translate-y-1/2 bg-[#ceebea] rounded-full">
                            1
                        </span>
                    </a>


                    {/* Login Button */}
                    <a
                        href="#"
                        className="bg-[#ecfeaa] text-[#045a5c] px-4 py-2 rounded-tl-3xl rounded-br-3xl hover:bg-yellow-400"
                    >
                       <div className='text-xs'>Anmelden</div> 
                    </a>



                </div>
            </div>
        </nav>
    );
};

export default Navbar;
