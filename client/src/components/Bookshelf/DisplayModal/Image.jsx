import React, {useState, useEffect}from 'react';

const Image = ({ imageData }) => {
    let [image, setImage] = useState();

    return (
        <div>
            {
               // imageBase64 ? <img src={`data:image/jpeg;base64,${imageBase64}`} alt={`${imageData.name}`} width="500" height="600"></img> : null
            }

        </div>
    )
}

export default Image;