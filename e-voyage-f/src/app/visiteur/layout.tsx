'use client';
// Layout components
import { usePathname } from 'next/navigation';
import { useContext, useState } from 'react';
import routes from 'routes';
import {
  getActiveNavbar,
  getActiveRoute,
  isWindowAvailable,
} from 'utils/navigation';
import React from 'react';
//import { Portal } from '@chakra-ui/portal';
import Navbar from 'components/navbar/visiteur';
import Footer from 'components/footer/Footer';

export default function Admin({ children }: { children: React.ReactNode }) {
  // states and functions
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  if (isWindowAvailable()) document.documentElement.dir = 'ltr';
  return (
    <div className="flex h-screen w-full  bg-background-100 dark:bg-background-900">
      {/* <Sidebar routes={routes} open={open} setOpen={setOpen} variant="admin" /> */}
      {/* Navbar & Main Content */}
      <div className="h-screen w-full font-dm dark:bg-navy-900">
        {/* Main Content */}
        <main
          className={`flex justify-center mx-2.5   transition-all dark:bg-navy-900 
              md:pr-2 `}
        >
          {/* Routes */}
          <div>
            <Navbar
              onOpenSidenav={() => setOpen(!open)}
              brandText={getActiveRoute(routes, pathname)}
              secondary={getActiveNavbar(routes, pathname)}
            />
            <div className="mx-auto min-h-screen p-2 !pt-[10px] md:p-2">
              {children}
            </div>
            <div className="p-3">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
