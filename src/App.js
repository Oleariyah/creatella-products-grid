import React, { Component, Fragment } from "react";
import SortBar from "./components/SortBar";
import TableHead from "./components/TableHead";
import TableBody from "./components/TableBody";
import "./style/App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <SortBar />
        <table className="table">
          <TableHead />
          <TableBody />
        </table>
      </Fragment>
    );
  }
}

export default App;
