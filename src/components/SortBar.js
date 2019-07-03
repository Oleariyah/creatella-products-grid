import React from "react";

export default () => {
  return (
    <div className=" col-xs-12 col-lg-12 pt-3 pb-3 pl-0">
      <div className="dropdown open">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          id="triggerId"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Sort By
        </button>
        <div className="dropdown-menu" aria-labelledby="triggerId">
          <a className="dropdown-item" href="#">
            Action
          </a>
          <a className="dropdown-item" href="#">
            Disabled action
          </a>
        </div>
      </div>
    </div>
  );
};
