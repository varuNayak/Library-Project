import React from 'react';
// import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// import Card from "./MyComponents/Card";
// import { Container, Row, Col, Form, FormGroup, FormLabel, Button } from 'react-bootstrap';
// import Borrow from "./MyComponents/Borrow";
import Transaction from './MyComponents/Transaction';
import Sidebar from './MyComponents/Sidebar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './Pages/Home'
import Student from './Pages/Student'
import Book from './Pages/Book'
import AddBook from './Pages/AddBook'
import UpdateBook from './Pages/UpdateBook'
import DeleteBook from './Pages/DeleteBook'
import Contact from './Pages/Contact'

function App() {
  // const [RNo, setRNo] = useState("");
  // const [bid, setBid] = useState("");
  // const [show, setshow] = React.useState(true);
  // const [roll, setRoll] = useState("");
  // const [bookID, setBookID] = useState("");
  // function clickHandle() {
  //   setRoll(RNo);
  //   setBookID(bid);
  //   setshow(false);
  //   updateCard();
  //   updateTable();
  // }

  // function setRollNo(val) {
  //   setRNo(val.target.value);
  // };
  // function setBook(val) {
  //   setBid(val.target.value);
  // };
  // function updateCard() {
  //   return (
  //     <>
  //       <Col>
  //         <div className="Card " >
  //           {
  //             show ? null : <Card
  //               title='Student Details'
  //               imageURL='https://www.w3schools.com/css/img_mountains.jpg'
  //               usn={roll}
  //             />
  //           }
  //         </div>
  //       </Col>
  //       <Col>
  //         <div className="Card ">
  //           {
  //             show ? null : <Card
  //               title='Book Details'
  //               imageURL='https://www.w3schools.com/css/img_mountains.jpg'
  //               bookId={bookID}
  //             />
  //           }
  //         </div>
  //       </Col>
  //     </>

  //   )
  // }
  // function updateTable() {
  //   return (
  //     <>
  //       {
  //         show ? null : <Borrow usn={roll} />
  //       }
  //     </>
  //   )
  // }
  return (
    // <div>
    //   <div className="App">
    //     <div className="App-header">
    //       <Container fluid>
    //         <Form >
    //           <Row>
    //             <Col>
    //               <Form.Group className='mx-5'>
    //                 <Form.Label>USN</Form.Label>
    //                 <Form.Control type="text" placeholder="Enter USN"  onChange={setRollNo} />
    //               </Form.Group>
    //             </Col>
    //             <Col>
    //               <Form.Group className='mx-5'>
    //                 <Form.Label>Book ID</Form.Label>
    //                 <Form.Control type="text" placeholder="Enter BOOK ID"  onChange={setBook} />
    //               </Form.Group>
    //             </Col>
    //           </Row>
    //         </Form>
    //       </Container>
    //       <Button className='my-4 ' variant="primary " type="submit" style={{ color: "#fff", borderBlockColor: "#fff", borderCollapse: "-moz-initial" }} onClick={clickHandle} >Submit</Button>
    //       <Row>
    //         {updateCard()}
    //       </Row>
    //       <br></br>
    //       <Row>
    //         <Col>
    //           {updateTable()}
    //         </Col>
    //       </Row>
    //     </div>
    //   </div>
    // </div>
    <>
      <Router>
        <Sidebar />
          <Routes>
            <Route path='/' exact element={<Home />}/>            
            <Route exact path='/student' element={<Student />}/>
            <Route path='/book' element={<Book />} />
            <Route path='/transaction' element={<Transaction />} />
            <Route path='/add' element={<AddBook />} />
            <Route path='/delete' element={<DeleteBook />} />
            <Route path='/update' element={<UpdateBook />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;