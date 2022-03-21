import React from 'react';
import Container from '@mui/material/Container';
import MainLayout from '../layouts/MainLayout';
import Header from '../components/Header';
import ListCards from '../components/ListCards';
import Forms from '../components/Forms';

const Home = () => {
    const listCard = [
        {
            id: 0,
            title: "test1",
            content: "Test description",
            titleaccord1:"test 1",
            accord1: "testacc 1",
            titleaccord2:"test accord 1",
            accord2: "Lorem"
        },
        {
            id: 1,
            title: "test2",
            content: "Test description 2",
            titleaccord1:"test 2",
            accord1: "testacc 2",
            titleaccord2:"test accord 2",
            accord2: "Lorem 2"
        },
        {
            id: 2,
            title: "test 3",
            content: "Test description 3",
            titleaccord1:"test 3",
            accord1: "testacc 3",
            titleaccord2:"test accord 3",
            accord2: "Lorem 3"
        },
    ]

    return (
        <div>
            <MainLayout>
                <Header />
                <Container fixed>
                    <ListCards list={ listCard } />
                    <Forms />
                </Container>
            </MainLayout>
        </div>
    );
};

export default Home;