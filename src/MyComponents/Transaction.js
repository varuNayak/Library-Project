import React from 'react';
import { useState, useEffect } from 'react';
// import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Card from "./Card";
import { Container, Row, Col, Form, FormGroup, FormLabel, Button } from 'react-bootstrap';
import Borrow from "./Borrow";
import Axios from 'axios';


function Transaction() {
  const [RNo, setRNo] = useState("");
  const [bid, setBid] = useState("");
  const [show, setshow] = React.useState(true);
  const [roll, setRoll] = useState("");
  const [bookID, setBookID] = useState("");
  function clickHandle() {
    setRoll(RNo);
    setBookID(bid);
    setshow(false);
    updateCard();
    updateTable();
  }
  function setRollNo(val) {
    setRNo(val.target.value);
  };
  function setBook(val) {
    setBid(val.target.value);
  };
  function updateCard() {
    return (
      <>
        <Col>
          <div className="Card " >
            {
              show ? null : <Card
                title='Student Details'
                imageURL='https://www.w3schools.com/css/img_mountains.jpg'
                usn={roll}
              />
            }
          </div>
        </Col>
        <Col>
          <div className="Card ">
            {
              show ? null : <Card
                title='Book Details'
                imageURL='https://www.w3schools.com/css/img_mountains.jpg'
                bookId={bookID}
              />
            }
          </div>
        </Col>
      </>

    )
  }
  function updateTable() {
    return (
      <>
        {
          show ? null : <Borrow usn={roll} />
        }
      </>
    )
  }


  const borrowBook = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3500/borrowBook/', {
      Book_id: bookID,
      Call_no: bookID.slice(0, 1),
      USN: roll
    })
      .then((res) => {
        alert("Book Issued Successfully!!!")
      })
      .catch((err) => {
        alert("Book can't be issued!!!")
      })
  }

  const returnBook = (e) => {
    e.preventDefault();
    Axios.put('http://localhost:3500/returnBook/', {
      Book_id: bookID,
      Call_no: bookID.slice(0, 1),
      USN: roll
    })
      .then((res) => {
        alert("Book Returned Successfully!!!")
      })
      .catch((err) => {
        alert("Book can't be returned!!!")
      })
  }

  return (
    <div>
      <div className="App">
        <div className="App-header">
          <Container className='main w-50 p-3'>
            <Row>
              <Col className='columns my-4' lg={5}>
                <Form.Group >
                  {/* <Form.Label>USN</Form.Label> */}
                  <Form.Control type="text" placeholder="Enter USN" onChange={setRollNo} />
                </Form.Group>
              </Col>
              <Col className='columns my-4' lg={5} >
                <Form.Group >
                  {/* <Form.Label>Book ID</Form.Label> */}
                  <Form.Control type="text" placeholder="Enter BOOK ID" onChange={setBook} />
                </Form.Group>
              </Col>
              <Col>
                <Button className='my-4 ' variant="primary " type="submit" style={{ color: "#fff", borderBlockColor: "#fff", borderCollapse: "-moz-initial" }} onClick={clickHandle} >Submit</Button>
              </Col>
            </Row>
            <Row>
              {updateCard()}
            </Row>
            <br></br>
            <Row>
              <Col>
                {updateTable()}
              </Col>
            </Row>
            <br></br>
            {
              show ? null : <Row>
                <Col>
                  <Button className='my-4' variant='primary' type='submit' style={{ color: "#fff", borderBlockColor: "#fff", borderCollapse: "-moz-initial" }} onClick={borrowBook}>Borrow</Button>
                </Col>
                <Col>
                  <Button className='my-4' variant='primary' type='submit' style={{ color: "#fff", borderBlockColor: "#fff", borderCollapse: "-moz-initial" }} onClick={returnBook}>Return</Button>
                </Col>
              </Row>
            }

          </Container>
        </div>
      </div>
    </div>
  )
}

export default Transaction