import React from "react";
import ReactLoading from "react-loading";

const style = {
  type: "bars",
  color: "black"
};
export default () => {
  return (
    <ReactLoading
      type={style.type}
      color={style.color}
      height={100}
      width={100}
    />
  );
};
