const express = require("express"),
  router = express.Router(),
  dbConnection = require("../../db");
const app = express();

// support parsing of application/json type post data
app.use(express.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(express.urlencoded({ extended: true }));
// ROUTES
// GET patents router
// all patents **provisory**
router.get("/", (req, res) => {
  console.log(req.query);

  const myQuery = req.query;
  function buildConditions(params) {
    var conditions = [];
    var values = [];
    var conditionsStr;

    if (params.id !== "") {
      conditions.push("id LIKE ?");
      values.push(`%${params.id}%`);
    }

    if (params.title !== "") {
      conditions.push("title LIKE ?");
      values.push(`%${params.title}%`);
    }
    if (params.company !== "") {
      conditions.push("company LIKE ?");
      values.push(`%${params.company}%`);
    }
    if (params.inventor !== "") {
      conditions.push("inventor LIKE ?");
      values.push(`%${params.inventor}%`);
    }
    if (params.dilldw_num !== "") {
      conditions.push("dilldw_num LIKE ?");
      values.push(`%${params.dilldw_num}%`);
    }

    return {
      where: conditions.length ? conditions.join(" AND ") : "1",
      values: values,
    };
  }

  //sql statement
  const conditions = buildConditions(myQuery);
  console.log(conditions);
  const sqlSelect = `SELECT * FROM newpatent WHERE ${conditions.where}`;

  // route for searching the patents
  // GET method because we are retrieving data from the server


  // perform query
  // using promise
  dbConnection
    .promise()
    .query(sqlSelect, conditions.values)
    .then(([rows, fields]) => {
      console.log(rows);
      res.send(rows);
    })
    .catch(console.log);
  /* .then(() => connection.end()); */
});

module.exports = router;
