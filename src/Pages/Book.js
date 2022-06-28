import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container, Row, Col, Form, FormGroup, FormLabel, Button } from 'react-bootstrap';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




function Book() {
  const [books, setBooks] = useState([]);
  const [bookTitle, setBookTitle] = useState('');


  const getBooks = () => {
    if (bookTitle === '') {
      var url = 'http://localhost:3500/books/'
      Axios.get(url)
        .then((res) => {
          setBooks(res.data)
        })
    }
    else {
      url = 'http://localhost:3500/searchBookByTitle/'
      url = url + bookTitle;
      Axios.get(url)
        .then((res) => {
          setBooks(res.data)
        })
    }

  }

  useEffect(() => { getBooks(); }, [])


  const renderTable = () => {
    return (
      <>
        {getBooks()}
        {books.map((item) => {
          return (
            <StyledTableRow key={item.Call_no}>
              <StyledTableCell align='center'>{item.Call_no}</StyledTableCell>
              <StyledTableCell align="center">{item.Book_title}</StyledTableCell>
              <StyledTableCell align="center">{item.Subject_branch}</StyledTableCell>
              <StyledTableCell align="center">{item.Publisher}</StyledTableCell>
              <StyledTableCell align="center">{item.Location}</StyledTableCell>
              <StyledTableCell align="center">{item.Total_no_of_copies}</StyledTableCell>
              <StyledTableCell align="center">{item.Current_no_of_copies}</StyledTableCell>
            </StyledTableRow>
          )
        })}
      </>
    )
  }

  function setTitle(val) {
    setBookTitle(val.target.value)
  }

  return (
    <Container>

      <Row>
        <Col className='columns my-4' lg={8}>
          <Form.Group >
            <Form.Control type="text" placeholder="Search Book Title" onChange={setTitle} />
          </Form.Group>
        </Col>
        <Col>
          <Button className='my-4 ' variant="primary " type="submit" style={{ color: "#fff", borderBlockColor: "#fff", borderCollapse: "-moz-initial" }} >Search</Button>
        </Col>
      </Row>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align='center'>Call No</StyledTableCell>
              <StyledTableCell align="center">Book Title</StyledTableCell>
              <StyledTableCell align="center">Branch</StyledTableCell>
              <StyledTableCell align="center">Publisher</StyledTableCell>
              <StyledTableCell align="center">Location</StyledTableCell>
              <StyledTableCell align="center">Total Copies</StyledTableCell>
              <StyledTableCell align="center">Current Copies</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {renderTable()}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Book