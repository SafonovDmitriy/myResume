import React from "react";
import "./SideBar.scss";
import myPhoto from "../../img/myPhoto.jpg";
import { connect } from "react-redux";
import Spinner from "./../../Elements/Spinner/Spinner";

const SideBar = (props) => {
  return (
    <aside className="sideBar">
      <img src={myPhoto} alt="myPhoto" className="myPhoto" />
      <div className="contacts">
        <h3>Contacts</h3>
        {props.contacts ? (
          <ul>
            <li>
              <b>C: </b>
              <a href={`tel:${props.contacts.tel}`}>{props.contacts.tel}</a>
            </li>
            <li>
              <b>E: </b>
              <a href={`mailto:${props.contacts.email}`}>
                {props.contacts.email}
              </a>
            </li>
          </ul>
        ) : (
          <Spinner />
        )}
      </div>
      <div className="tech">
        <h3>Tech Skills</h3>
        {props.techSkill !== undefined ? (
          <ul className="skill-list">
            {props.techSkill.map((item, idx) => {
              return (
                <li
                  className="skill-list__item"
                  key={`tech-list__item-${idx + 1}`}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        ) : (
          <Spinner />
        )}
      </div>
      <div className="soft">
        <h3>Soft Skills</h3>
        {props.softSkill !== undefined ? (
          <ul className="skill-list">
            {props.softSkill.map((item, idx) => {
              return (
                <li
                  className="skill-list__item"
                  key={`skill-list__item-${idx + 1}`}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        ) : (
          <Spinner />
        )}
      </div>
    </aside>
  );
};
const mapStateToProps = (state) => {
  const sideBar = state.mainInfo;
  return {
    contacts: sideBar.contacts,
    techSkill: sideBar.techSkill,
    softSkill: sideBar.softSkill,
  };
};

export default connect(mapStateToProps, null)(SideBar);
