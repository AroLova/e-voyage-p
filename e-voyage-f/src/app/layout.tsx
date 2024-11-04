import React, { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppWrappers from './AppWrappers';

// import '@asseinfo/react-kanban/dist/styles.css';
// import '/public/styles/Plugins.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body id={'root'} className='bg-background-100 dark:bg-background-900'>
        <ToastContainer />
        <AppWrappers>

          {children}
        </AppWrappers>
      </body>
    </html>
  );
}
