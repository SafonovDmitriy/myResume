import React from "react";
import Spinner from "./../Spinner/Spinner";
import { useSelector } from "react-redux";
import "./MyInfo.scss";
import { myInfoSelector } from "../../Redux/Selectors/Selectors";
const MyInfo = () => {
  const myInfo = useSelector(myInfoSelector);
  return myInfo.name ? (
    <div className="myInfo">
      <h3 className="myInfo__job">{myInfo.job}</h3>
      <h1 className="myInfo__fullname">{`${myInfo.name} ${myInfo.surname}`}</h1>
      <h4>{`Age: ${myInfo.age} years old`}</h4>
      <p className="myInfo__aboutMe">{myInfo.aboutMe}</p>
    </div>
  ) : (
    <Spinner />
  );
};
export default MyInfo;
