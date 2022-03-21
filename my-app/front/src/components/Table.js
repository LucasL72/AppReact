import React from "react";
import Button from '@mui/material/Button';
import Tablem from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const TableHeader = () => {
    return (
         <TableHead>
            <TableRow>
                <TableCell>name</TableCell>
                <TableCell>job</TableCell>
                <TableCell>Delete</TableCell>
            </TableRow>
        </TableHead>
    );
}

const TableBodyy = (props) => {
     const rows = props.characterData.map((row, index) => {
        return (
             <TableRow key={index}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.job}</TableCell>
                <TableCell>
                    <Button variant="contained" onClick={() => props.removeCharacter(index)}>Delete</Button>
                </TableCell>
            </TableRow>
        )
    })

    return <TableBody>{rows}</TableBody>;
}

const Table = (props) => {
    
    const {characterData, removeCharacter} = props

    return (
        <TableContainer component={Paper}>
        <Tablem sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHeader />
            <TableBodyy characterData={characterData} removeCharacter= {removeCharacter} />
        </Tablem>
        </TableContainer>
    );
}

export default Table;



