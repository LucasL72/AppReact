import React, { Component } from "react"
import Table from "./Table"
import Form from "./Form"
import Footer from "./components/Footer"
import Navigation from "./components/Navigation"
import Container from '@mui/material/Container';
import Cards from './components/Cards';

class App extends Component {
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
                    <Cards /> 
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
export default App