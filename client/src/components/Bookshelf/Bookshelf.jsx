import React, { useState, useEffect} from "react";
import axios from 'axios';
import BookshelfHeader from "./BookshelfHeader/BookshelfHeader.jsx";
import BookshelfBody from "./BookshelfBody/BookshelfBody.jsx";
import '../../App.css'

const Bookshelf = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get(`/booktree`)
        .then((res) => {
            console.log(res)
        })
    }, [])
    const handleSearch = (name) => {
       // TODO: Get reqest to Server
    }

    return (
        <>
            <div className="container">
                <div className="image-gallery">
                    <div className="image-header">
                        <BookshelfHeader handleSearch={handleSearch} />
                    </div>
                    <div className="image-body">
                        <BookshelfBody books={books} />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Bookshelf;