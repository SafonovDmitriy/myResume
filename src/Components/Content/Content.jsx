import React from "react";
import "./Content.scss";
import { connect } from "react-redux";
import MyInfo from "./../../Elements/MyInfo/MyInfo";
import MyProject from "./../../Elements/MyProject/MyProject";
import InfoList from "./../../Elements/InfoList/InfoList";
const Content = (props) => {
  return (
    <div className="content">
      <MyInfo />
      <MyProject />
      <InfoList experience={props.workExperience} title="Work Experience" />
      <InfoList experience={props.education} title="Education" />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    workExperience: state.workExperience,
    education: state.education,
  };
};
export default connect(mapStateToProps)(Content);
