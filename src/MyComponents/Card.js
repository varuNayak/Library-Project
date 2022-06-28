import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios';

import './Card.css';
function Card({ title, imageURL, bookId, usn }) {

    const [student, setStudent] = useState([]);
    // const getStudent = async () => {
    //     var url = "http://localhost:3500/students/";
    //     url = url + usn;
    //     try {
    //         const student = await Axios.get(url);
    //         setStudent(student.data);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };
    const getStudent = () => {
        var url = "http://localhost:3500/students/";
        url = url + usn;
        Axios.get(url)
        .then((res)=>{
            setStudent(res.data)
            // console.log(res.data)
        })
        
    };

    useEffect(() => { getStudent(); }, [])

    const [book, setBook] = useState([]);
    // const getBook = async () => {
    //     var url = "http://localhost:3500/copyDetails/";
    //     url = url + bookId;
    //     try {
    //         const book = await Axios.get(url);
    //         setBook(book.data);
    //     } catch (e) {
    //         console.log(e);
    //     }


    // };
    const getBook = () => {
        var url = "http://localhost:3500/copyDetails/";
        url = url + bookId;
        Axios.get(url)
        .then((res) =>{
            setBook(res.data);
        })


    };
    // useEffect(() => { getBook(); }, [])

    if (title == 'Student Details') {
        return (

            <div className="card-container">
                <div className="image-container">
                    <img src={imageURL} alt="" />
                </div>
                <div className="card-content">
                    <div className="card-title">
                        <h3>{title}</h3>
                    </div>
                    {getStudent()}
                    <div className="card-body" >
                        {
                        
                            student.map((item) => {
                                return (
                                    item.First_name + " " + item.Middle_init + " " + item.Last_name
                                );
                            })
                        }
                    </div>
                </div>

            </div>
        )
    }
    else {
        // useEffect(() => { getBook(); }, [])
        return (
            <div className="card-container">
                <div className="image-container">
                    <img src={imageURL} alt="" />
                </div>
                <div className="card-content">
                    <div className="card-title">
                        <h3>{title}</h3>
                    </div>
                    {getBook()}
                    <div className="card-body">
                        {
                            book.map((item) =>
                                (item.Book_title))
                        }

                    </div>
                </div>

            </div>
        )
    }
}


export default Card