const mysql = require('mysql');
const express = require('express')
var app = express();
const bodyParser = require('body-parser');
const res = require('express/lib/response');
var urlParser = bodyParser.urlencoded({extended:false});
app.use(bodyParser.json());
var cors = require('cors')

app.use(cors())


var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'library_proj_db',
    multipleStatements: true,
    timezone: 'utc'  
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log("DB connected");
    else
        console.log("Unsuccessful" + JSON.stringify(err, undefined, 2));
});
const port = process.env.PORT || 3500;
app.listen(port, () => console.log('Running on port 3000'));


app.get("/", (req,res)=>{
    res.send("Connected");
});

app.get('/books', (req, res) => {
    mysqlConnection.query('SELECT * FROM BOOK', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        }
        else
            console.log(err);
    })
});


app.get('/books/:id', (req, res) => {
    mysqlConnection.query('SELECT * FROM BOOK WHERE Call_no = ?', [req.params.id], (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        }
        else
            console.log(err);
    })
});

app.get('/copy', (req, res) => {
    mysqlConnection.query('SELECT * FROM COPY', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        }
        else
            console.log(err);
    })
});


app.get('/copy/:bookId', (req, res) => {
    mysqlConnection.query('SELECT * FROM COPY WHERE book_id = ?', [req.params.bookId], (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        }
        else
            console.log(err);
    })
});


app.get('/copyDetails/:bookId', (req, res) => {
    mysqlConnection.query('SELECT * FROM COPY c, BOOK b WHERE c.Call_no = b.Call_no AND book_id = ?', [req.params.bookId], (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        }
        else
            console.log(err);
    })
});

app.get('/books/Branch/:branch/:excludeOutOfStock/:asc', (req, res) => {
    var query = 'SELECT * FROM BOOK WHERE Subject_branch = ? ';
    if(req.params.excludeOutOfStock==1)
    {
        query = query + 'AND Current_no_of_copies != 0';
        
        if(req.params.asc==1)
        {
            query = query + ' ORDER BY book_title ASC';
            mysqlConnection.query(query, [req.params.branch], (err, rows, fields) => {
                if (!err) {
                    res.send(rows);
                }
                else
                    console.log(err);
            })
        }

        else if(req.params.asc==0){
            query = query + ' ORDER BY book_title DESC';
            mysqlConnection.query(query, [req.params.branch], (err, rows, fields) => {
                if (!err) {
                    res.send(rows);
                }
                else
                    console.log(err);
            })
        }
    }
    else if(req.params.excludeOutOfStock==0){
        
        if(req.params.asc==1)
        {
            query = query + ' ORDER BY book_title ASC';
            mysqlConnection.query(query, [req.params.branch], (err, rows, fields) => {
                if (!err) {
                    res.send(rows);
                }
                else
                    console.log(err);
            })
        }

        else if(req.params.asc==0){
            query = query + ' ORDER BY book_title DESC';
            mysqlConnection.query(query, [req.params.branch], (err, rows, fields) => {
                if (!err) {
                    res.send(rows);
                }
                else
                    console.log(err);
            })
        }
    }
});



app.get('/students', (req, res) => {
    mysqlConnection.query('SELECT * FROM Student', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        }
        else
            console.log(err);
    })
});

app.get('/students/:usn', (req, res) => {
    mysqlConnection.query('SELECT * FROM Student WHERE USN =?',[req.params.usn] ,(err, rows, fields) => {
        if (!err) {
            res.send(rows);
        }
        else
            console.log(err);
    })
});

//Student USN and full name whose book return is due
app.get('/currentPending', (req, res) => {
    mysqlConnection.query('SELECT b.USN, s.First_name, s.Middle_init, s.Last_name, b1.book_title, b.book_id, s.Phone_no, b.Due_date FROM Borrow b, Student s, Book b1 WHERE s.USN=b.USN AND b.call_no=b1.call_no AND b.Return_date IS NULL', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        }
        else
            console.log(err);
    })
});

app.get('/currentPendingByUSN/:USN', (req, res) => {
    var USN = req.params.USN;
    mysqlConnection.query('SELECT b.USN, s.First_name, s.Middle_init, s.Last_name, b1.book_title, b.book_id, s.Phone_no, b.Due_date FROM Borrow b, Student s, Book b1 WHERE s.USN=b.USN AND b.call_no=b1.call_no AND b.Return_date IS NULL AND b.USN=?',[USN], (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        }
        else
            console.log(err);
    })
});

//searching a book by its title
app.get('/searchBookByTitle/:title', (req, res) => {
    var title = req.params.title;
    title = title + '%';
    mysqlConnection.query("SELECT * FROM BOOK WHERE Book_title LIKE  ? ", [title], (err, rows, fields) => {
        if (!err) {

            res.send(rows);
        }
        else
            console.log(err);
    })
});

//searching pending books of a student by his usn
app.get('/booksPendingByUSN/:USN', (req,res)=>{
    mysqlConnection.query('SELECT b.USN, s.First_name, s.Middle_init, s.Last_name, b.call_no, b.book_id, b1.book_title, b.issue_date, b.Due_date FROM BORROW b, BOOK b1, STUDENT s WHERE b.call_no=b1.call_no AND s.USN=b.USN AND b.Return_date IS NULL AND b.USN = ? ', [req.params.USN],(err,rows,fields)=>{
        if (!err) {
            res.send(rows);
        }
        else
            console.log(err);
    })
});


