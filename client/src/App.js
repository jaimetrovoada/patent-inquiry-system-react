import Form from "./components/Form";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import Table from "./components/Table";

function App() {
  const [data, setData] = useState(null);
  const [loadingData, setLoadingData] = useState();

  const clearTable = () => {
    setData(null);
  };

  // submit function outside of the component to set data to send to table
  const submit = (url, params) => {
    axios
      .get(url, params)
      .then(setLoadingData(true))
      .then((res) => {
        console.log(res);
        setData(res.data);
        setLoadingData(false);
        /* console.log(res.request.responseURL);
        window.history.pushState(
          "",
          "Patent Inquiry System",
          `/api/patents?id=${res.config.params.id}&title=${res.config.params.title}&inventor=${res.config.params.inventor}&company=${res.config.params.company}&dilldw_num=${res.config.params.dilld_num}`
        ); */
      });
  };

  const loadingAnimation = () => {
    return (
      <div className="cssload-loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  };

  const message =
    !data && !loadingData ? (
      ""
    ) : (!data && loadingData) || (data && loadingData) ? (
      loadingAnimation()
    ) : data && data.length === 0 ? (
      <p className="text-danger fw-bold fs-4">No Results Found</p>
    ) : (
      ""
    );

  return (
    <Router>
      <div className="App container my-4">
        <div className="row">
          <div className="col">
            <h1 className="mb-5 text-center h1">Patent Inquiry System</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Form
              method="GET"
              action="/api/patents"
              submit={submit}
              clear={clearTable}
              message={message}
              dataState={data}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
                {!data ? (
                  ""
                ) : data && data.length === 0 ? (
                  ""
                ) : (
                  <Table apiData={data} />
                )}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
