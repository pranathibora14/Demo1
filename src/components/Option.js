import React, { Component } from "react";
const Option = (props) => {
  return (
    <div>
      {props.opdata}
      <button
        onClick={(e) => {
          props.hdo(props.opdata);
        }}
      >
        delete
      </button>
    </div>
  );
};
export default Option;
