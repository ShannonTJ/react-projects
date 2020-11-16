import React from "react";

const JobTab = ({ jobs, value, setValue }) => {
  return (
    <div className="btn-container">
      {jobs.map((item, index) => {
        return (
          <button
            key={item.id}
            className={`job-btn ${index === value && "active-btn"}`}
            onClick={() => setValue(index)}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
};

export default JobTab;
