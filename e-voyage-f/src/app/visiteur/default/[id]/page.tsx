"use client";

import React, { useEffect, useState } from 'react';
import data from "./data.json";
import CardDetail from 'components/card/CardDetail';
import Image from 'next/image';
import Link from 'next/link';
// import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
// import { TbNetwork } from "react-icons/tb";
// import { IoMdMail } from "react-icons/io";

// const iconMap = {
//     FaFacebookF: FaFacebookF,
//     FaTwitter: FaTwitter,
//     FaLinkedin: FaLinkedin,
//     TbNetwork: TbNetwork,
//     IoMdMail: IoMdMail,
// };

interface DataOntOp {
    titre: string;
    image: string;
    index: number;
    description: string;
}



const socialLinks = [
    {
        id: 1,
        name: "Facebook",
        url: "https://facebook.com",
        iconName: "FaFacebookF", // Nom de l'icône
        iconPackage: "react-icons/fa", // Paquet d'icône
    },
    {
        id: 2,
        name: "Twitter",
        url: "https://twitter.com",
        iconName: "FaTwitter",
        iconPackage: "react-icons/fa",
    },
    {
        id: 3,
        name: "LinkedIn",
        url: "https://linkedin.com",
        iconName: "FaLinkedin",
        iconPackage: "react-icons/fa",
    },
    {
        id: 4,
        name: "Site Web",
        url: "https://example.com",
        iconName: "TbNetwork",
        iconPackage: "react-icons/tb",
    },
    {
        id: 5,
        name: "Email",
        url: "mailto:example@example.com",
        iconName: "IoMdMail",
        iconPackage: "react-icons/io",
    },
];

const Page = ({ params }: { params: { id: string } }) => { // Récupérer l'ID des paramètres
    const { id } = params;

    const [onTop, setOnTop] = useState(data[0].titre);
    const [values, setValues] = useState<DataOntOp | null>(null);

    const filterNftDataByName = (titre: string): DataOntOp | null => {
        const item = data.find(i => i.titre === titre);
        return item ? { titre: item.titre, image: item.image, index: 0, description: item.description } : null;
    };

    const handleClick = (titre: string) => {
        setOnTop(titre);
    };

    useEffect(() => {
        if (id) {
            console.log("ID récupéré:", id);
        }
    }, [id]);

    useEffect(() => {
        const result = filterNftDataByName(onTop);
        setValues(result);
    }, [onTop]);


    return (
        <div className='flex flex-col h-full w-full max-w-7xl'>
            <div className='flex flex-col h-full w-full lg:flex-row max-w-7xl'>
                <div className='w-full lg:w-3/4'>
                    {values ? (
                        <CardDetail
                            title={values.titre}
                            image={values.image}
                            index={values.index}
                            description={values.description}
                        />
                    ) : (
                        <p>Chargement des détails...</p>
                    )}
                </div>
                <div
                    style={{ overflow: '-moz-hidden-unscrollable', scrollbarWidth: "none" }}
                    className='w-full lg:w-1/4 flex-col lg:flex-row overflow-y-auto max-h-[700px] scroll-smooth px-4'
                >
                    {data.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleClick(item.titre)} // Déclenche la mise à jour de values
                            className='flex flex-row pt-2 gap-3 pl-4 py-2 my-1 bg-lightPrimary dark:bg-navy-800 cursor-pointer rounded-lg'
                        >
                            <Image
                                width="6"
                                height="6"
                                className="mb-3 h-20 w-20 rounded-full"
                                src={item.image}
                                alt="okok"
                            />
                            <div className='flex flex-col w-3/4 h-16 overflow-hidden'>
                                <h3 className='mt-2 font-bold text-md text-gray-900 dark:text-white'>{item.titre}</h3>
                                <p className='text-sm text-gray-900 dark:text-white'>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
