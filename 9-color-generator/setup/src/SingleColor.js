import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hex, lightText, darkText }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hexValue = `#${hex}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  let textColor = lightText;
  if (index < 10) {
    textColor = darkText;
  }

  return (
    <article
      className="color"
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value" style={{ color: `${textColor}` }}>
        {weight}%
      </p>
      <p className="color-value" style={{ color: `${textColor}` }}>
        {hexValue}
      </p>

      {alert ? (
        <p className="alert" style={{ color: `${textColor}` }}>
          Copied to clipboard
        </p>
      ) : null}
    </article>
  );
};

export default SingleColor;
