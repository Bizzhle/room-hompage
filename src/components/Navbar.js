import React from 'react'
import { FaBars }  from 'react-icons/fa';


export default function Navbar() {
    return (
        <div className=" absolute w-full flex justify-between sm:justify-around p-4 text-white z-40">
            <button className="sm:hidden pt-1">
                <FaBars />
            </button>
            <div className="text-2xl font-bold">
                <h1>room</h1>
            </div>
            
            <div >
                <ul className="hidden sm:flex pt-1 ">
                    <li className="px-2 mx-2">home</li>
                    <li className="px-2 mx-2">shop</li>
                    <li className="px-2 mx-2">about</li>
                    <li className="px-2 mx-2">contact</li>
                </ul>
            </div>
        </div>
    )
}
