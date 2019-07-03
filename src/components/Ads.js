import React from "react";

export default () => {
  const adsUrl = `/ads/?r=${Math.floor(Math.random() * 1000)}`;
  return (
    <tr>
      <td>
        <img src={adsUrl} alt="ads" />
      </td>
    </tr>
  );
};
