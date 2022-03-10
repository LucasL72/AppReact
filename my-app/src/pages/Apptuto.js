import React, { Component } from "react"
import Table from "../components/Table"
import Form from "../components/Form"
import Container from '@mui/material/Container';
import ListCards from '../components/ListCards';
import MainLayout from "../layouts/MainLayout";

const Apptuto = () => {
    const listCard = [
        {
            id: 0,
            title:"test1",
            description: " test description",
            img: "./img/licorn.jpeg",
        }
    ];
    state = {
        characters: []
    };
// Delete Tableaux 
    removeCharacter = (index) => {
        const {characters} = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            })
        });
    };

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    };

    render () ;{
        const { characters } = this.state;
            return (    
                <div className="App">
                    <MainLayout>
                        <Container fixed>
                            <h1>Accueil</h1>
                            <ListCards list={ listCard} /> 
                            <h1>Form</h1>
                            <Table characterData= {characters} removeCharacter={this.removeCharacter} />
                            <h3>Add new</h3> 
                            <Form handleSubmit={this.handleSubmit} />
                        </Container>
                     </MainLayout>
                </div>
            )
    }
    
}
export default Apptuto