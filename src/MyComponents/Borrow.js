import React from 'react'
// import { Table } from 'react-bootstrap'
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

function Borrow({ usn }) {
  // const [title, setTitle] = useState([]);
  // const [bookID, setBookID] = useState([]);
  // const [bdate, setBdate] = useState([]);
  // const [ddate, setDdate] = useState([]);
  const [pending, setPending] = useState([]);

  // const getPending = async () => {
  //   var url = "http://localhost:3500/booksPendingByUSN/";
  //   url = url + usn;
  //   try {
  //     const book = await Axios.get(url);
  //     setPending(book.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  const getPending = () => {
    var url = "http://localhost:3500/booksPendingByUSN/";
    url = url + usn;
    Axios.get(url)
    .then((res)=>{
      setPending(res.data)
    })
  }

  useEffect(() => { getPending(); }, [])

  const renderTable = () => {
    return (
      <>
      {getPending()}
        {pending.map((item) => {
          return (
            <StyledTableRow key={item.book_id}>
              <StyledTableCell align='center'>
                {item.book_id}
              </StyledTableCell>
              <StyledTableCell align="center">{item.book_title}</StyledTableCell>
              <StyledTableCell align="center">{item.issue_date.slice(0, 10)}</StyledTableCell>
              <StyledTableCell align="center">{item.Due_date.slice(0, 10)}</StyledTableCell>
            </StyledTableRow>
          )
        })}
      </>
  
  
    )
  }
  return (
    // <div className='mx-5 my-5' >
    //   <Table striped bordered hover size="" variant='dark'>

    //     <thead>

    //       <tr style={{ fontSize: "20px" }}>
    //         <th>S.No</th>
    //         <th>Book Id</th>
    //         <th>Title</th>
    //         <th>Borrow date</th>
    //         <th>Due date</th>
    //       </tr>
    //     </thead>
    //     <tbody style={{ fontSize: "15px" }}>
    //{
    /* {
      book.map((item)=>{
        return (
          <tr>
            <td>1</td>
            <td>{item.Book_id}</td>
            <td>{item.Book_title}</td>
            <td>{item.Borrow_date.slice(0,10)}</td>
            <td>{item.Due_date.slice(0,10)}</td>
          </tr>
        )
      })
    } */
    //}
    // <tr>
    //{/* {getPending(0)} */}
    // {/* <td>1</td> */}
    //{
    /* {
    pending.map((item) => {
      return (
        <>
          <td>{item.book_id}</td>
          <td>{item.book_title}</td>
          <td>{item.issue_date.slice(0, 10)}</td>
          <td>{item.Due_date.slice(0, 10)}</td>
        </>

      );

    })
  } */
    //}
    //{
    /* <td>
    {
      pending.map((item) => {
        return (item.book_id)
      })
    }
  </td>
  <td>
    {
      pending.map((item) => {
        return (item.book_title)
      })
    }
  </td> */
    //}
    // {
    //   pending.map((item) => {
    //     return (
    //       <>
    //         <td>1</td>
    //         <td>{item.book_id}</td>
    //         <td>{item.book_title}</td>
    //         <td>{item.issue_date.slice(0, 10)}</td>
    //         <td>{item.Due_date.slice(0, 10)}</td>
    //         </>)
    // })}



    //{
    /* <td>{bookID}</td>
  <td>{title}</td>
  <td>{bdate.slice(0, 10)}</td>
  <td>{ddate.slice(0, 10)}</td> */
    //}
    // </tr>
    //{
    /* <tr>
    <td>2</td>
    <td>{bookID}</td>
    <td>{title}</td>
    <td>{bdate.slice(0, 10)}</td>
    <td>{ddate.slice(0, 10)}</td>
  </tr>
  <tr>
    <td>3</td>
    <td>{bookID}</td>
    <td>{title}</td>
    <td>{bdate.slice(0, 10)}</td>
    <td>{ddate.slice(0, 10)}</td>
  </tr> */
    //}
    // </tbody >


    // </Table>
    // </div>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align='center'>Book ID</StyledTableCell>
            <StyledTableCell align="center">Book Title</StyledTableCell>
            <StyledTableCell align="center">Borrow Date</StyledTableCell>
            <StyledTableCell align="center">Due Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderTable()}
        </TableBody>

      </Table>
    </TableContainer>

  )
}

export default Borrow