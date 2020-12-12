const mysql = require('mysql');

class Library {
  constructor() {
    this.connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : '',
      database : 'books-conan'
    });
    
    this.connection.connect();
  }

  getAllBooks(iterator) {
    if (typeof iterator !== 'function')
      throw new Error("Invalid iterator");

    this.connection.query("SELECT * FROM booksconan", (error, results, fields) => {
      if (error) throw error;
    
      iterator(results)
    });
  }

  getBooks(iterator) {
    if (typeof iterator !== 'function')
      throw new Error("Invalid iterator");

    this.connection.query("SELECT title FROM booksconan", (error, results, fields) => {
      if (error) throw error;
    
      iterator(results)
    });
  }


  addBooks(iterator) {
    if (typeof iterator !== 'function')
      throw new Error("Invalid iterator");

    this.connection.query("INSERT INTO booksconan (title, author, volume, publisher, year) VALUES ('CASE CLOSED1','Gosho Aoyama1','41','Shogakukan1','20051');",(error, results, fields) => {
      if (error) throw error;
    
      iterator(results)
    });
  }


  UPDATEBooks(iterator) {
    if (typeof iterator !== 'function')
      throw new Error("Invalid iterator");

    this.connection.query(" UPDATE booksconan SET title =case close, author = GOSHO AOYAMA , volume = 5, publisher = SHOGAKUKAN, year = 2007 WHERE title = CASE CLOSED;",(error, results, fields) => {
     
      if (error) throw error;
    
      iterator(results)
    });
  }

  close() {
    this.connection.end()
  }
}

module.exports =  {
  Library
}