import React, { Component } from "react"
import Table from "../components/Table"
import FormMui from "../components/FormMui"
import Container from 'react-bootstrap/Container'
import ListCards from '../components/ListCards'
import MainLayout from "../layouts/MainLayout"

class Apptuto extends Component {
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
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render () {
        const { characters } = this.state;
        const listCard = [
            {
                id: 0,
                title: "test1",
                content: "Test description",
            },
            {
                id: 1,
                title: "test2",
                content: "Test description 2",
            },
            {
                id: 2,
                title: "test 3",
                content: "Test description 3",
            },
            {
                id: 3,
                title: "test 4",
                content: "Test description 4",
            },
        ]
       
        return (    
            <div className="App">
                <MainLayout>
                    <Container>
                        <h1>Accueil</h1>
                        <ListCards list={ listCard } /> 
                        <h1>Form</h1>
                        <Table characterData= {characters} removeCharacter={this.removeCharacter} />
                        <h3>Add new</h3> 
                        <FormMui handleSubmit={this.handleSubmit} />
                    </Container>
                </MainLayout>
            </div>
        );
    }    
    
    
}
export default Apptuto