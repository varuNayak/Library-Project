import React from 'react'
import { Container, Row, Col, Form, FormGroup, FormLabel, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Axios from 'axios';


function AddBook() {
  const [callNo, setCallNo] = useState("");
  const [title, setTitle] = useState("");
  const [branch, setBranch] = useState("");
  const [publisher, setPublisher] = useState("");
  const [volume, setVolume] = useState("");
  const [edition, setEdition] = useState("");
  const [language, setLanguage] = useState("");
  const [pubYear, setPubYear] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [location, setLocation] = useState("");
  const [callNum, setCallNum] = useState("");
  const [bookID, setBookID] = useState("");
  const [bind, setBind] = useState("");
  const [vendor, setVendor] = useState("");
  const [billNo, setBillNo] = useState("");
  const [cost, setCost] = useState("");
  const [status, setStatus] = useState("");
  const [billDate, setBillDate] = useState("");
  const [pages, setPages] = useState("");


  function AddCallNo(val) {
    setCallNo(val.target.value)
  }

  function AddTitle(val) {
    setTitle(val.target.value)
  }

  function AddBranch(val) {
    setBranch(val.target.value)
  }

  function AddPublisher(val) {
    setPublisher(val.target.value)
  }

  function AddVolume(val) {
    setVolume(val.target.value)
  }

  function AddEdition(val) {
    setEdition(val.target.value)
  }

  function AddLanguage(val) {
    setLanguage(val.target.value)
  }
  
  function AddPubYear(val) {
    setPubYear(val.target.value)
  }

  function AddSubTitle(val) {
    setSubTitle(val.target.value)
  }

  function AddLocation(val) {
    setLocation(val.target.value)
  }

  function AddCopyCall(val) {
    setCallNum(val.target.value)
  }

  function AddBookID(val) {
    setBookID(val.target.value)
  }

  function AddBind(val) {
    setBind(val.target.value)
  }

  function AddVendor(val) {
    setVendor(val.target.value)
  }

  function AddBillNo(val) {
    setBillNo(val.target.value)
  }

  function AddCost(val) {
    setCost(val.target.value)
  }

  function AddStatus(val) {
    setStatus(val.target.value)
  }

  function AddBillDate(val) {
    setBillDate(val.target.value)
  }

  function AddPages(val) {
    setPages(val.target.value)
  }

  const addClickHandle = (e) => {
    e.preventDefault();
    setCallNo('')
    setTitle('')
    setBranch('')
    setPublisher('')
    setVolume('')
    setEdition('')
    setLanguage('')
    setPubYear('')
    setSubTitle('')
    setLocation('')


    Axios.post('http://localhost:3500/books', {
      Call_no: callNo,
      Book_title: title,
      Subject_branch: branch,
      Publisher: publisher,
      Volume: volume,
      Edition: edition,
      Language: location,
      Published_year: pubYear,
      Sub_title: subTitle,
      Location: location
    })
      .then((res) => {
        alert("Book Added Successfully!!!")
      })
      .catch((err) => {
        alert("Book can't be added!!!")
      })
  }

  const addCopyClick = (e) => {
    e.preventDefault();
    setCallNum('')
    setBookID('')
    setBind('')
    setVendor('')
    setBillNo('')
    setCost('')
    setStatus('')
    setBillDate('')
    setPages('')

    Axios.post('http://localhost:3500/copy', {
      Call_no: callNum,
      Book_id: bookID,
      Binding: bind,
      Vendor: vendor,
      Bill_no: billNo,
      Cost: cost,
      Status: status,
      Bill_date: billDate,
      Pages: pages
    })
      .then((res) => {
        alert("Book Added Successfully!!!")
      })
      .catch((err) => {
        alert("Book can't be added!!!")
      })
  }

  return (
    <div >
      <Container className='main w-50 p-3'>
        <Row>
          <Col className='columns my-4 App' >
            Add a Book
          </Col>
        </Row>
        <Row>
          <Col className='columns my-2 ' >
            <Form.Group >
              <Form.Label>Call No.:</Form.Label>
            </Form.Group>
          </Col>
          <Col className='columns my-2 ' lg={10}>
            <Form.Control type="text" placeholder="Enter Call No." onChange={AddCallNo} value={callNo} />
          </Col>
        </Row>
        <Row>

          <Col className='columns my-2 ' >
            <Form.Group >
              <Form.Label>Book Title:</Form.Label>
            </Form.Group>
          </Col>
          <Col className='columns my-2 ' lg={10}>
            <Form.Control type="text" placeholder="Enter Book Title" onChange={AddTitle} value={title} />
          </Col>
        </Row>
        <Row>

          <Col className='columns my-2 ' >
            <Form.Group >
              <Form.Label>Branch:</Form.Label>
            </Form.Group>
          </Col>
          <Col className='columns my-2 ' lg={10}>
            <Form.Control type="text" placeholder="Enter Branch" onChange={AddBranch} value={branch} />
          </Col>
        </Row>
        <Row>

          <Col className='columns my-2 ' >
            <Form.Group >
              <Form.Label>Publisher:</Form.Label>
            </Form.Group>
          </Col>
          <Col className='columns my-2 ' lg={10}>
            <Form.Control type="text" placeholder="Enter Publisher" onChange={AddPublisher} value={publisher} />
          </Col>
        </Row>
        <Row>

          <Col className='columns my-2 ' >
            <Form.Group >
              <Form.Label>Volume:</Form.Label>
            </Form.Group>
          </Col>
          <Col className='columns my-2 ' lg={10}>
            <Form.Control type="text" placeholder="Enter Volume" onChange={AddVolume} value={volume} />
          </Col>
        </Row>
        <Row>

          <Col className='columns my-2 ' >
            <Form.Group >
              <Form.Label>Edition:</Form.Label>
            </Form.Group>
          </Col>
          <Col className='columns my-2 ' lg={10}>
            <Form.Control type="text" placeholder="Enter Edition" onChange={AddEdition} value={edition} />
          </Col>
        </Row>
        <Row>

          <Col className='columns my-2 ' >
            <Form.Group >
              <Form.Label>Language:</Form.Label>
            </Form.Group>
          </Col>
          <Col className='columns my-2 ' lg={10}>
            <Form.Control type="text" placeholder="Enter Language" onChange={AddLanguage} value={language} />
          </Col>
        </Row>
        <Row>

          <Col className='columns my-2 ' >
            <Form.Group >
              <Form.Label>Published Year:</Form.Label>
            </Form.Group>
          </Col>
          <Col className='columns my-2 ' lg={10}>
            <Form.Control type="text" placeholder="Enter Published Year" onChange={AddPubYear} value={pubYear} />
          </Col>
        </Row>
        <Row>

          <Col className='columns my-2 ' >
            <Form.Group >
              <Form.Label>Location:</Form.Label>
            </Form.Group>
          </Col>
          <Col className='columns my-2 ' lg={10}>
            <Form.Control type="text" placeholder="Enter Location" onChange={AddLocation} value={location} />
          </Col>
        </Row>
        <Row>

          <Col className='columns my-2 ' >
            <Form.Group >
              <Form.Label>Sub title:</Form.Label>
            </Form.Group>
          </Col>
          <Col className='columns my-2 ' lg={10}>
            <Form.Control type="text" placeholder="Enter Sub title" onChange={AddSubTitle} value={subTitle} />
          </Col>
          <Col className='text-center' >
            <Button className='my-4 ' variant="primary " type="submit" style={{ color: "#fff", borderBlockColor: "#fff", borderCollapse: "-moz-initial" }} onClick={addClickHandle}>Add Book</Button>
          </Col>
        </Row>

        <Row>
          <Col className='columns my-4 App' >
            Add a Copy
          </Col>
        </Row>
        <Row>
          <Col className='columns my-2 ' >
            <Form.Group >
              <Form.Label>Call No.:</Form.Label>
            </Form.Group>
          </Col>
          <Col className='columns my-2 ' lg={10}>
            <Form.Control type="text" placeholder="Enter Call No." onChange={AddCopyCall} value={callNum} />
          </Col>
        </Row>
        <Row>

          <Col className='columns my-2 ' >
            <Form.Group >
              <Form.Label>Book ID:</Form.Label>
            </Form.Group>
          </Col>
          <Col className='columns my-2 ' lg={10}>
            <Form.Control type="text" placeholder="Enter Book ID" onChange={AddBookID} value={bookID} />
          </Col>
        </Row>
        <Row>

          <Col className='columns my-2 ' >
            <Form.Group >
              <Form.Label>Binding:</Form.Label>
            </Form.Group>
          </Col>
          <Col className='columns my-2 ' lg={10}>
            <Form.Control type="text" placeholder="Enter Binding info" onChange={AddBind} value={bind} />
          </Col>
        </Row>
        <Row>

          <Col className='columns my-2 ' >
            <Form.Group >
              <Form.Label>Vendor:</Form.Label>
            </Form.Group>
          </Col>
          <Col className='columns my-2 ' lg={10}>
            <Form.Control type="text" placeholder="Enter Vendor info" onChange={AddVendor} value={vendor} />
          </Col>
        </Row>
        <Row>

          <Col className='columns my-2 ' >
            <Form.Group >
              <Form.Label>Bill No.:</Form.Label>
            </Form.Group>
          </Col>
          <Col className='columns my-2 ' lg={10}>
            <Form.Control type="text" placeholder="Enter Bill No." onChange={AddBillNo} value={billNo} />
          </Col>
        </Row>
        <Row>

          <Col className='columns my-2 ' >
            <Form.Group >
              <Form.Label>Cost:</Form.Label>
            </Form.Group>
          </Col>
          <Col className='columns my-2 ' lg={10}>
            <Form.Control type="text" placeholder="Enter Cost" onChange={AddCost} value={cost} />
          </Col>
        </Row>
        <Row>

          <Col className='columns my-2 ' >
            <Form.Group >
              <Form.Label>Status:</Form.Label>
            </Form.Group>
          </Col>
          <Col className='columns my-2 ' lg={10}>
            <Form.Control type="text" placeholder="Enter Status of the Book" onChange={AddStatus} value={status} />
          </Col>
        </Row>
        <Row>

          <Col className='columns my-2 ' >
            <Form.Group >
              <Form.Label>Bill Date:</Form.Label>
            </Form.Group>
          </Col>
          <Col className='columns my-2 ' lg={10}>
            <Form.Control type="text" placeholder="Enter Bill Date" onChange={AddBillDate} value={billDate} />
          </Col>
        </Row>
        <Row>

          <Col className='columns my-2 ' >
            <Form.Group >
              <Form.Label>Pages:</Form.Label>
            </Form.Group>
          </Col>
          <Col className='columns my-2 ' lg={10}>
            <Form.Control type="text" placeholder="Enter No. of Pages" onChange={AddPages} value={pages} />
          </Col>
          <Col className='text-center' >
            <Button className='my-4 ' variant="primary " type="submit" style={{ color: "#fff", borderBlockColor: "#fff", borderCollapse: "-moz-initial" }} onClick={addCopyClick} >Add Copy</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AddBook