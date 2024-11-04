/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import Image from "next/image";
import React, { useState } from 'react';
import myAxios from '../../lib/axios.config';
import { REGISTER_URL } from '../../lib/apiEndPoints';
import Link from "next/link";
import { FaAnglesLeft, FaEnvelope, FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa6";
import { IoEyeOff } from "react-icons/io5";
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation';

const page = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [authVal, setAutVal] = useState({ fname:"",lname:"", email: "", password: "",password_confirmation: ""});
  const [errors, setErrors] = useState({ fname:[], email: [], password: []});
  const router = useRouter();

  const handleSubmit = (event:React.FormEvent) => {
    event.preventDefault();
    myAxios.post(REGISTER_URL,authVal)
    .then((res) => {
        setLoading(false);
        const response = res.data;
        toast.success("Account created success !!")
        console.log(response);
        router.push("/auth/login")
    })
    .catch((err) =>{
      setLoading(false);
      if(err.response?.status === 422){
        setErrors(err.response?.data.errors);
      }else{
        toast.error("Something went wrong. Please try again !!")
      }
    })
  }

    return (
        <div className='w-full h-screen flex justify-center items-center text-center'>
          <div className='w-[1000px] shadow-2xl dark:shadow-2xl dark:shadow-gray-950  bg-gray-100 dark:bg-navy-800 rounded-3xl flex flex-row'>
            <div className='w-3/5 bg-[#004f91] hidden sm:flex flex-col items-center rounded-l-3xl px-10 py-28'>
              <Image src={"../../../UnIt.png"} alt='UN-IT' className='rounded-full mx-20 object-contain' width={130} height={130} />
              <h2 className='text-3xl font-bold text-white mb-2'>Bievennu a bord !</h2>
              <div className='w-20 border-[3px] rounded-full border-white inline-block'></div>
              <p className='text-white mb-10'>Créé une nouvelle compte pour faciliter l{"'"}utilisation de nos plateforme, </p>
              <Link href={"/auth/login"} className=' border-2 border-white rounded-full px-12 py-2 text-white inline-block font-bold transition hover:bg-white hover:text-[#004f91]' >Login</Link>
            </div>
            <div className='w-full p-5 py-10'>
              <div className='text-right font-bold dark:text-white text-gray-800'>UN-<span className='text-green-500'>IT</span> </div>
              <div>
                <h2 className='font-bold text-2xl text-[#004f91]'> Crée un Compte avec</h2>
                <div className='w-20 border-[3px] rounded-full border-[#004f91] inline-block'></div>
                <div className='flex - flex-row justify-center items-center my-2'>
                  <Link href={""} className='p-4 rounded-full border mx-4 border-gray-600 hover:border-[#004f91] text-gray-500 hover:bg-[#004f91] hover:text-white'><FaFacebookF /></Link>
                  <Link href={""} className='p-4 rounded-full border mx-4 border-gray-600 hover:border-[#004f91] text-gray-500 hover:bg-[#004f91] hover:text-white'><FaGoogle /></Link>
                  <Link href={""} className='p-4 rounded-full border mx-4 border-gray-600 hover:border-[#004f91] text-gray-500 hover:bg-[#004f91] hover:text-white'><FaTwitter /></Link>
                </div>
                <p className='font-bold text-gray-800 dark:text-gray-300 mb-2'>ou avec vôtre email</p>
                <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center '>
                  <div className='flex justify-between gap-2 mx-2'>
                    <div className='flex flex-col justify-center w-48 mb-4'>
                      <label className=' text-left font-bold text-lg mb-2 text-gray-800 dark:text-gray-300'>fname</label>
                      <div className='bg-gray-200 dark:bg-gray-700 w-48 p-1 rounded-full pl-4 flex '>
                        <input value={authVal.fname} onChange={(e) => setAutVal({...authVal, fname:e.target.value})}
                        type='text' name='fname' placeholder='vôtre fname'
                          className='w-full mx-2 py-1 font-bold bg-gray-200 dark:bg-gray-700 outline-none' />
                        <FaEnvelope className='text-gray-800 dark:text-gray-300 w-5 h-5 text-xl my-2 mr-2' />
                      </div>
                    </div>
                    <div>
                      <div className='flex flex-col justify-center w-48 mb-4'>
                        <label className=' text-left font-bold text-lg mb-2 text-gray-800 dark:text-gray-300'>Préfname</label>
                        <div className='bg-gray-200 dark:bg-gray-700 w-48 p-1 rounded-full pl-4 flex '>
                          <input value={authVal.lname} onChange={(e) => setAutVal({...authVal, lname:e.target.value})}
                          type='text' name='lname' placeholder='vôtre préfname'
                            className='w-full mx-2 py-1 font-bold  bg-gray-200 dark:bg-gray-700 outline-none' />
                          <FaEnvelope className='text-gray-800 dark:text-gray-300 w-5 h-5 text-xl my-2 mr-2' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="text-red-600">{errors.fname?.[0]}</span>
                  <div className='flex flex-col justify-center w-96 mb-4'>
                    <label className=' text-left font-bold text-lg mb-2 text-gray-800 dark:text-gray-300'>Email</label>
                    <div className='bg-gray-200 dark:bg-gray-700 w-96 p-1 rounded-full pl-4 flex '>
                      <input value={authVal.email} onChange={(e) => setAutVal({...authVal, email:e.target.value})}
                       type='email' name='email' placeholder='exemple@gmail.com'
                        className='w-80 mx-2 py-1 font-bold  bg-gray-200 dark:bg-gray-700 outline-none' />
                      <FaEnvelope className='text-gray-800 dark:text-gray-300 w-5 h-5 text-xl my-2 mr-2' />
                    </div>
                  </div>
                   <span className="text-red-600">{errors.email?.[0]}</span>
                  <div className='flex flex-col justify-center w-96 mb-4'>
                    <label className=' text-left font-bold text-lg mb-2 text-gray-800 dark:text-gray-300'>Mot de passe</label>
                    <div className='bg-gray-200 dark:bg-gray-700  w-96 p-1 rounded-full pl-4 flex '>
                      <input value={authVal.password} onChange={(e) => setAutVal({...authVal, password:e.target.value})}
                      type='password' name='password' placeholder='***********'
                        className='w-80 mx-2 py-1 font-bold  bg-gray-200 dark:bg-gray-700 outline-none -tracking-tighter ' />
                      <IoEyeOff className='text-gray-800 dark:text-gray-300 w-5 h-5 text-xl my-2 mr-2 cursor-pointer' />
                    </div>
                  </div>
                  <span className="text-red-600">{errors.password?.[0]}</span>
                  <div className='flex flex-col justify-center w-96 mb-6'>
                    <label className=' text-left font-bold text-lg mb-2 text-gray-800 dark:text-gray-300'>Confirmer mot de passe</label>
                    <div className='bg-gray-200 dark:bg-gray-700 w-96 p-1 rounded-full pl-4 flex '>
                      <input value={authVal.password_confirmation} onChange={(e) => setAutVal({...authVal, password_confirmation:e.target.value})}
                      type='password' name='password' placeholder='***********'
                        className='w-80 mx-2 py-1 font-bold  bg-gray-200 dark:bg-gray-700 outline-none -tracking-tighter ' />
                      <IoEyeOff className='text-gray-800 dark:text-gray-300 w-5 h-5 text-xl my-2 mr-2 cursor-pointer' />
                    </div>
                  </div >
                  <div className="mb-4 w-96 pr-10 flex  sm:hidden justify-between ">
                    <label className="font-semibold text-gray-800 dark:text-gray-300"> Have a Account ?</label>
                    <Link  href={"/auth/login"} className="text-[#004f91] font-bold underline"> Login Now</Link>
                  </div>
                  <button type="submit" className=' border-2 border-[#004f91] rounded-full px-20 py-2 hover:text-white inline-block font-bold transition text-white bg-[#004f91]' >{loading ? "Processing.." : "Register"}</button>
                </form>
              </div>
              <Link className="text-navy-800 dark:text-white mb-2 w-20 flex flex-row" href={"/"}><FaAnglesLeft /><FaAnglesLeft /></Link>
            </div>
          </div>
        </div>
      )
    }
    

export default page