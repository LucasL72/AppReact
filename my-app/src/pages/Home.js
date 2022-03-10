import React from 'react';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import Navigation from "../components/Navigation"

const Home = () => {
    return (
      
        <div>
            <Navigation />
            <Logo />
            <h1>Home</h1>
            <Footer />
        </div>
    );
};

export default Home;