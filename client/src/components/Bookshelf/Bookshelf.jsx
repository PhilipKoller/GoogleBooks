import React, { useState, useEffect} from "react";
import axios from 'axios';
import BookshelfHeader from "./BookshelfHeader/BookshelfHeader.jsx";
import BookshelfBody from "./BookshelfBody/BookshelfBody.jsx";
import DisplayModal from "./DisplayModal/DisplayModal.jsx"
import '../../App.css'

const Bookshelf = () => {
    const [books, setBooks] = useState([]);
    const [clickedImage, setClickedImage] = useState();

    useEffect(() => {

    }, [])
    const handleSearch = (name) => {
       // TODO: Get reqest to Server
       axios.get(`/book${name}`)
       .then((res) => {
           console.log(res.data.items)
           setBooks(res.data.items)
       })
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
                        {
                            clickedImage ? <DisplayModal setClickedImage={setClickedImage} /> : null
                        }
                    </div>
                </div>
            </div>
        </>

    )
}

export default Bookshelf;