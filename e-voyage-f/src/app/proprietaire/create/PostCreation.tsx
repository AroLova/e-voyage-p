/* eslint-disable @next/next/no-img-element */
"use client"

import { GET_DISTRICT, GET_REGION, POST_URL } from '@/app/lib/apiEndPoints';
import axios from 'axios';


import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify';
import { TiCamera } from "react-icons/ti";

interface Region { id: number; name: string; }
interface District { id: number; name: string; }

interface User {
  id?: string | null;
  name?: string | null;
  email?: string | null;
  role?: string | null;
  profile_image?: string | null;
  token?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
}


interface PostCreationProps {
  userData: User | null;
}

function PostCreation({ userData }: PostCreationProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedProvince, setSelectedProvince] = useState<{ id: string }>({ id: "selectionner" });
  const [selectedRegion, setSelectedRegion] = useState<{ id: string }>({ id: "selectionner" });
  const [selectedDistrict, setSelectedDistrict] = useState<{ id: string }>({ id: "selectionner" });
  const [selectedType, setSelectedType] = useState<{ id: string }>({ id: "" });
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image_url, setImage_url] = useState<File | null>(null);


  const [region, setRegion] = useState<Region[]>([]);
  const [district, setDistrict] = useState<District[]>([]);

  const handleProvinceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProvince({ id: event.target.value });
  };
  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion({ id: event.target.value });
  };
  const handleDistrictChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDistrict({ id: event.target.value });
  };
  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType({ id: event.target.value });
  };


  useEffect(() => {
    const GetProvinceRegions = async () => {
      try {
        if (selectedProvince.id === "selectionner") {
          console.log("Selectionner une province");
        }
        else {
          const result = await axios.get(GET_REGION, { params: { id: selectedProvince.id } });
          setRegion(result.data);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des régions :", error);
      }
    };

    const GetRegionsDistrict = async () => {
      try {
        if (selectedRegion.id === "selectionner") {
          console.log("Selectionner une province");
        }
        else {
          const result = await axios.get(GET_DISTRICT, { params: { id: selectedRegion.id } });
          setDistrict(result.data);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des régions :", error);
      }
    };

    if (selectedProvince.id) {
      GetProvinceRegions();
    }
    if (selectedRegion.id) {
      GetRegionsDistrict();
    }
  }, [selectedProvince.id, selectedRegion.id]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setImage_url(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title || !description) {
      toast.warning("Veuillez remplir tous les champs.");
      return;
    }
    if (!image_url) {
      toast.warning("Veuillez sélectionner une image à télécharger.");
      return;
    }
    const formData = new FormData();
    formData.append('user_id', userData.id as string);
    formData.append('province_id', selectedProvince.id);
    formData.append('titre', title);
    formData.append('image_url', image_url);
    formData.append('description', description);
    formData.append('commentaire', "0");
    formData.append('interaction', "0");
    try {
      const response = await axios.post(POST_URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userData?.token}`,
        },
      });
      toast.success(response.data.message || 'Blog créé avec succès !!!');
    } catch (error: any) {
      if (error.response) {
        toast.error('Erreur lors du téléchargement du post : ' + error.response.data.message);
      } else {
        toast.error('Erreur lors du téléchargement du post : ' + error.message);
      }
    }
  };

  return (
    <div className='w-full h-full flex justify-center items-center mt-4'>
     
      <div className='w-[500px] h-auto   rounded-2xl  bg-gray-100 dark:bg-navy-800'>
        <form onSubmit={handleSubmit} className="w-full md:w-[500px] px-6 ">
          <div className="mb-5 flex justify-center flex-col items-center">
            <input
              className='hidden w-0 h-0 bg-blueSecondary'
              type="file"
              ref={fileInputRef}
              id="image_url"
              accept="image/*"
              onChange={handleFileChange}
            />
            <label htmlFor="image_url" className=" flex justify-center items-center bg-gray-100 dark:bg-navy-800 top-10 left-10 relative w-12 h-12 p-1 text-center text-sm font-bold rounded-full">
              <TiCamera className="w-8 h-8  rounded-full font-bold text-background-900 dark:text-white" />.
            </label>
            <img src={previewUrl || "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?cs=srgb&dl=pexels-pixabay-258154.jpg&fm=jpg"} alt="..." className="border-gray-600 w-[180px] h-[180px] object-cover bg-gray-300 rounded-full" />

          </div>
          <div className="mb-5">
            <label htmlFor="titre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Titre</label>
            <input
              type="text"
              id="titre"
              name='titre'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='Titre de votre blog'
              className="shadow-sm bg-white dark:bg-navy-900 text-gray-900 text-sm rounded-full focus:ring-blue-500 
              focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 
              dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
          </div>

          <div className="mb-5">
            <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
            <select
              id="type"
              name='type'
              value={selectedType.id}
              onChange={handleTypeChange}
              className=" text-gray-900 text-sm rounded-full focus:ring-blue-500 
              focus:border-blue-500 block w-full p-2.5 bg-white dark:bg-navy-900 dark:border-gray-600 dark:placeholder-gray-400 
              dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option className='text-gray-900 dark:text-white' value={"Hotel"}>Hotel</option>
              <option className='text-gray-900 dark:text-white' value={"Animation"}>Animation</option>
              <option className='text-gray-900 dark:text-white' value={"Endroit"}>Endroit</option>
              <option className='text-gray-900 dark:text-white' value={"Autre"}>Autre</option>
            </select>
          </div>
          <div className='w-full flex flex-row'>
            <div className={`${selectedProvince.id.length < 12 ? "w-1/2" : "w-full"} mb-5 mx-1`}>
              <label htmlFor="province" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Province</label>
              <select
                id="province"
                name='province'
                value={selectedProvince.id}
                onChange={handleProvinceChange}
                className="bg-white dark:bg-navy-900 text-gray-900 text-sm rounded-full focus:ring-blue-500
                   focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400
                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option className='text-gray-900 dark:text-white' value="selectionner">Pronvince</option>
                <option className='text-gray-900 dark:text-white' value="1">Antananarivo</option>
                <option className='text-gray-900 dark:text-white' value="2">Fianarantsoa</option>
                <option className='text-gray-900 dark:text-white' value="3">Toliara</option>
                <option className='text-gray-900 dark:text-white' value="4">Mahajanga</option>
                <option className='text-gray-900 dark:text-white' value="5">Antsiranana</option>
                <option className='text-gray-900 dark:text-white' value="6">Toamasina</option>
              </select>
            </div>

            <div className={`${selectedProvince.id.length < 12 ? "block" : "hidden"} mb-5 w-1/2 mx-1`}>
              <label htmlFor="region" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Region</label>
              <select
                id="region"
                name='region'
                value={selectedRegion.id}
                onChange={handleRegionChange}
                className="bg-white dark:bg-navy-900 text-gray-900 text-sm rounded-full focus:ring-blue-500
                   focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 
                  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option className='text-gray-900 dark:text-white' value={"selectionner"}>Region</option>
                {region && region.map((item) => (
                  <option className='text-gray-900 dark:text-white' key={item.id} value={item.id}>{item.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className={`${selectedRegion.id.length < 12 ? "block" : "hidden"} w-full flex flex-row`}>
            <div className={`${selectedDistrict.id.length < 12 ? "w-1/2" : "w-full"} mb-5 mx-1`}>
              <label htmlFor="district" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Commune</label>
              <select
                id='district'
                name='district'
                value={selectedDistrict.id}
                onChange={handleDistrictChange}
                className="bg-white dark:bg-navy-900 text-gray-900 text-sm rounded-full focus:ring-blue-500 
                focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 
                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option className='text-gray-900 dark:text-white' value={"selectionner"}>Commune</option>
                {district && district.map((item) => (
                  <option className='text-gray-900 dark:text-white' key={item.id} value={item.id}>{item.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-10">
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
            <textarea
              id="description"
              name='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="block p-2.5 w-full text-sm text-gray-900 rounded-lg bg-white dark:bg-navy-900 focus:ring-blue-500 
              focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
               dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description"></textarea>
          </div>
          
          <div className='w-full flex justify-center items-center'>
            <button type="submit" className=" w-[90%] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
           focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 
           dark:focus:ring-blue-800 mb-4">Create Blogs</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PostCreation