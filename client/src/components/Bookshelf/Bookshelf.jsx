import React, { useState, useEffect } from "react";
import axios from 'axios';
import BookshelfHeader from "./BookshelfHeader/BookshelfHeader.jsx";
import BookshelfBody from "./BookshelfBody/BookshelfBody.jsx";
import DisplayModal from "./DisplayModal/DisplayModal.jsx"
import ExtraBookData from "./BookshelfHeader/ExtraBookData.jsx";
import '../../App.css'

const Bookshelf = () => {
    const [books, setBooks] = useState([]);
    const [extraBookData, setExtraBookData] = useState({});
    const [clickedBook, setClickedBook] = useState();

    useEffect(() => {

    }, [])
    const handleSearch = (name) => {
        // TODO: Get reqest to Server
        axios.get(`/book${name}`)
            .then((res) => {
                setExtraBookData({
                    "mostFreqAuthor": res.data.mostFreqAuthor,
                    "newestPub": res.data.newestPub,
                    "oldestPub": res.data.oldestPub,
                    "responseTime": res.data.responseTime,
                    "totalItems": res.data.totalItems
                })
                setBooks(res.data.items)
            })
    }

    const handleBookClick = (book) => {
        setClickedBook(book)
    }

    return (
        <>
            <h1>Google Books API Search</h1>
            <div className="container">
                <div className="bookshelf">
                    <div className="bookshelf-header">
                        <BookshelfHeader handleSearch={handleSearch} />
                    </div>
                    <div className="bookshelf-body">
                        <BookshelfBody books={books} handleBookClick={handleBookClick} />
                        {
                            clickedBook ? <DisplayModal setClickedBook={setClickedBook} bookData={clickedBook} /> : null
                        }
                    </div>
                    <div>
                        <ExtraBookData {...extraBookData} />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Bookshelf;