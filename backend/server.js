const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8081;

app.use(bodyParser.json());
app.use(cors());
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '', 
    database: 'tileakila'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database: ' + err.stack);
        return;
    }
    console.log('Connected to database with thread ID: ' + db.threadId);
});

app.post('/addfeedback', (req, res) => {
    const { name, email, message } = req.body;
    console.log("test")
    if (!name || !email || !message) {
        return res.status(400).send('Name, email, and message are required');
    }
    const sql = "INSERT INTO feedback (name, email, message) VALUES (?, ?, ?)";
    db.query(sql, [name, email, message], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error saving data');
        } else {
            res.status(201).send('Feedback added successfully');
        }
    });
});

app.get('/feedbacks', (req, res) => {
  const sql = "SELECT * FROM feedback";
  db.query(sql, (err, result) => {
      if (err) {
          console.error(err);
          res.status(500).send('Error retrieving data from database');
      } else {
          res.json(result);
      }
  });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
