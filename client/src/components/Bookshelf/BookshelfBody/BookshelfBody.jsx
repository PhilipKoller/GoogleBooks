import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


const BookshelfBody = ({ images }) => {
    return (
        <ImageList sx={{ width: 700, height: 650 }}>
            {images.map((imageData) => {
                return <>
                    <ImageListItem key={imageData._id}>
                        <img
                            src={`data:image/jpeg;base64,${imageBase64}`}
                            srcSet={`data:image/jpeg;base64,${imageBase64}`}
                            alt={imageData.name}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={
                                imageData.name.length > 20
                                    ? imageData.name.slice(0, 20) + "..."
                                    : imageData.name
                            }
                            subtitle={<span>Date Created: {new Date(`${imageData.createdAt}`).toDateString()}</span>}
                            position="below"
                        />
                    </ImageListItem>
                </>
            })}
        </ImageList>
    )
}

export default BookshelfBody;