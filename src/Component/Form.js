import React from "react";

const Form = (props) => {
  return (
    <div className="container my-3">
      <div>
        <form className="col-sm-10">
          <input className="form-control sm-2" type="text" readonly />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
