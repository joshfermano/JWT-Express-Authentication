import mysql from 'mysql2';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'samplereg',
});

pool.getConnection((err, connection) => {
  if (err) {
    console.log('Error connecting to database');
  }
  if (connection) {
    connection.release();
    console.log('Database connected');
  }
  return;
});

export default pool;
