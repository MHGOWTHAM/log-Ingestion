// const express = require('express');
// const mysql = require('mysql2');
// const cors = require('cors'); // Add this line

// const app = express();
// const port = 3000;

// app.use(cors()); // Add this line
// app.use(express.json());

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'rootpassword',
//   database: 'log',
//   authPlugins: {
//     mysql_clear_password: () => () => Buffer.from('rootpassword')
//   }
// });

// db.connect(err => {
//   if (err) {
//     console.error('Database connection error:', err);
//   } else {
//     console.log('Connected to MySQL database');
//   }
// });



// app.get('/logs', (req, res) => {
//     const { startDate, endDate, level } = req.query;
  
//     // Construct the SQL query based on search parameters
//     let sql = 'SELECT * FROM logs WHERE 1';
  
    
  
//     if (startDate) {
//       sql += ` AND timestamp >= '${startDate}'`;
//     }
  
//     if (endDate) {
//       sql += ` AND timestamp <= '${endDate}'`;
//     }
  
//     if (level) {
//         sql += ` AND message LIKE '%${level}%'`;
//       }
//     // Retrieve logs based on the constructed SQL query
//     db.query(sql, (err, results) => {
//       if (err) {
//         console.error('Error querying database:', err);
//         res.status(500).json({ error: 'Internal Server Error' });
//       } else {
//         res.json(results);
//       }
//     });
//   });
  

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootpassword',
  database: 'log',
  authPlugins: {
    mysql_clear_password: () => () => Buffer.from('rootpassword'),
  },
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.get('/logs', (req, res) => {
  const { startTimestamp, endTimestamp, level } = req.query;

  // Construct the SQL query based on search parameters
  let sql = 'SELECT * FROM logs WHERE 1';

  if (startTimestamp) {
    sql += ` AND timestamp >= '${startTimestamp}'`;
  }

  if (endTimestamp) {
    sql += ` AND timestamp <= '${endTimestamp}'`;
  }

  if (level) {
    sql += ` AND level = '${level}'`;
  }

  // Retrieve logs based on the constructed SQL query
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
