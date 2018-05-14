import {createConnection} from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "User_Envios",
  password: "root123"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to database!");
});

export default connection;
