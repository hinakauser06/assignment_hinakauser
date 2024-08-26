import React from "react";

const Breadcrumb = () => {
    return (
        <>
            <div className="flex flex-row justify-between w-full p-1">
                <div className="w-6/8 flex gap-3">
                    <h4 className="text-teal-400">Home</h4>
                    <span className="">&#8594;</span>
                    <h4 className="text-teal-400">Livebestand</h4>
                    <span className="">&#8594;</span>
                    <h4 className="text-[#045a5c] font-semibold">Cannabis Blüten</h4>
                </div>

                <div className="flex flex-col w-2/8 text-right text-[#045a5c] px-1">
                    <button className="text-wrap">
                        GKV mit Kostenübernahme?
                    </button>

                    <button className="border-2 border-[#62c3c6] px-12 my-2 rounded-tl-3xl rounded-br-3xl hover:bg-cyan-200">
                        Preisoptionen
                    </button>

                </div>

            </div>
        </>
    );
};

export default Breadcrumb;