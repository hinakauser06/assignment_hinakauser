import React from "react";
import { useState } from "react";

// import { HiOutlineSearch } from "react-icons/hi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faList } from '@fortawesome/free-solid-svg-icons';
// import { faBars } from '@fortawesome/free-solid-svg-icons'; // Import the menu icon


const Nav = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className=" flex justify-between items-center leading-3 p-5 gap-3">
                <div className="flex flex-row h-[50px] w-[160px] p-[4px] gap-3">
                    <div className='w-3.5 h-5 mt-2 rounded-tl-2xl rounded-br-2xl bg-[#28e3e9] '></div>
                    <div className="text-center font-bold text-2xl text-[#116a6c]">Blüten</div>
                </div>
                <div className="flex justify-center gap-3">
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            placeholder="Suchen"
                            className="w-full  pl-4 border-0 pr-24 py-1 text-xs text-[#62c3c6] bg-[#f0f1ef]
                             rounded-full focus:outline-none focus:ring-2 focus:ring-[#62c3c6] placeholder"
                        />
                        <FontAwesomeIcon icon={faSearch} className="absolute right-3 text-[#62c3c6]" />

                    </div>
                    <div className="relative inline-block">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center bg-[#ceebea] text-[#365758] text-sm font-semibold px-2 py-0.5 rounded-md"
                        >
                            Sortieren nach
                            <svg
                                className="ml-2 w-4 h-4 text-[#62c3c6] transform transition-transform duration-200"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                ></path>
                            </svg>
                        </button>

                        {isOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                                <ul className="py-1 text-gray-700">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-teal-100">
                                            Option 1
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-teal-100">
                                            Option 2
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-teal-100">
                                            Option 3
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="flex items-center bg-[#ceebea]  px-4 py-0.5 rounded-md w-max">
                        <span className="text-[#365758]  text-sm font-semibold">
                            Verfügbarkeit
                        </span>
                        <button
                            onClick={() => setIsEnabled(!isEnabled)}
                            className={`ml-1 w-4 h-2 flex items-center bg-[#aedfdf] rounded-full  transition duration-300 ease-in-out ${isEnabled ? "bg-[#aedfdf]" : "bg-[#2e9595]"
                                }`}
                        >
                            <div
                                className={`bg-[#62c3c6]  w-3 h-3 rounded-full shadow-md transform transition duration-300 ease-in-out ${isEnabled ? "translate-x-3  " : "bg-[#1f7e81]"
                                    }`}
                            ></div>
                        </button>
                    </div>
                    <button className=" bg-[#ceebea]">
                        <FontAwesomeIcon icon={faList} className="w-10 h-10 text-[#045a5c]" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Nav;