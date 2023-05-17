import React from "react";
import Experience from "./Experience";
const About = () => {
  return (
    <div className="about" id="about-page">
      <h2 className="heading">About me</h2>
      <main className="abt">
        <div className="content">
          <p> My name is Akansha Goel. I am a front-end developer.</p>
          <p> I love to make interactive,cool and responsive websites </p>
          <p> Currently, I'm working in Birlasoft</p>
        </div>
        <div className="education">
          <h3> Education</h3>
          <p>
            I have completed my B.tech from JSS Academy of Technical Education,
            Noida{" "}
          </p>
        </div>
        <div className="experience">
          <h3> Experience</h3>
          <Experience
            position="Front-end Development Intern"
            company="4c Plus"
            month="Jun 2019 - Aug 2019"
          />
          <Experience
            position="Front-end Development Intern"
            company="Ezyschooling"
            month="Sep 2020 - Nov 2020"
          />
          <Experience
            position="Work as a Freelancer"
            company="N/A"
            month="Nov 2020 - Dec 2020"
          />
        </div>
      </main>
    </div>
  );
};
export default About;
