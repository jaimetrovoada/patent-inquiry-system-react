import Form from "./components/Form";
import React, { useState } from "react";
import axios from "axios";
import Table from "./components/Table";

function App() {
  const [data, setData] = useState(null);
  const [loadingData, setLoadingData] = useState();

  const reset = () => {
    setData(null);
  };

  // submit function outside of the component to set data to send to table
  const submit = (url, params) => {
    axios
      .get(url, params)
      .then(setLoadingData(true))
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setLoadingData(false);
      });
  };

  const loadingAnimation = () => {
    return (
      <div class="cssload-loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  };

  return (
    <div className="App container my-4">
      <div className="row">
        <div className="col">
          <Form
            method="GET"
            action="/api/patents"
            submit={submit}
            reset={reset}
          />
          {/* route for searching the
          patents 
          GET method because we are retrieving data from the server */}
        </div>
      </div>
      <div className="row">
        <div className="col">
          {/* <Table data={data} /> */}
          {/* {() => {
            if (!data) {
              return <p>NO QUERY DONE</p>;
            }
          }} */}
          {/* {loadingData ? <p>Loading Please wait...</p> : <Table data={data} />} */}
          {!data && !loadingData ? (
            <p>Please Perform a Search</p>
          ) : !data && loadingData ? (
            loadingAnimation()
          ) : data && data.length === 0 ? (
            <p>No Results Found</p>
          ) : (
            <Table apiData={data} />
          )}
        </div>
      </div>

      {/* <Table
        patentNumber={patentID}
        inventionName={inventionName}
        inventor={inventor}
        company={company}
        dillwNum={dillnum}
      /> */}
      {/* {data && data.length > 0 && data.map((patents) => (
        <Table
          patentNumber={patents.id}
          inventionName={patents.title}
          inventor={patents.inventor}
          company={patents.company}
          dillwNum={patents.dilldw_num}
        />
      ))} */}

      {/* {data && data.length > 0 && data.map((patents) => <p>{patents.id}</p>)} */}
    </div>
  );
}

export default App;
