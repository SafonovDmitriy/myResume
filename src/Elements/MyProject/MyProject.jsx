import React from "react";
import { connect } from "react-redux";
import "./MyProject.scss";
const MyProject = (props) => {
  return (
    props.myProject !== undefined && (
      <div className="projects">
        <h2>Project</h2>
        <ol className="projects__list">
          {props.myProject.map((item, idx) => {
            return (
              <li
                className="projects__list-item"
                key={`projects-item-${idx + 1}`}
              >
                <div className="projects__list-item-Container">
                  <span className="link">
                    <a href={item.url}>{item.title}</a>
                  </span>
                  <span className="languages">{item.languages}</span>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    )
  );
};
const mapStateToProps = (state) => {
  const mainInfo = state.mainInfo;

  return {
    myProject: mainInfo.myProject,
  };
};
export default connect(mapStateToProps)(MyProject);
