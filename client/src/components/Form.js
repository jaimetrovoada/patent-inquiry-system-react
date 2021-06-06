import PropTypes from "prop-types";
import Button from "./Button";
import React, { useState } from "react";
import { getData } from "../functions/getData";
import { Link } from "react-router-dom";

const Form = ({ method, action, submit, clear, message, dataState }) => {
  // set initial state
  const [patentNum, setPatentNum] = useState("");
  const [invName, setInvName] = useState("");
  const [inventor, setInventor] = useState("");
  const [company, setCompany] = useState("");
  const [dillwNum, setDillwNum] = useState("");

  //handle input
  const handlePatentNumChange = (event) => {
    console.log(event.target.value);
    setPatentNum(event.target.value);
  };
  const handleInvNameChange = (event) => {
    console.log(event.target.value);
    setInvName(event.target.value);
  };
  const handleInventorChange = (event) => {
    console.log(event.target.value);
    setInventor(event.target.value);
  };
  const handleCompanyChange = (event) => {
    console.log(event.target.value);
    setCompany(event.target.value);
  };
  const handleDillwNumChange = (event) => {
    console.log(event.target.value);
    setDillwNum(event.target.value);
  };

  //handle submit
  const onSubmit = (e) => {
    e.preventDefault();
    submit(`http://localhost:3060/api/patents`, {
      params: {
        id: patentNum,
        title: invName,
        inventor: inventor,
        company: company,
        dilldw_num: dillwNum,
      },
    });
  };

  const submitText =
    !patentNum && !invName && !inventor && !company && !dillwNum
      ? "Search All"
      : "Search";

  const clearInput = () => {
    clear();
    document.getElementById("form").reset();
    setInvName("");
    setCompany("");
    setDillwNum("");
    setInventor("");
    setPatentNum("");
  };

  return (
    <form
      className="form-container mb-3"
      method={method}
      action={action}
      onSubmit={onSubmit}
      id="form"
      autoComplete="off"
    >
      <div className="container p-4">
        <div className="input-fields row row-cols-1 row-cols-md-3 mb-4 fw-bold fs-4">
          <div className="col mb-3">
            <label htmlFor="patentNumber:" className="form-label">
              Patent Number:
            </label>
            <input
              type="text"
              className="form-control"
              id="patentNumber:"
              onChange={handlePatentNumChange}
              placeholder="Please write the patent number"
            />
          </div>
          <div className="col mb-3">
            <label htmlFor="inventionName" className="form-label">
              Title:
            </label>
            <input
              type="text"
              className="form-control"
              id="inventionName"
              onChange={handleInvNameChange}
              placeholder="Please write the invention name"
            />
          </div>
          <div className="col mb-3">
            <label htmlFor="inventor" className="form-label">
              Inventor:
            </label>
            <input
              type="text"
              className="form-control"
              id="inventor"
              onChange={handleInventorChange}
              placeholder="Please write the inventors name"
            />
          </div>
          <div className="col mb-3">
            <label htmlFor="company" className="form-label">
              Company:
            </label>
            <input
              type="text"
              className="form-control"
              id="company"
              onChange={handleCompanyChange}
              placeholder="Please write the company name"
            />
          </div>
          <div className="col mb-3">
            <label htmlFor="dillwNum" className="form-label">
              dilldw-num:
            </label>
            <input
              type="text"
              className="form-control"
              id="dillwNum"
              onChange={handleDillwNumChange}
              placeholder="Please write the dillw-num"
            />
          </div>
        </div>
        {/* end of input row */}
        <div className="row row-cols-auto justify-content-center mb-4">
          <div className="col">
            <Button text={submitText} btnType="submit" />
          </div>
          {!dataState ? (
            ""
          ) : (
            <div className="col">
              <Button
                text="Clear Table"
                classes="btn-secondary hide"
                btnType="button"
                clickAction={clearInput}
              />
            </div>
          )}
        </div>
        {/* end of btn row */}
        <div className="row row-cols-auto justify-content-center mb-4">
          <div className="col">{message}</div>
        </div>
        {/* end of message row */}
      </div>
      {/* end of container */}
    </form>
  );
};

Form.propTypes = {
  method: PropTypes.string,
  action: PropTypes.string,
};

export default Form;
export const resData = async () => {
  getData();
};
