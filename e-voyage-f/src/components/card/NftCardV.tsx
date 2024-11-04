import { IoChatbubbleOutline, IoStarOutline,IoSend } from 'react-icons/io5';
import Card from 'components/card';
import Image from 'next/image';
import StarRating from './Rating';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import InputEmoji from "react-input-emoji";


const NftCard = (props: {
  id: number; // Ajoutez cette ligne
  image: string;
  title: string;
  author: string;
  interaction: string | number;
  comment: string | number;
  note: string | number;
  extra?: string;
  index: number;
}) => {
  const [text, setText] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [write, setWrite] = useState(false);
  const [texteCommentaire, setTexteCommentaire] = useState("");
  const { title, author, note, image, comment, interaction, extra, id } = props;

  useEffect(() => {
    const updateBackgroundColor = () => {
      if (document.body.classList.contains("dark")) {
        setBackgroundColor("#807d79");
      } else {
        setBackgroundColor("white");
      }
    };
    updateBackgroundColor();
    const observer = new MutationObserver(updateBackgroundColor);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);



  const handleRatingSelect = (rating) => {
    console.log('Rating selected:', rating);
  };

  const EnvoyerCommentaire = () => {
    console.log(title, note);
    console.log(texteCommentaire);
    setTexteCommentaire("");
    setWrite(false);
  };

  return (
    <Card extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white ${extra}`}>
      <div className="h-full w-full">
        <div className="relative w-full">
          <Image
            width="2"
            height="20"
            className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
            src={image}
            alt=""
          />
          <label
            className="absolute right-3 top-3 flex items-center justify-center rounded-full bg-gray-200 p-1 text-brand-500 hover:cursor-pointer"
          >
            <div className="flex h-full w-full items-center justify-center rounded-full text-md font-bold">
              {note}/10
            </div>
          </label>
        </div>

        <div className="mb-3 flex items-center justify-between px-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
          <div className="mb-2">
            <div className="text-lg font-bold text-navy-700 dark:text-white">
              {title}
            </div>
            <div className="mt-1 text-sm font-medium text-gray-800 dark:text-gray-100 md:mt-2">
              Proprietaire: <span className='ml-2 font-bold text-md'> {author}</span>
            </div>
          </div>
        </div>

        <div className="flex items-start justify-between flex-col ">
          <div className="flex w-full justify-between items-center">
            <div className="mb-2 text-sm font-bold text-brand-500 dark:text-white">
              <StarRating onRatingSelect={handleRatingSelect} />
            </div>
            <Link href={`/visiteur/default/${props.id}`} className="mb-2 text-sm font-bold text-brand-500 dark:text-white mr-4">
              Voir plus ...
            </Link>
          </div>
          {
            write ?
              (
                <div className='flex w-full justify-between items-center flex-col'>
                  <div className="flex w-full justify-between items-center">
                    <div style={{ width: "80%" }}>
                      <InputEmoji
                        value={text}
                        onChange={setText}
                        cleanOnEnter
                        placeholder="Type a message"
                        shouldReturn={false}
                        shouldConvertEmojiToImage={false}
                        background={backgroundColor}
                        color={backgroundColor === "black" ? "white" : "black"}
                      />
                    </div>
                    <button className='bg-blueSecondary mr-10' onClick={() => EnvoyerCommentaire()}><IoSend/></button>
                  </div>
                </div>

              ) : null
          }
          <div className='w-full h-10 flex justify-between mt-2 py-2'>
            <div className='w-30 flex flex-row gap-1'>
              <span className='text-sm'>{interaction}</span>
              <IoStarOutline className="text-lg font-bold text-blue-500" />
            </div>
            <div className='w-30 flex flex-row gap-1 mr-2'>
              <span className='text-sm'>{comment}</span>
              <IoChatbubbleOutline onClick={() => setWrite(!write)} className="cursor-pointer text-2xl text-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default NftCard;
