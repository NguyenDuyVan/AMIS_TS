import mysql from 'mysql2/promise';


// create the connection to database
export const connection = mysql.createConnection({
  // host: process.env.MYSQL_HOST,
  // user: process.env.MYSQL_USER,
  // password: process.env.MYSQL_PASSWORD,
  // database: process.env.MYSQL_DATABASE,
  // port: 3306,

  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'db_amis',
  port: 3306,
});

