import React, {Component} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

class FormMui extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            name: '',
            job: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, job } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                
                <TextField 
                    type="text" 
                    name="name" 
                    id="name"
                    label="Name"
                    variant="standard"
                    value={name} 
                    onChange={this.handleChange} />
                <TextField
                    type="text" 
                    name="job" 
                    id="job"
                    label="job"
                    variant="standard"
                    value={job} 
                    onChange={this.handleChange} />
                <Button variant="contained" type="submit">
                    Submit
                </Button>
            </form>
        );
    }
}

export default FormMui;