import React from 'react';
import Search from './Search.jsx';

const BookshelfHeader = ({ handleSearch }) => {
    return (
        <>
            <Search handleSearch={handleSearch} />
        </>
    )
}

export default BookshelfHeader;