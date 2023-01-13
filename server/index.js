const express = require('express');
const cors = require('cors');
const moment = require('moment')
const { performance } = require("perf_hooks");
require('dotenv').config();

const app = express();
const path = require('path');
const { default: axios } = require('axios');

app.use(cors());
// Serve static files
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const filterData = (data) => {
    let obj = {
        "totalItems": data.totalItems,
        "items": []
    };
    data.items.map((book, index) => {
        book = book.volumeInfo
        obj.items.push({
            "id": index,
            "title": book.title,
            "authors": book.authors,
            "description": book.description,
            "publishedDate": book.publishedDate,
            "imageLinks": book.imageLinks
        });
    });

    obj["mostFreqAuthor"] = findMostFrequentAuthor(obj.items);
    let dates = oldestAndNewest(obj.items);
    obj["oldestPub"] = dates[0];
    obj["newestPub"] = dates[1];
    return obj;
}

const findMostFrequentAuthor = (books) => {
    let authorCount = {};

    for (let i = 0; i < books.length; i++) {
        if (books[i].authors) {
            for (let j = 0; j < books[i].authors.length; j++) {
                let author = books[i].authors[j];
                if (!authorCount[author]) {
                    authorCount[author] = 1;
                } else {
                    authorCount[author]++;
                }
            }
        }
    }

    let mostFrequentAuthor = Object.keys(authorCount)[0];
    for (let author in authorCount) {
        if (authorCount[author] > authorCount[mostFrequentAuthor]) {
            mostFrequentAuthor = author;
        }
    }

    // Return the "mostFrequentAuthor" variable as the author who appears most in the array of books
    return mostFrequentAuthor;
}

const oldestAndNewest = (arr) => {
    let oldest = moment(arr[0].publishedDate);
    let newest = moment(arr[0].publishedDate);
    arr.forEach(item => {
        let date = moment(item.publishedDate);
        if (date < oldest) {
            oldest = date;
        }
        if (date > newest) {
            newest = date;
        }
    });

    return [oldest.format("YYYY-MM-DD"), newest.format("YYYY-MM-DD")]

}


app.get('/book:title', (req, res) => {
    const start = performance.now();
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.title}&startIndex=0&maxResults=10&key=${process.env.API_KEY}`)
        .then((response) => {
            const end = performance.now();
            const duration = (end - start).toFixed(2);
            const filtered = filterData(response.data);
            filtered["responseTime"] = duration;
            res.send(filtered);
        })

});



app.listen(process.env.PORT, () => {
    console.log(`server running at http://localhost:${process.env.PORT}`)
});