app.get('/booksPendingByBookId/:bookID', (req,res)=>{
    mysqlConnection.query('SELECT b.USN, s.First_name, s.Middle_init, s.Last_name, b.call_no, b.book_id, b1.book_title FROM BORROW b, BOOK b1, STUDENT s WHERE b.call_no=b1.call_no AND s.USN=b.USN AND b.Return_date IS NULL AND b.book_id = ? ', [req.params.bookID],(err,rows,fields)=>{
        if (!err) {
            res.send(rows);
        }
        else
            console.log(err);
    })
});

//out of stock books
app.get('/outOfStockBooks', (req,res)=>{
    mysqlConnection.query('SELECT * FROM BOOK WHERE Current_no_of_copies = 0',(err,rows,fields)=>{
        if (!err) {
            res.send(rows);
        }
        else
            console.log(err);
    })
});


app.post('/books', (req, res) => {
    var Call_no = req.body.Call_no;
    var Book_title = req.body.Book_title;
    var Subject_branch = req.body.Subject_branch;
    var Publisher = req.body.Publisher;
    var Volume = req.body.Volume;
    var Edition = req.body.Edition;
    var Language = req.body.Language;
    var Published_year = req.body.Published_year;
    var Sub_title = req.body.Sub_title;
    var Location = req.body.Location;
    var Total_no_of_copies = req.body.Total_no_of_copies;
    var Current_no_of_copies = req.body.Current_no_of_copies;

    var sql = 'INSERT INTO BOOK (Call_no, Book_title, Subject_branch, Publisher, Volume, Edition, Language, Published_year, Sub_title, Location, Total_no_of_copies, Current_no_of_copies) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    mysqlConnection.query(sql,[Call_no, Book_title, Subject_branch, Publisher, Volume, Edition, Language, Published_year, Sub_title, Location, Total_no_of_copies, Current_no_of_copies], (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        }
        else
            console.log(err);
    })
});



app.post('/copy', (req, res) => {
    var Call_no = req.body.Call_no;
    var Book_id = req.body.Book_id;
    var Binding = req.body.Binding;
    var Vendor = req.body.Vendor;
    var Bill_no = req.body.Bill_no;
    var Cost = req.body.Cost;
    var Status = req.body.Status;
    var Bill_date = req.body.Bill_date;
    var Pages = req.body.Pages;

    var query = 'INSERT INTO COPY (Call_no, Book_id, Binding, Vendor, Bill_no, Cost, Status, Bill_date, Pages) VALUES (?,?, ?, ?, ?, ?, ?, ?, ?)';


    mysqlConnection.query(query,[Call_no, Book_id, Binding, Vendor, Bill_no, Cost, Status, Bill_date, Pages], (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        }
        else
            console.log(err);
    })
});


app.post('/borrow', (req, res) => {
    var Call_no = req.body.Call_no;
    var Book_id = req.body.Book_id;
    var USN = req.body.USN;
    var Issue_date = req.body.Issue_date;
    var Due_date = req.body.Due_date;
    var Return_date = req.body.Return_date;
    var Penalty = req.body.Penalty;

    var query = 'INSERT INTO BORROW (Book_id, Call_no, USN, Issue_date, Due_date, Return_date, Penalty) VALUES (?, ?, ?, ?, ?, ?, ?)';

    mysqlConnection.query(query ,[Book_id, Call_no, USN, Issue_date, Due_date, Return_date, Penalty], (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        }
        else
            console.log(err);
    })

});

app.post('/authors', (req, res) => {
    var Call_no = req.body.Call_no;
    var Author_name = req.body.Author_name;

    var query = 'INSERT INTO Book_Authors (Call_no, Author_name) VALUES (?,?)';

    mysqlConnection.query(query ,[Call_no, Author_name], (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        }
        else
            console.log(err);
    })

});


app.post('/borrowBook',(req,res) => {
    var now = new Date()
    var issue_date =now.toISOString().slice(0,10);
    var Book_id = req.body.Book_id;
    var Call_no = req.body.Call_no;
    var USN = req.body.USN;
    var due_date = new Date()
    due_date.setDate(now.getDate()+14); 
    var query = 'INSERT INTO Borrow (Book_id, Call_no, USN, Issue_date, Due_date) VALUES (?,?,?,?,?)';

    mysqlConnection.query(query, [Book_id, Call_no, USN, issue_date, due_date],(err, rows, fields) => {
        if (!err) {
            res.send(rows);
        }
        else
            console.log(err);
    })                      
})



app.put('/returnBook',(req,res) => {
    var now = new Date()
    now = now.toISOString().slice(0,10);
    var Book_id = req.body.Book_id;
    var Call_no = req.body.Call_no;
    var USN = req.body.USN;
    var query = 'UPDATE Borrow SET Return_date = ? WHERE Book_id = ? AND Call_no = ? AND USN = ?';

    mysqlConnection.query(query, [now, Book_id, Call_no, USN],(err, rows, fields) => {
        if (!err) {
            res.send(rows);
        }
        else
            console.log(err);
    })                      
})

app.delete('/delete/:Book_id',(req,res) => {
    var query = 'DELETE FROM COPY WHERE Book_id = ?';

    mysqlConnection.query(query, [req.params.Book_id],(err, rows, fields) => {
        if (!err) {
            res.send(rows);
        }
        else
            console.log(err);
    })                      
} )