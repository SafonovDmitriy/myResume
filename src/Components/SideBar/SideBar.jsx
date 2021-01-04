import React from "react";
import "./SideBar.scss";
import myPhoto from "../../img/myPhoto.jpg";
import { useSelector } from "react-redux";
import Spinner from "./../../Elements/Spinner/Spinner";
import { myInfoSideBarSelector } from "./../../Redux/Selectors/Selectors";

const SideBar = () => {
  const myInfo = useSelector(myInfoSideBarSelector);
  return (
    <aside className="sideBar">
      <img src={myPhoto} alt="myPhoto" className="myPhoto" />
      <div className="contacts">
        <h3>Contacts</h3>
        {myInfo.contacts ? (
          <ul>
            <li>
              <b>C: </b>
              <a href={`tel:${myInfo.contacts.tel}`}>{myInfo.contacts.tel}</a>
            </li>
            <li>
              <b>E: </b>
              <a href={`mailto:${myInfo.contacts.email}`}>
                {myInfo.contacts.email}
              </a>
            </li>
          </ul>
        ) : (
          <Spinner />
        )}
      </div>
      <div className="tech">
        <h3>Tech Skills</h3>
        {myInfo.techSkill ? (
          <ul className="skill-list">
            {myInfo.techSkill.map((item, idx) => (
              <li
                className="skill-list__item"
                key={`tech-list__item-${idx + 1}`}
              >
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <Spinner />
        )}
      </div>
      <div className="soft">
        <h3>Soft Skills</h3>
        {myInfo.softSkill ? (
          <ul className="skill-list">
            {myInfo.softSkill.map((item, idx) => (
              <li
                className="skill-list__item"
                key={`skill-list__item-${idx + 1}`}
              >
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <Spinner />
        )}
      </div>
    </aside>
  );
};

export default SideBar;
