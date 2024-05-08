import React from 'react'
import Adidas from '../adidas/Adidas'
import switch1 from '../../accets/images/like/switch.png'
import switch2 from '../../accets/images/like/switch(1).png'
import rate from '../../accets/images/like/rate.png'
import { TiShoppingCart } from 'react-icons/ti'
import { FaRegHeart } from 'react-icons/fa'

function Like() {
    return (
        <div className='kontainer'>
            <div className='py-[25px] flex items-start gap-[30px]'>
                <div className='w-[270px] flex flex-col gap-[30px]  '>
                    <div className='bg-[#F6F7F8] p-5 rounded-md  flex flex-col gap-5     '>
                        <h5 className='text-[18px] font-[500]  '>Hot Deals</h5>
                        <div className='flex justify-between items-center'>
                            <p>Nike</p>
                            <p>2</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p>Airmax</p>
                            <p>48</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p>Nike</p>
                            <p>14</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p>Adidas</p>
                            <p>15</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p>Vans</p>
                            <p>23</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p>All Stars</p>
                            <p>1</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p>Adidas</p>
                            <p>95</p>
                        </div>
                    </div>
                    <div className='bg-[#F6F7F8] p-5 rounded-md  flex flex-col gap-5     '>
                        <h5>PRICES</h5>
                        <div>
                            <div className='flex justify-between'>
                                <p>Ranger: </p>
                                <p>$13.99 - $25.99</p>
                            </div>
                            <div className='mt-[25px]'>
                                <input type="range" name="" id="" />
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#F6F7F8] p-5 rounded-md  flex flex-col gap-5     '>
                        <h5>COLOR</h5>
                        <div className='flex justify-between gap-4'>
                            <div className='w-[26px] h-[26px] p-[5px] bg-[#006CFF] border rounded-[50%]    '></div>
                            <div className='w-[26px] h-[26px] p-[5px] bg-[#FC3E39] border rounded-[50%]    '></div>
                            <div className='w-[26px] h-[26px] p-[5px] bg-[#171717] border rounded-[50%]    '></div>
                            <div className='w-[26px] h-[26px] p-[5px] bg-[#FFF600] border rounded-[50%]    '></div>
                            <div className='w-[26px] h-[26px] p-[5px] bg-[#FF00B4] border rounded-[50%]    '></div>
                            <div className='w-[26px] h-[26px] p-[5px] bg-[#EFDFDF] border rounded-[50%]    '></div>
                        </div>
                    </div>
                    <div className='bg-[#F6F7F8] p-5 rounded-md  flex flex-col gap-5     '>
                        <h5 className='text-[18px] font-[500]  '>BRAND</h5>
                        <div className='flex justify-between items-center'>
                            <p>Nike</p>
                            <p>99</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p>Nike</p>
                            <p>99</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p>Adidas</p>
                            <p>99</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p>Siemens</p>
                            <p>99</p>
                        </div>
                    </div>
                    <div>
                        <button className=' bg-[#F6F7F8] p-5 rounded-md  w-full'>MORE</button>
                    </div>
                </div>
                <div>
                    <Adidas />
                    <div className='bg-[#F1F3F4] py-2 px-4 rounded-md my-5   flex items-center justify-between   '>
                        <div className='flex items-center gap-[50px]'>
                            <p>13 Items</p>
                            <div className='flex items-center gap-2 '>
                                <p>Sort By</p>
                                <select className='bg-transparent outline-none border py-2 px-4 rounded-md' name="Name" id="">
                                    <option value="Laylo">Laylo</option>
                                    <option value="Laylo">Laylo</option>
                                    <option value="Laylo">Laylo</option>
                                    <option value="Laylo">Laylo</option>
                                    <option value="Laylo">Laylo</option>
                                    <option value="Laylo">Laylo</option>
                                </select>
                            </div>
                            <div className='flex items-center gap-2 '>
                                <p>Show</p>
                                <select className='bg-transparent outline-none border py-2 px-4 rounded-md' name="12" id="">
                                    <option value="Laylo">1</option>
                                    <option value="Laylo">2</option>
                                    <option value="Laylo">3</option>
                                    <option value="Laylo">4</option>
                                    <option value="Laylo">5</option>
                                    <option value="Laylo">6</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex'>
                            <img src={switch1} alt="" />
                            <img src={switch2} alt="" />
                        </div>
                    </div>




                    <div className='flex items-center gap-[25px] border-b-2 pb-7'>
                        <div className='w-[35%] relative'>
                            <div className='bg-[#FF4858] w-[40px] h-5 flex items-center justify-center text-white absolute top-[11px] left-[25px] rounded-sm   '>
                                <p>HOT</p>
                            </div>
                            <img className='w-full  ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx36KT3qDq3XTc3RtlSn0nVkfUy5OlrXgAPqu9sa8HlQ&s" alt="" />
                        </div>
                        <div className='w-[65%] flex flex-col gap-[15px]'>
                            <h2 className='text-[24px] text-[#22262A]    '>Nike Airmax 270 React</h2>
                            <div className='flex gap-3 items-center'>
                                <img src={rate} alt="" />
                                <label className='text-[#C1C8CE] text-[14px]  ' htmlFor="">0 reviews</label>
                                <span className='text-[#33A0FF] text-[14px]   '>Submit a review</span>
                            </div>
                            <hr />
                            <div className='flex items-center gap-4'>
                                <h3 className='text-[#40BFFF] text-[20px] font-[700]      '>$299,43</h3>
                                <del className='text-[#40BFFF] text-[14px]     '>$534,33</del>
                                <p className='text-[#FB7181]'>24% Off</p>
                            </div>
                            <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...</p>
                            <div className='flex items-center gap-[35px]'>
                                <button className='flex items-center gap-2 bg-[#cfe5fa] px-[15px] py-[12px] text-[#33A0FF]  rounded-md '><TiShoppingCart /><span>Add To Cart</span></button>
                                <button className=' bg-[#cfe5fa] px-[15px] py-[15px] text-[#33A0FF]  rounded-md '><FaRegHeart /></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Like