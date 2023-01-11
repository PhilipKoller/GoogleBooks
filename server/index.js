const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const path = require('path');

app.use(cors());
// Serve static files
app.use(express.static(path.join(__dirname, '../client/dist')));  
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 



app.get('/book:name', (req, res) => {
    // TODO: get req w/ pagination to BOOKSAPI
});



app.listen(process.env.PORT, () => {
    console.log(`server running at http://localhost:${process.env.PORT}`)
});