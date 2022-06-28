import React from 'react'
import { Container, Row, Col, Form, FormGroup, FormLabel, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function DeleteBook() {
  const [bookID, setBookID] = useState("");
  const [book, setBook] = useState([]);
  const [show, setshow] = React.useState(true);


  function DeleteBookID(val) {
    setBookID(val.target.value)
  }

  const getBook = () => {
    if (bookID === '') {
      setshow(true);
    }
    var url = 'http://localhost:3500/copyDetails/'
    url = url + bookID;
    Axios.get(url)
      .then((res) => {
        setBook(res.data);
      })
  }

  useEffect(() => { getBook(); }, [])

  const deleteHandle = (e) => {
    e.preventDefault();
    var url = 'http://localhost:3500/delete/'
    url = url + bookID
    setBookID('')
    Axios.delete(url)
      .then((data) => {
        alert("Book Deleted Successfully!!!");
      })
      .catch((err) => {
        alert("Book can't be deleted!!!")
      })
  }

  function submitHandle() {
    setshow(false);
  }
  const renderBook = () => {
    return (
      show ? null :
        <>
          {getBook()}
          {
            book.map((item) => {

              return (
                <>
                  <Row>
                    <Col className='columns my-4 App'>
                      Book Info.
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      Book ID: {item.Book_id}
                    </Col>
                    <Col>
                      Call No.: {item.Call_no}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      Book Title: {item.Book_title}
                    </Col>
                    <Col>
                      Branch: {item.Subject_branch}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      Publisher: {item.Publisher}
                    </Col>
                    <Col>
                      Language: {item.Language}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      Volume: {item.Volume}
                    </Col>
                    <Col>
                      Edition: {item.Edition}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      Published Year: {item.Published_year}
                    </Col>
                    <Col>
                      Pages: {item.Pages}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      Status: {item.Status}
                    </Col>
                    <Col>
                      Cost: {item.Cost}
                    </Col>
                  </Row>
                  <Row>
                    <Col className='text-center' >
                      <Button className='my-4 ' variant="primary " type="submit" style={{ color: "#fff", borderBlockColor: "#fff", borderCollapse: "-moz-initial" }} onClick={deleteHandle}>Delete</Button>
                    </Col>
                  </Row>
                </>
              )

            })
          }
        </>
    )
  }


  return (
    <div >
      <Container className='main w-50 p-3'>
        <Row>
          <Col className='columns my-4 App' >
            Delete A Book
          </Col>
        </Row>
        <Row>
          <Col className='columns my-2 ' >
            <Form.Group >
              <Form.Label>Book ID:</Form.Label>
            </Form.Group>
          </Col>
          <Col className='columns my-2 ' lg={10}>
            <Form.Control type="text" placeholder="Enter Book ID" onChange={DeleteBookID} value={bookID} />
          </Col>
          <Col className='text-center' >
            <Button className='my-4 ' variant="primary " type="submit" style={{ color: "#fff", borderBlockColor: "#fff", borderCollapse: "-moz-initial" }} onClick={submitHandle}>Submit</Button>
          </Col>
        </Row>
        <Row>
          {renderBook()}
        </Row>
      </Container>
    </div>
  )
}

export default DeleteBook