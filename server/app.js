const express = require("express"),
  cors = require("cors"),
/*   bodyParser = require("body-parser"),
  connection = require("./db"); */
  router = require("./api/routes/getPatents");

const PORT = process.env.PORT || 3060;
const app = express();

app.use(cors());


// support parsing of application/json type post data
app.use(express.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(express.urlencoded({ extended: true }));

app.use("/api/patents", router);

//start the server
app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}/`); 
});