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




function Student() {
  const [record, setRecord] = useState([]);
  const [roll, setRoll] = useState('');
  const [usn, setUsn] = useState('');

  const getRecords = () => {
    if (roll === '') {
      var url = 'http://localhost:3500/currentPending/'
      Axios.get(url)
        .then((res) => {
          setRecord(res.data)
          setUsn('');
        })
    }
    else{
      url = 'http://localhost:3500/currentPendingByUSN/'
      url = url + usn;
      Axios.get(url)
        .then((res) => {
          setRecord(res.data)
        })
    }
  }

  function clickHandle(){
    setUsn(roll);
  }

  useEffect(() => { getRecords(); }, [])

  const renderTable = () => {
    return (
      <>
      {getRecords()}
        {record.map((item) => {
          return (
            <StyledTableRow >
              <StyledTableCell align='center'>{item.USN}</StyledTableCell>
              <StyledTableCell align="center">{item.First_name + " " + item.Middle_init + " " + item.Last_name}</StyledTableCell>
              <StyledTableCell align="center">{item.book_title}</StyledTableCell>
              <StyledTableCell align="center">{item.book_id}</StyledTableCell>
              <StyledTableCell align="center">{item.Phone_no}</StyledTableCell>
              <StyledTableCell align="center">{item.Due_date.slice(0, 10)}</StyledTableCell>
            </StyledTableRow>
          )
        })}
      </>
    )
  }

  function setStudentRoll(val) {
    setRoll(val.target.value)
  }

  return (
    <Container>
      <Row>
        <Col className='columns my-4' lg={8}>
          <Form.Group >
            <Form.Control type="text" placeholder="Search Student USN" onChange={setStudentRoll} />
          </Form.Group>
        </Col>
        <Col>
          <Button className='my-4 ' variant="primary " type="submit" style={{ color: "#fff", borderBlockColor: "#fff", borderCollapse: "-moz-initial" }} onClick={clickHandle} >Search</Button>
        </Col>
      </Row>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align='center'>USN</StyledTableCell>
              <StyledTableCell align="center">Full Name</StyledTableCell>
              <StyledTableCell align="center">Book Title</StyledTableCell>
              <StyledTableCell align="center">Book ID</StyledTableCell>
              <StyledTableCell align="center">Ph. No.</StyledTableCell>
              <StyledTableCell align="center">Due Date</StyledTableCell>
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

export default Student