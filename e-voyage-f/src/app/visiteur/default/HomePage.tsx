
'use client';
import Banner from 'components/admin/nft-marketplace/Banner';
import NFt2 from '/public/img/nfts/Nft2.png';
import NFt4 from '/public/img/nfts/Nft4.png';
import NFt3 from '/public/img/nfts/Nft3.png';
import NFt5 from '/public/img/nfts/Nft5.png';
import NFt6 from '/public/img/nfts/Nft6.png';

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

interface Post {
    id: number;
    title: string;
    description: string;
    province_id: string;
    user_id: string;
    image: string | null;
}

interface PostCreationProps {
    userData: User | null;
}

import NftCardV from 'components/card/NftCardV';
import { useEffect, useState } from 'react';

const nftData = [
  {id:1, name: "Hotel", title: "Hotel Zomatel", author: "Esthera Jackson", comment: "6", interaction: "19", note: "2", image: NFt3 },
  {id:2, name: "Androit", title: "Lac Anosy", author: "Nick Wilson", comment: "6", interaction: "19", note: "7", image: NFt2 },
  {id:3, name: "Hotel", title: "Voiture à louer", author: "Will Smith", comment: "6", interaction: "19", note: "9", image: NFt4 },
  {id:4, name: "Hotel", title: "Digital Waves", author: "Sophia Lee", comment: "6", interaction: "19", note: "3", image: NFt5 },
  {id:5, name: "Activite", title: "Pixel Dreams", author: "Liam Cooper", comment: "6", interaction: "19", note: "3", image: NFt6 },
  {id:6, name: "Hotel", title: "Future City", author: "Ava Williams", comment: "6", interaction: "19", note: "2", image: NFt3 },
  {id:7, name: "Androit", title: "Crypto Cosmos", author: "Olivia Brown", comment: "6", interaction: "19", note: "5", image: NFt5 },
  {id:8, name: "Hotel", title: "Mystic Forest", author: "Emily Johnson", comment: "6", interaction: "19", note: "2", image: NFt4 },
  {id:9, name: "Hotel", title: "Neon Nights", author: "Mason Davis", comment: "6", interaction: "19", note: "5", image: NFt6 },
  {id:10, name: "Activite", title: "Golden Hour", author: "Chloe Garcia", comment: "6", interaction: "19", note: "7", image: NFt3 },
  {id:11, name: "Hotel", title: "Aurora Skies", author: "James Wilson", comment: "6", interaction: "19", note: "9", image: NFt5 },
  {id:12, name: "Androit", title: "Infinite Abyss", author: "Ella Martinez", comment: "6", interaction: "19", note: "7", image: NFt4 },
  {id:13, name: "Hotel", title: "Ethereal Realms", author: "Lucas White", comment: "6", interaction: "19", note: "5", image: NFt3 },
  {id:14, name: "Activite", title: "Starlight Glimmer", author: "Amelia Scott", comment: "6", interaction: "19", note: "1", image: NFt6 },
  {id:15, name: "Autre", title: "Ocean Breeze", author: "Lily Carter", comment: "6", interaction: "19", note: "8", image: NFt5 },
  {id:16, name: "Androit", title: "Galactic Dreams", author: "Ryan Moore", comment: "6", interaction: "19", note: "6", image: NFt3 },
  {id:17, name: "Activite", title: "Sunset Vibes", author: "Zoe Lewis", comment: "6", interaction: "19", note: "3", image: NFt4 },
  {id:18, name: "Hotel", title: "Urban Lights", author: "Mila Martinez", comment: "6", interaction: "19", note: "1", image: NFt5 },
  {id:19, name: "Activite", title: "Virtual Vision", author: "Ella Smith", comment: "6", interaction: "19", note: "4", image: NFt3 },
  {id:20, name: "Hotel", title: "Crystal Cavern", author: "Ethan Hall", comment: "6", interaction: "19", note: "2", image: NFt6 },
];

const Marketplace = ({ userData }: PostCreationProps) => {

  const [name, setName] = useState("All");
  const [values, setValues] = useState([]);

  const filterNftDataByName = (data, name) => {
    if (name === "All") {
      return data;
    }
    return data.filter(item => item.name === name);
  };
  useEffect(() => {
    setValues(filterNftDataByName(nftData, name));
  }, [name]);




  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5  max-w-7xl">
        {JSON.stringify(userData)}
      <div className="col-span-1 h-full w-full xl:col-span-1 2xl:col-span-2">
        {/* NFt Banner */}
        <Banner />

        {/* NFt Header */}
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            Les plus populaire
          </h4>
          <ul className="mt-4 flex items-center justify-between md:mt-0 md:justify-center md:!gap-5 2xl:!gap-12">
          <li>
              <button
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                onClick={() => setName("All")}
              >
                Tout
              </button>
            </li>
            <li>
              <button
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                onClick={() => setName("Hotel")}
              >
                Hotel
              </button>
            </li>
            <li>
              <button
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                onClick={() => setName("Androit")}
              >
                Endroit
              </button>
            </li>
            <li>
              <button
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                onClick={() => setName("Evenement")}
              >
                Evenement
              </button>
            </li>
            <li>
              <button
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                onClick={() => setName("Activite")}
              >
                Activite
              </button>
            </li>
            <li>
              <button
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                onClick={() => setName("Autre")}
              >
                Autre
              </button>
            </li>
          </ul>
        </div>

        <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {values.length > 0 ? values.slice(0, 8).map((nft, index) => (
            <NftCardV
              id={nft.id}
              key={nft.id}
              interaction={nft.interaction}
              comment={nft.comment}
              title={nft.title}
              author={nft.author}
              note={nft.note}
              image={nft.image}
              index={index}
            />
          )):
          <div className='w-full h-60 flex justify-center items-center text-center text-xl font-bold'>
            Aucune blogs {name}
          </div>}
        </div>

        {/* Recently Added Section */}
        <div className="mb-5 mt-5 flex items-center justify-between px-[26px]">
          <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
            Ajouter le plus recent
          </h4>
        </div>

        {/* Recently Added NFTs */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {nftData.slice(8, 16).map((nft, index) => (
            <NftCardV
            id={nft.id}
              key={nft.id}
              interaction={nft.interaction}
              comment={nft.comment}
              title={nft.title}
              author={nft.author}
              note={nft.note}
              image={nft.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
 