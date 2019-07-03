import React from "react";

export default props => {
  const { id, face, size, price, date } = props.product;

  const centToDollar = val => `$${(val / 100).toFixed(2)}`;
  const formatDate = val => {
    const today = new Date();
    const productDate = new Date(val);

    // check month
    if (today.getMonth() === productDate.getMonth()) {
      const dateDiff = today.getDate() - productDate.getDate();
      // if less than a week
      if (dateDiff < 7 && dateDiff !== 1) {
        return `${dateDiff} days ago`;
      } else if (dateDiff === 1) {
        return `${dateDiff} day ago`;
      }
    }
    return productDate.toDateString();
  };

  return (
    <tr>
      <td>{face}</td>
      <td>{size}</td>
      <td>{centToDollar(price)}</td>
      <td>{id}</td>
      <td>{formatDate(date)}</td>
    </tr>
  );
};
