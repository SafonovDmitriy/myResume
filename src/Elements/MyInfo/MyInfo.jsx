import React from "react";
import Spinner from "./../Spinner/Spinner";
import { connect } from "react-redux";
import "./MyInfo.scss";
const MyInfo = (props) => {
  return props.name !== undefined ? (
    <div className="myInfo">
      <h3 className="myInfo__job">{props.job}</h3>
      <h1 className="myInfo__fullname">{`${props.name} ${props.surname}`}</h1>
      <h4>{`Age: ${props.age} years old`}</h4>
      <p className="myInfo__aboutMe">{props.aboutMe}</p>
    </div>
  ) : (
    <Spinner />
  );
};
const mapStateToProps = (state) => {
  const mainInfo = state.mainInfo;

  return {
    name: mainInfo.name,
    surname: mainInfo.surname,
    job: mainInfo.job,
    age: mainInfo.age,
    aboutMe: mainInfo.aboutMe,
  };
};
export default connect(mapStateToProps)(MyInfo);
