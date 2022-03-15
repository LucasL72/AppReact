import React from 'react';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';


const MainLayout = ({ children }) => {
    return (
        <div className='App'>
            <Navigation/>
            <Logo />
            <main>{ children }</main>
            <Footer />
        </div>
    );
};

export default MainLayout;