import React from "react";

export default () => {
  const adsUrl = `http://localhost:3000/ads/?r=${Math.floor(
    Math.random() * 1000
  )}`;
  return (
    <tr>
      <td>
        <img src={adsUrl} alt="ads" />
      </td>
    </tr>
  );
};
