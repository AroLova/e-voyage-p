import Link from 'next/link';
import nft1 from '/public/img/nfts/NftBanner1.jpg';

const Banner1 = () => {
  return (
    <div
      className="flex w-full flex-col rounded-[20px] bg-cover px-[30px] py-[30px] md:px-[64px] md:py-[56px]"
      style={{ backgroundImage: `url(${nft1.src})` }}
    >
      <div className="w-[80%]  rounded-xl px-4">
        <h4 className="mb-[14px] max-w-full text-xl  font-bold text-white  md:text-3xl md:leading-[42px] ">
          Votre Aventure Commence Avant le Départ
        </h4>
        <p className="mb-[40px] w-1/2 text-base font-medium text-[#ffffff] ">
          Découvrez votre prochaine aventure à votre destination avant même de partir. Explorez les meilleurs blogs de voyage pour tout savoir sur les hôtels,
          activités, plages et lieux incontournables. Préparez votre séjour en toute sérénité, et faites de votre voyage une expérience inoubliable dès maintenant !
        </p>
      </div>
      <div className="mt-[36px] flex items-center justify-between gap-4 sm:justify-start 2xl:gap-10">
        {/* <Link href={"/"} className="text-black linear rounded-xl bg-white px-4 py-2 text-center text-base font-medium transition duration-200 hover:!bg-white/80 active:!bg-white/70">
          Discover now
        </Link>
        <Link href={"/"} className="text-base font-medium text-lightPrimary hover:text-lightPrimary 2xl:ml-2">
          Watch Video
        </Link> */}
      </div>
    </div>
  );
};

export default Banner1;
