"use client"
import React, { useState } from 'react';
import logo from '../../../public/images/Group 3.png'
import Image from 'next/image';
import { FaRegUserCircle } from "react-icons/fa";



const Navbar = () => {

    return (
        <div className='flex justify-between'>
            <div className="">
                <Image src={logo} height={70} width={100} alt='logo' />
            </div>

            <div className="bg-white p-3">
                
            </div>

            <div className=" flex gap-2 items-center px-5 py-2 rounded-full bg-white" >
                <FaRegUserCircle className='text-4xl' />
                <div className="">
                    <p className='text-sm'>Arik Lee</p>
                    <p className='font-medium text-sm'>Admin</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;