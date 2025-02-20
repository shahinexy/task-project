
import React from 'react';

import { AiOutlinePlus } from "react-icons/ai";

const Terminalpage = () => {
    const item = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <div>
            <div className="flex justify-between">
                <h1 className="md:text-5xl text-3xl font-medium md:mb-4 mb-2">
                    Welcome Back , Arik Lee
                </h1>
                <div className="inline-block">
                    <button className='bg-gradient-to-b from-[#32CD32] to-[#249A24] rounded-3xl py-[10] md:px-7 px-3 text-xl text-white flex gap-2 items-center'>
                        <AiOutlinePlus /> Add Terminal
                    </button>
                </div>
            </div>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-7 ">
                {
                    item.map((item, idx) => <div className='bg-white md:p-7 p-3 rounded-3xl'>
                        <div className="flex items-start space-x-4">
                            {/* Left Side Icons with Dotted Line */}
                            <div className="flex flex-col items-center">
                                {/* Top Icon */}
                                <div className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full">
                                    🟢
                                </div>
                                {/* Dashed Line */}
                                <div className="w-1 h-12 border-l-2 border-dashed border-green-500"></div>
                                {/* Wallet Icon */}
                                <div className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full">

                                </div>
                                {/* Dashed Line */}
                                <div className="w-1 h-12 border-l-2 border-dashed border-green-500"></div>
                                {/* Bus Icon */}
                                <div className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full">

                                </div>
                            </div>

                            {/* Right Side Text */}
                            <div className="space-y-3">
                                <div>
                                    <p className="text-gray-500">Terminal Name</p>
                                    <p className="text-xl font-semibold">Jibowu</p>
                                </div>
                                <div>
                                    <p className="text-gray-500">Fare Range</p>
                                    <p className="text-xl font-semibold">₦100-₦150</p>
                                </div>
                                <div>
                                    <p className="text-gray-500">Available Vendors</p>
                                    <p className="text-xl font-semibold">ABC Bus</p>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Terminalpage;