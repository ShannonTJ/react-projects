import React from "react";

const Title = ({ text }) => {
  return (
    <div className="title">
      <h2>{text}</h2>
      <div className="underline"></div>
    </div>
  );
};

export default Title;
