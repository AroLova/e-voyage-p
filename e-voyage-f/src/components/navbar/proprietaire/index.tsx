import React from 'react';
import Dropdown from 'components/dropdown';
import { FiAlignJustify } from 'react-icons/fi';
import navbarimage from '/public/img/layout/Navbar.png';
import { BsArrowBarUp } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { RiMoonFill, RiSunFill,RiLoginCircleLine } from 'react-icons/ri';
import {
  IoMdNotificationsOutline,
  IoMdInformationCircleOutline,
} from 'react-icons/io';
import avatar from '/public/img/avatars/avatar4.png';
import Image from 'next/image';
import { connect } from 'http2';
import Link from 'next/link';
import axios from 'axios';
import { LOGOUT_URL } from '@/app/lib/apiEndPoints';
import { CustomUser } from '@/app/api/auth/[...nextauth]/authOptions';
import { toast } from 'react-toastify';
import {getSession, signOut} from "next-auth/react"

const Navbar = (props: {
  // onOpenSidenav: () => void;
  brandText: string;
  secondary?: boolean | string;
  [x: string]: any;
  
}) => {
  const { brandText, mini, hovered } = props;
  const [darkmode, setDarkmode] = React.useState(
    document.body.classList.contains('dark'),
  );
  const [user, setUser] = React.useState<CustomUser>();

  React.useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession(); 
      setUser(session?.user as CustomUser);
    };

    fetchSession();
  }, []);

  const LogoutUser = async () => {
    if (!user) return;

    try {
      await axios.post(
        LOGOUT_URL,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      signOut({
        callbackUrl: "/",
        redirect: true,
      });
    } catch (err) {
      toast.error("Une erreur s'est produite lors de la déconnexion !");
    }
  };

  return (
    <nav className="sticky top-0 z-40 flex flex-row flex-wrap items-center justify-between rounded-3xl bg-white/10   dark:bg-[#0b14374d]">
      <div className="relative mt-[3px] flex h-[61px] w-full flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:flex-grow-0 md:gap-1  xl:gap-2">
        <div className="flex h-full items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[225px]">
          <p className="pl-3 pr-2 text-xl">
            <FiSearch className="h-6 w-6 text-navy-700 dark:text-white" />
          </p>
          <input
            type="text"
            placeholder="Search..."
            className="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
          />
        </div>

        {/* start Notification */}
        <Dropdown
          button={
            <p className="cursor-pointer">
              <IoMdNotificationsOutline className="h-6 w-6 text-gray-900 dark:text-white" />
              <span className='hidden md:block text-gray-900 dark:text-white'> Notification</span>
            </p>
          }
          animation="origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
          classNames={'py-2 top-4 -left-[230px] md:-left-[440px] w-max'}
        >
          <div className="flex w-[360px] flex-col gap-3 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none sm:w-[460px]">
            <div className="flex items-center justify-between">
              <p className="text-base font-bold text-navy-700 dark:text-white">
                Notification
              </p>
              <p className="text-sm font-bold text-navy-700 dark:text-white">
                Mark all read
              </p>
            </div>

            <button className="flex w-full items-center">
              <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                <BsArrowBarUp />
              </div>
              <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                  New Update: Horizon UI Dashboard PRO
                </p>
                <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                  A new update for your downloaded item is available!
                </p>
              </div>
            </button>

            <button className="flex w-full items-center">
              <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                <BsArrowBarUp />
              </div>
              <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                  New Update: Horizon UI Dashboard PRO
                </p>
                <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                  A new update for your downloaded item is available!
                </p>
              </div>
            </button>
          </div>
        </Dropdown>
        {/* start Horizon PRO */}
        <Dropdown
          button={
            <div className="cursor-pointer">
              <IoMdInformationCircleOutline className="h-6 w-6 text-gray-900 dark:text-white" /> 
              <span className='hidden md:block text-gray-900 dark:text-white'> Notification</span>
            </div>

          }
          classNames={'py-2 top-6 -left-[250px] md:-left-[330px] w-max'}
          animation="origin-[75%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
        >
          <div className="flex w-[350px] flex-col gap-2 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
            <div
              style={{
                backgroundImage: `url(${navbarimage.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
              className="mb-2 aspect-video w-full rounded-lg"
            />
            <Link
              target="blank"
              href="/"
              className="px-full linear flex cursor-pointer items-center justify-center rounded-xl bg-brand-500 py-[11px] font-bold text-white transition duration-200 hover:bg-brand-600 hover:text-white active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:bg-brand-200"
            >
              Buy Horizon UI PRO
            </Link>
            <Link
              target="blank"
              href="/"
              className="px-full linear flex cursor-pointer items-center justify-center rounded-xl border py-[11px] font-bold text-navy-700 transition duration-200 hover:bg-gray-200 hover:text-navy-700 dark:!border-white/10 dark:text-white dark:hover:bg-white/20 dark:hover:text-white dark:active:bg-white/10"
            >
              See Documentation
            </Link>
            <Link
              target="blank"
              href="/"
              className="hover:bg-black px-full linear flex cursor-pointer items-center justify-center rounded-xl py-[11px] font-bold text-navy-700 transition duration-200 hover:text-navy-700 dark:text-white dark:hover:text-white"
            >
              Try Horizon Free
            </Link>
          </div>
        </Dropdown>
        <div
          className="cursor-pointer text-gray-900 dark:text-white"
          onClick={() => {
            if (darkmode) {
              document.body.classList.remove('dark');
              setDarkmode(false);
            } else {
              document.body.classList.add('dark');
              setDarkmode(true);
            }
          }}
        >
          {darkmode ? (
            <RiSunFill className="h-6 w-6 text-gray-900 dark:text-white" />
          ) : (
            <RiMoonFill className="h-6 w-6 text-gray-900 dark:text-white" />
          )}
          {darkmode 
          ? <span className='hidden md:block'>Light</span>
          : <span className='hidden md:block'>Dark</span>}
        </div>
      
        {/* Profile & Dropdown */}
       
          <Dropdown
            button={
              <Image
                width="2"
                height="20"
                className="h-10 w-10 rounded-full"
                src={avatar}
                alt="Elon Musk"
              />
            }
            classNames={'py-2 top-8 -left-[180px] w-max'}
          >
            <div className="flex h-48 w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
              <div className="ml-4 mt-3">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold text-navy-700 dark:text-white">
                  {user ? `Hi ,  ${user.fname}  ${ user.lname !== null ? user.lname : ""}`:null}
                  </p>{' '}
                </div>
              </div>
              <div className="mt-3 h-px w-full bg-gray-200 dark:bg-white/20 " />

              <div className="ml-4 mt-3 flex flex-col">
                <Link
                  href=" "
                  className="text-sm text-gray-800 dark:text-white hover:dark:text-white"
                >
                  {user  ? user.email : null}
                </Link>
                <Link
                  href="/admin/default"
                  className="mt-3 text-sm text-gray-800 dark:text-white hover:dark:text-white"
                >
                  Dashboard
                </Link>
                <Link
                  href=" "
                  className="mt-3 text-sm text-gray-800 dark:text-white hover:dark:text-white"
                >
                  Mon profile
                </Link>
                <button 
                onClick={() => LogoutUser()}
                  className="mt-3 text-sm font-medium text-red-500 hover:text-red-500"
                >
                  Log Out
                </button>
              </div>
            </div>
          </Dropdown> 
      </div>
    </nav>
  );
};

export default Navbar;
