import React from "react";

export const Title = ({ text }) => {
  return (
    <div className="title">
      <h2>
        <span>/</span>
        {text}
      </h2>
    </div>
  );
};

export default Title;
