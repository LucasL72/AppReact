import React, { Component } from "react"
import Table from "../components/Table"
import Form from "../components/Form"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import Container from '@mui/material/Container';
import ListCards from '../components/ListCards';

class Apptuto extends Component {
    state = {
        characters: []
    };

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

    render(){
        const { characters } = this.state
        return (    
            <div className="App">
                <Navigation />
                <Container fixed>
                <h1>Accueil</h1>
                <ListCards /> 
                <h1>Form</h1>
                <Table characterData= {characters} removeCharacter={this.removeCharacter} />
                <h3>Add new</h3> 
                <Form handleSubmit={this.handleSubmit} />
                </Container>
                <Footer />
            </div>
        )
    }
}
export default Apptuto