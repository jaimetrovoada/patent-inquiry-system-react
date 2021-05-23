import PropTypes from "prop-types";
import Button from "./Button";
import React, { useState } from "react";
import { getData } from "../functions/getData";

const Form = ({ method, action, submit, reset }) => {
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

  const resetInputs = () => {
    reset();
    setCompany("");
    setDillwNum("");
    setInvName("");
    setInventor("");
    setPatentNum("");
  };

  return (
    <form
      className="form-container"
      method={method}
      action={action}
      onSubmit={onSubmit}
    >
      <div className="container">
        <div className="input-fields row row-cols-1 row-cols-md-3">
          <div className="mb-3 col">
            <label htmlFor="patentNumber:" className="form-label">
              中请号/专利号:
            </label>
            <input
              type="text"
              className="form-control"
              id="patentNumber:"
              onChange={handlePatentNumChange}
            />
          </div>
          <div className="mb-3 col">
            <label htmlFor="inventionName" className="form-label">
              发明名称
            </label>
            <input
              type="text"
              className="form-control"
              id="inventionName"
              onChange={handleInvNameChange}
            />
          </div>
          <div className="mb-3 col">
            <label htmlFor="inventor" className="form-label">
              发明家
            </label>
            <input
              type="text"
              className="form-control"
              id="inventor"
              onChange={handleInventorChange}
            />
          </div>
          <div className="mb-3 col">
            <label htmlFor="company" className="form-label">
              公司
            </label>
            <input
              type="text"
              className="form-control"
              id="company"
              onChange={handleCompanyChange}
            />
          </div>
          <div className="mb-3 col">
            <label htmlFor="dillwNum" className="form-label">
              dillw-num
            </label>
            <input
              type="text"
              className="form-control"
              id="dillwNum"
              onChange={handleDillwNumChange}
            />
          </div>
        </div>{" "}
        {/* end of input row */}
        <div className="row row-cols-auto justify-content-center">
          <div className="col">
            <Button text="search" btnType="submit" />
          </div>
          <div className="col">
            <Button
              text="reset"
              classes="btn-secondary"
              btnType="button"
              clickAction={resetInputs}
            />
          </div>
        </div>{" "}
        {/* end of btn row 2 */}
      </div>
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
