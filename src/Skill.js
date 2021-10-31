import React from "react";
const Skill = ({ techno, language }) => {
  return (
    <div className="skill">
      <img src={techno} alt="technology" className="skill-img" />
      <p className="skill-lang">{language}</p>
    </div>
  );
};
export default Skill;
