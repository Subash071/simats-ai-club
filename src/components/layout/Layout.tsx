import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AnthemModalProvider } from '../../context/AnthemModalContext';
import { AnthemModal } from '../ui/AnthemModal';

export function Layout() {
  return (
    <AnthemModalProvider>
      <div className="min-h-screen flex flex-col selection:bg-accent selection:text-black">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <AnthemModal />
      </div>
    </AnthemModalProvider>
  );
}
