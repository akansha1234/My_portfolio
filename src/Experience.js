import React from "react";
const Experience = ({ position, company, month }) => {
  return (
    <div className="experience-list">
      <p className="position">
        <b>{position}</b>
      </p>
      <p>Company : {company}</p>
      <p>{month}</p>
    </div>
  );
};
export default Experience;
