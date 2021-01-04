import { connect } from "react-redux";
import "./App.scss";
import React from "react";
import { getEducation } from "./Redux/Reducers/educationReducer";
import { getMainInfo } from "./Redux/Reducers/mainInfoReducer";
import { getWorkExperience } from "./Redux/Reducers/workExperienceReducer";
import SideBar from "./Components/SideBar/SideBar";
import Content from "./Components/Content/Content";

class App extends React.Component {
  componentDidMount() {
    this.props.getEducation();
    this.props.getMainInfo();
    this.props.getWorkExperience();
  }
  render() {
    return (
      <div className="Wrapper">
        <SideBar className="sidebar" />
        <Content className="content" />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getEducation: () => dispatch(getEducation()),
    getMainInfo: () => dispatch(getMainInfo()),
    getWorkExperience: () => dispatch(getWorkExperience()),
  };
};
export default connect(null, mapDispatchToProps)(App);
