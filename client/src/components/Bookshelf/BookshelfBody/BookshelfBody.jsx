import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


const BookshelfBody = ({ books, handleBookClick }) => {
    return (
        <ImageList sx={{ width: 700, height: 650 }}>
            {books.map((bookData) => {
                return <React.Fragment key={bookData.id}>
                    <ImageListItem>
                        <img
                            src={bookData.imageLinks && bookData.imageLinks.thumbnail ? bookData.imageLinks.thumbnail : ''}
                            alt={bookData.title} loading="lazy"
                            onClick={() => {
                                handleBookClick(bookData)
                            }}
                        />
                        <ImageListItemBar
                            title={
                                bookData.title.length > 35
                                    ? bookData.title.slice(0, 35) + "..."
                                    : bookData.title
                            }
                            subtitle={<p>Authors: {bookData.authors ? bookData.authors.join(', ') : 'N/A'}</p>}
                            position="below"
                        />
                    </ImageListItem>
                </React.Fragment>
            })}
        </ImageList>
    )
}

export default BookshelfBody;