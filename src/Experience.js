import React from "react";
const Experience = ({ position, company, month }) => {
  return (
    <div className="experience-list">
      <p>{position}</p>
      <p>Company : {company}</p>
      <p>{month}</p>
    </div>
  );
};
export default Experience;
