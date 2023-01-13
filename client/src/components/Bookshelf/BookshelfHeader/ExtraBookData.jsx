import React from "react";

const ExtraBookData = ({mostFreqAuthor, newestPub, oldestPub, responseTime, totalItems}) => {
    return (
      <div>    
        <p>Most Frequent Author: {mostFreqAuthor}</p>
        <p>Newest Publication: {newestPub}</p>
        <p>Oldest Publication: {oldestPub}</p>
        <p>Total Items: {totalItems}</p>
        <p>Response Time: {responseTime}</p>
      </div>
    );
  }
  
  export default ExtraBookData;