const express = require('express');
const app = express();
const port = 3000;

const { Library } = require('./library');
const cmiLibrary = new Library()

// Home Page
app.get('/', (req, res) => {
  res.send({
    message: 'Library API is App and Running'
  })
});

// /get-all-books
app.get('/get-all-books', (req, res) => {
  cmiLibrary.getAllBooks(booksconan => {
      return res.send({
          status: 'success',
          data: booksconan
      });
  })
});

// /get-book
app.get('/get-books', (req, res) => {
    cmiLibrary.getBooks(booksconan => {
        return res.send({
            status: 'success',
            data: booksconan
        });
    })
  });

// /add-book
app.get('/add-books', (req, res) => {
  cmiLibrary.addBooks(booksconan => {
      return res.send({
          status: 'success',
          data: booksconan
      });
  })
});

// @TODO: /update-book
app.get('/update-books', (req, res) => {
  cmiLibrary.UPDATEBooks(booksconan => {
      return res.send({
          status: 'success',
          data: booksconan
      });
  })
});
//    REQUEST METHOD: POST
//    DATA REQUIRED: title
//    AND ONE OF THE FF: author, volume, publisher, year

// @TODO: /delete-book
//    REQUEST METHOD: DELETE
//    DATA REQUIRED: title

// App Listen
app.listen(port, () => {
  console.log(`API is App and Running at https://localhost:${port}`);
});