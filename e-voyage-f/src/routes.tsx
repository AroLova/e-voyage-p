import React from 'react';

// Admin Imports

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from 'react-icons/md';

const routes = [
  {
    type: "admin",
    name: 'Home',
    layout: '/admin',
    path: 'default',
    icon: <MdHome className="h-6 w-6" />,
  },
  {
    type: "admin",
    name: 'Users',
    layout: '/admin',
    path: 'nft-marketplace',
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,

    secondary: true,
  },
  {
    type: "admin",
    name: 'Blogs',
    layout: '/admin',
    icon: <MdBarChart className="h-6 w-6" />,
    path: 'data-tables',
  },
  {
    type: "admin",
    name: 'Demande',
    layout: '/admin',
    icon: <MdBarChart className="h-6 w-6" />,
    path: 'data-tables',
  },
  {
    name: 'Sign In',
    layout: '/auth',
    path: 'login',
    icon: <MdLock className="h-6 w-6" />,
  },
  {
    type: "propri",
    name: 'Home',
    layout: '/proprietaire',
    path: 'default',
    icon: <MdHome className="h-6 w-6" />,
  },
  {
    type: "propri",
    name: 'Blogs',
    layout: '/proprietaire',
    path: 'nft-marketplace',
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,

    secondary: true,
  },
  {
    name: 'Profile',
    layout: '/proprietaire',
    path: 'profile',
    icon: <MdPerson className="h-6 w-6" />,
  },
];
export default routes;
