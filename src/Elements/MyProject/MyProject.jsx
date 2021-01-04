import React from "react";
import { useSelector } from "react-redux";
import "./MyProject.scss";
import { myProjectSelector } from "./../../Redux/Selectors/Selectors";

const MyProject = () => {
  const myProject = useSelector(myProjectSelector);
  return (
    <div className="projects">
      <h2>Project</h2>
      <ol className="projects__list">
        {myProject.map((item, idx) => (
          <li className="projects__list-item" key={`projects-item-${idx + 1}`}>
            <div className="projects__list-item-Container">
              <span className="link">
                <a href={item.url}>{item.title}</a>
              </span>
              <span className="languages">{item.languages}</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default MyProject;
