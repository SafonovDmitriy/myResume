import { useDispatch } from "react-redux";
import "./App.scss";
import React, { useEffect } from "react";
import { getEducation } from "./Redux/Reducers/educationReducer";
import { getMainInfo } from "./Redux/Reducers/mainInfoReducer";
import { getWorkExperience } from "./Redux/Reducers/workExperienceReducer";
import SideBar from "./Components/SideBar/SideBar";
import Content from "./Components/Content/Content";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEducation());
    dispatch(getMainInfo());
    dispatch(getWorkExperience());
  }, [dispatch]);

  return (
    <div className="Wrapper">
      <SideBar className="sidebar" />
      <Content className="content" />
    </div>
  );
};

export default App;
