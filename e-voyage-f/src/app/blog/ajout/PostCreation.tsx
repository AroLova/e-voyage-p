// app/visiteur/ajout/PostCreation.tsx
'use client';

import { useState, FormEvent } from 'react';
import axios from 'axios';
import { POST_URL } from '../../lib/apiEndPoints';

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

const PostCreation = ({ userData }: PostCreationProps) => {
    const [titre, setTitre] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [responseMessage, setResponseMessage] = useState('');
    
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!image) {
            alert("Veuillez sélectionner une image à télécharger.");
            return;
        }

        const formData = new FormData();
        formData.append('titre', titre);
        formData.append('description', description);
        formData.append('image_url', image); 
        formData.append('province_id', "1");
        formData.append('commentaire', "0");
        formData.append('interaction', "0");

        try {
            const response = await axios.post(POST_URL, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${userData?.token}`,
                },
            });
            setResponseMessage(response.data.message || 'Téléchargement réussi !');
        } catch (error: any) {
            if (error.response) {
                setResponseMessage('Erreur lors du téléchargement du post : ' + error.response.data.message);
            } else {
                setResponseMessage('Erreur lors du téléchargement du post : ' + error.message);
            }
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setImage(selectedFile);
        }
    };

    return (
        <div className='w-full h-screen flex justify-center items-center flex-col bg-slate-400'>
            <div className='p-6 bg-slate-800 rounded-xl'>
                <h1 className='text-xl font-bold'>Créer un nouveau post</h1>
                <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <label htmlFor="titre">Titre :</label>
                        <input
                            className='h-10 rounded-lg w-80 bg-gray-500'
                            type="text"
                            id="titre"
                            value={titre}
                            onChange={(e) => setTitre(e.target.value)}
                            required
                        />
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <label htmlFor="description">Description :</label>
                        <textarea
                            className='rounded-lg w-80 h-30 bg-gray-500'
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4 flex flex-col items-start">
                        <label
                            htmlFor="image"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Image :
                        </label>
                        <input
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent p-2"
                            type="file"
                            id="image"
                            accept="image/*"
                            onChange={handleFileChange}
                            required
                        />
                    </div>

                    <button type="submit" className='py-4 px-6 bg-green-400 rounded-xl'>Télécharger le post</button>
                </form>
                {responseMessage && <p>{responseMessage}</p>}
            </div>
        </div>
    );
};

export default PostCreation;
