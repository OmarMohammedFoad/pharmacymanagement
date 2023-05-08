import mysql from "mysql"
const pool = mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"Omarfouad123",
  database:`pharmacyms`,

}
)





export default pool;

  




