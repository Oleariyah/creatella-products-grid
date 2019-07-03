import React from "react";

export default props => {
  return (
    <div className=" col-xs-12 col-lg-12 pt-3 pb-3 pl-0">
      <select
        name=""
        onChange={e => props.handleChange(e)}
        className="p-2 btn btn-primary dropdown-toggle"
        defaultValue=""
      >
        <option disabled value="">
          Sort By
        </option>
        <option value="id">Id</option>
        <option value="price">Price</option>
        <option value="size">Size</option>
      </select>
    </div>
  );
};
