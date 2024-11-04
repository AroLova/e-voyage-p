import { IoChatbubbleOutline, IoStarOutline } from 'react-icons/io5';
import Card from 'components/card';
import Image from 'next/image';
import StarRating from './Rating';
import Link from 'next/link';
import { useState } from 'react';

const CardDetail = (props: {
  image: string;
  title: string;
  description:string;
  extra?: string;
  index: number;
}) => {
  const [write,setWrite] = useState(false);
  const [texteCommentaire,setTexteCommentaire] = useState("");
  const { title, image, description, extra } = props;

  const handleRatingSelect = (rating) => {
    console.log('Rating selected:', rating);
  };

  const EnvoyerCommentaire = () => {
    console.log(texteCommentaire);
    setTexteCommentaire("");
    setWrite(false);
  };

  return (
    <Card
      extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white ${extra}`}
    >
      <div className="h-full w-full ">
        <div className="relative w-full">
          <Image
            width="2"
            height="20"
            className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
            src={image}
            alt=""
          />
        </div>
        <div className="mb-3 flex items-center justify-between px-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
          <div className="mb-2">
            <div className="text-lg font-bold text-navy-700 dark:text-white">
              {' '}
              {title}{' '}
            </div>
            <div className="mt-1 text-sm font-medium text-gray-800 dark:text-gray-100 md:mt-2">
              Proprietaire: <span className='ml-2 font-bold text-md'> {' Lova'}</span>
            </div>
          </div>
        </div>

        <div className="flex items-start justify-between flex-col ">
          <div className="flex w-full justify-between items-center">
            <div className="mb-2 text-sm font-bold text-brand-500 dark:text-white">
              <StarRating onRatingSelect={handleRatingSelect} />
            </div>
            <Link href={""} className="mb-2 text-sm font-bol dark:text-white mr-4 bg-brandLinear text-white p-2 rounded-xl">
              Contacter le proprietaire
            </Link>
          </div>
          {
            write ? 
            (
              <div className="flex w-full justify-between items-center">
              <input value={texteCommentaire} onChange={e =>setTexteCommentaire(e.target.value)} type='text'  placeholder='Votre commentaire'
                className='outline-brand-500 p-2 bg-background-100 dark:bg-background-900  rounded-xl w-[80%]'
                />
                <button onClick={() =>EnvoyerCommentaire()} >Envoyer</button>
              </div>
            ):null
          }
          <div className='w-full h-auto flex justify-between mt-2 py-2'>
          {description}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CardDetail;
