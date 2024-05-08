import React from 'react'
import { CgShoppingCart } from 'react-icons/cg'
import { FaSearch } from 'react-icons/fa'
import { IoPersonOutline } from 'react-icons/io5'
import logo from "../../accets/images/navbar/logo.png"
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className=' shadow-md   ' >
            <div className='kontainer h-[50px] border-b-2 flex items-center justify-between  '>
                <div className='flex gap-3'>
                    <select className='border-[2.5px] border-black rounded-[5px] ' name="" id="">
                        <option value="">
                            EN
                        </option>
                        <option value="">
                            UZ
                        </option>
                        <option value="">
                            RUS
                        </option>
                    </select>
                    <select className='border-[2.5px] border-black rounded-[5px] ' name="" id="">
                        <option value="">
                            USD
                        </option>
                        <option value="">
                            RUB
                        </option>
                        <option value="">
                            SUM
                        </option>
                    </select>
                </div>
                <div className='flex gap-5 items-center'>
                    <div className='flex justify-between items-center gap-2'>
                        <IoPersonOutline />
                        <p>My profile</p>
                    </div>
                    <div>
                        <CgShoppingCart />
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <p> Items</p>
                        <p className='text-[#666]    '>$0.00</p>
                        <FaSearch />
                    </div>
                </div>
            </div>
            <div className='h-[70px] kontainer flex items-center justify-between'>
                <div className='w-[30%]'>
                    <img src={logo} alt="" />
                </div>
                <ul className='flex items-center justify-between w-[70%] '>
                    <li>
                        HOME
                    </li>
                    <li>
                        BAGS
                    </li>
                    <li>
                        SNEAKERS
                    </li>
                    <li>
                        BELT
                    </li>
                    <li>
                        CONTACT
                    </li>
                    <li>
                        <Link to={"/wishlist"}>
                            WISHLIST
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar