import React from "react";
import Works from "./Works";
import Sleep from "./images/sleep-tracker.png";
import Book from "./images/Book-store.png";
import Budget from "./images/Budget.png";
import Editor from "./images/Code-editor.png";
const Work = () => {
  return (
    <div className="work" id="work-page">
      <h2 className="heading">My Work </h2>
      {/* <div className="work-list"> */}
      <Works
        tag={Sleep}
        heading="Sleep Tracker"
        description="This is a sleep tracker which helps to sleep your track and helps you to maintain your sleep pattern."
        technology="React, React-Router, Firebase, CSS, HTML"
        path="https://github.com/akansha1234/Sleep_Tracker"
        demo="https://csb-v1vmp.netlify.app/"
      />
      <Works
        tag={Book}
        heading="Book-Store"
        description="You can find any book here just by entering any keyword related to that book"
        technology="React, Google Api, Firebase, CSS, HTML"
        path="https://github.com/akansha1234/Book-store"
        demo="https://csb-9ylbx.netlify.app/"
      />
      <Works
        tag={Budget}
        heading="Budget-Tracker"
        description="You can track your budget here."
        technology="Javascript, CSS, HTML"
        path="https://github.com/akansha1234/BudgetTracker"
        demo="https://zo8yw.csb.app/"
      />
      <Works
        tag={Editor}
        heading="Code-editor"
        description="It is a code-editor just like Code-pen."
        technology="React, React-Codemirror, CSS, HTML"
        path="https://github.com/akansha1234/Code-editor"
        demo="https://csb-fzc5s.netlify.app/"
      />
      {/* </div> */}
    </div>
  );
};
export default Work;
