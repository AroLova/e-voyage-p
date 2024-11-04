/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaFacebookF, FaGoogle, FaTwitter, FaEnvelope, FaAngleLeft, FaAnglesLeft } from "react-icons/fa6";
import { IoEyeOff } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import { signIn } from "next-auth/react";

import { CHECK_CREDENTIALS } from '../../lib/apiEndPoints';
import axios from 'axios';

const page = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState({ email: [], password: []});
  const [authVal, setAutVal] = useState({ email: "", password: "" })

  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    axios.post(CHECK_CREDENTIALS, authVal)
      .then((res) => {
        const response = res.data;
        setLoading(false);
        if (response?.status == 200) {
          signIn("credentials", {
            email: authVal.email,
            password: authVal.password,
            redirect: true,
            callbackUrl: "/",
          });
          toast.success("Login send succefully !!!");
        } else if (response?.status == 401) {
          toast.error(response?.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        if (err.response?.status == 422) {
          setErrors(err.response?.data?.errors);
        } else {
          toast.error("Something went wrong.please try again!");
        }
      });
  };
  return (
    <div className='w-full h-screen flex justify-center items-center text-center bg-background-100 dark:bg-background-900 flex-col'>
      <div className='w-[1000px] shadow-2xl dark:shadow-2xl dark:shadow-gray-950   rounded-3xl flex flex-row bg-gray-100 dark:bg-navy-800'>
        <div className='w-full p-5 py-10 '>
          <div className='text-left font-bold dark:text-white text-gray-800'>UN-<span className='text-green-500'>IT</span> </div>
          <div>
            <h2 className='font-bold text-2xl text-[#31b4a6]'> Connecté au Compte</h2>
            <div className='w-20 border-[3px] rounded-full border-[#31b4a6] inline-block'></div>
            <div className='flex - flex-row justify-center items-center my-2'>
              <Link href={""} className='p-4 rounded-full border mx-4 border-gray-600 hover:border-[#31b4a6] text-gray-500 hover:bg-[#31b4a6] hover:text-white'><FaFacebookF /></Link>
              <Link href={""} className='p-4 rounded-full border mx-4 border-gray-600 hover:border-[#31b4a6] text-gray-500 hover:bg-[#31b4a6] hover:text-white'><FaGoogle /></Link>
              <Link href={""} className='p-4 rounded-full border mx-4 border-gray-600 hover:border-[#31b4a6] text-gray-500 hover:bg-[#31b4a6] hover:text-white'><FaTwitter /></Link>
            </div>
            <p className='font-bold text-gray-600 dark:text-gray-300'>ou avec vôtre email</p>
            <form className='flex flex-col items-center justify-center'>
              <div className='flex flex-col justify-center w-96 mb-4'>
                <label className=' text-left font-bold text-lg mb-2 text-gray-800 dark:text-gray-300'>Email</label>
                <div className='bg-gray-200 dark:bg-gray-700 w-96 p-1 rounded-full pl-4 flex '>
                  <input value={authVal.email} onChange={(e) => setAutVal({...authVal, email:e.target.value})}
                    type='email' name='email' placeholder='exemple@gmail.com'
                    className='w-80 mx-2 py-1 font-bold bg-gray-200 dark:bg-gray-700 outline-none' />
                  <FaEnvelope className='text-gray-400 w-5 h-5 text-xl my-2 mr-2' />
                </div>
              </div>
              <span className="text-red-600">{errors.email?.[0]}</span>
              <div className='flex flex-col justify-center w-96 mb-4'>
                <label className=' text-left font-bold text-lg mb-2 text-gray-800 dark:text-gray-300'>Mot de passe</label>
                <div className='bg-gray-200 dark:bg-gray-700 w-96 p-1 rounded-full pl-4 flex '>
                  <input value={authVal.password} onChange={(e) => setAutVal({...authVal, password:e.target.value})}
                  type='password' name='password' placeholder='***********'
                    className='w-80 mx-2 py-1 font-bold  bg-gray-200 dark:bg-gray-700 outline-none -tracking-tighter ' />
                  <IoEyeOff className='text-gray-400 w-5 h-5 text-xl my-2 mr-2 cursor-pointer' />
                </div>
              </div>
              <span className="text-red-600">{errors.password?.[0]}</span>
              <Link href={"/auth/resetpass"} className='font-bold text-gray-500 dark:text-gray-300 ml-52 mb-4' >Forgot password ?</Link>
              <div className="mb-4 w-96 pr-10 flex  sm:hidden justify-between ">
                <label className="font-semibold dark:text-gray-300">Don{"'"}t have an Account ?</label>
                <Link href={"/auth/registre"} className="text-[#31b4a6] font-bold underline "> Resister Now</Link>
              </div>
              <button onClick={(e) =>handleSubmit(e)} className=' border-2 border-[#31b4a6] rounded-full px-20 py-2 hover:text-white inline-block font-bold transition text-white bg-[#31b4a6]' >{loading ? "Processing.." : "Login"}</button>
            </form>
          </div>
          <Link className="text-navy-800 dark:text-white mb-2 w-20 flex flex-row" href={"/"}><FaAnglesLeft /><FaAnglesLeft /></Link>
        </div>
        <div className='w-3/5 bg-[#31b4a6] hidden sm:flex flex-col items-center rounded-r-3xl px-10 py-12'>
          <Image src={"../../../UnIt.png"} alt='UN-IT' className=' rounded-full mx-20 object-contain' width={130} height={130} />
          <h2 className='text-3xl font-bold text-white  mb-2'>Bievennu a bord !</h2>
          <div className='w-20 border-[3px] rounded-full border-white inline-block'></div>
          <p className='text-white mb-10'>Créé une nouvelle compte pour faciliter l{"'"}utilisation de nos plateforme, </p>
          <Link href={"/auth/registre"} className=' border-2 border-white rounded-full px-12 py-2 text-white inline-block font-bold transition hover:bg-white hover:text-[#31b4a6]' >Régistre</Link>
        </div>
      </div>
    </div>
  )
}

export default page