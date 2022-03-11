import React from 'react';
import Container from '@mui/material/Container';
import MainLayout from '../layouts/MainLayout';
import ImgList from '../components/ImgList';

const Home = () => {
    
    return (
        <div>
            <MainLayout>
                <Container fixed>
                    <h1>Home</h1>
                    <ImgList />
                </Container>
            </MainLayout>
        </div>
    );
};

export default Home;