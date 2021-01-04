import React from "react";
import "./Content.scss";
import { useSelector } from "react-redux";
import MyInfo from "./../../Elements/MyInfo/MyInfo";
import MyProject from "./../../Elements/MyProject/MyProject";
import InfoList from "./../../Elements/InfoList/InfoList";
import {
  workEducationSelector,
  workExperienceSelector,
} from "../../Redux/Selectors/Selectors";

const Content = () => {
  const workExperience = useSelector(workExperienceSelector);
  const education = useSelector(workEducationSelector);
  return (
    <div className="content">
      <MyInfo />
      <MyProject />
      <InfoList experience={workExperience} title="Work Experience" />
      <InfoList experience={education} title="Education" />
    </div>
  );
};

export default Content;
