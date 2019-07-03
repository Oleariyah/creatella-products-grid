import React, { useState, Fragment } from "react";
import SortBar from "./components/SortBar";
import TableHead from "./components/TableHead";
import TableBody from "./components/TableBody";
import "./style/App.css";

export default () => {
  const [selected, setselect] = useState("");
  const handleChange = e => {
    setselect(e.target.value);
  };
  return (
    <Fragment>
      <SortBar handleChange={handleChange} />
      <table className="table">
        <TableHead />
        <TableBody selected={selected} />
      </table>
    </Fragment>
  );
};
