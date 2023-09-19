const mysql = require("mysql2/promise");
const axios = require('axios');

const pool = mysql.createPool({
  host: process.env.SQL_HOST,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE,
});

// fetch data from api and load data to database
async function fetchData() { 
  try {
    const url = "https://api.wazirx.com/api/v2/tickers";
  const response = await axios.get(url);
  const data = response.data;

  await pool.execute("DELETE FROM data") // Delete old data from database

  for (const [key, value] of Object.entries(data).slice(0, 10)) {
        const name = value.name;
        const last = value.last;
        const buy = value.buy;
        const sell = value.sell;
        const base_unit = (value.base_unit).toUpperCase();
        const volume = value.volume
      await pool.execute("INSERT INTO data(name, last_traded_price, buy, sell, base_unit, volume) values( ?, ?, ?, ?, ?, ?)", [name, last, buy, sell, base_unit, volume]) // Load fresh data to database
  }
  } catch (error) {
    console.log(error)
  }
}

async function storedData(){
  try {
    const [ data ] = await pool.execute("SELECT * FROM data")
    return data;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  fetchData,
  storedData,
}
