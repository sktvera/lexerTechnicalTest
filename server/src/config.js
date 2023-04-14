module.exports = {
  db: {
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "12700",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || '1234',
    database: process.env.DB_DATABASE || "taskdb",
  },
};

/* in this case we will use the operator or as a test in the validation of the credentials */
/* The ideal would always be to use the .env file for the security of this sensitive data */

/* 
.env file

DB_USER = Postgres
DB_PASSWORD = 12700
DB_HOST = localhost
DB_PORT = 1234
DB_DATABASE = taskdb 
*/