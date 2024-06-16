// LayoutWithNavFooter.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarOne from '../NavbarOne';
import Footer from '../Footer';

const LayoutWithNavFooter = () => {
  return (
    <>
      <NavbarOne />
      <Outlet /> 
      <Footer />
    </>
  );
};

export default LayoutWithNavFooter;
