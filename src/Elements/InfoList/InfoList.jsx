import React from "react";
import "./InfoList.scss";
const InfoList = (props) => {
  return (
    props.experience && (
      <div className="workExperience">
        <h2 className="workExperience__title">{props.title}</h2>
        {props.experience.map((item, idx) => {
          return (
            <div className="workExperience__item" key={`work-${idx + 1}`}>
              <h3>
                <span>{item.specialty}</span>,
                <span className="work"> {item.place}</span>
                <p className="work__period">
                  <span>{`${item.startDate} - ${item.endDate} | ${item.country}`}</span>
                </p>
              </h3>
              {item.aboutWork !== undefined && (
                <ul className="workExperience__item-aboutWork">
                  {item.aboutWork.map((item, idx) => {
                    return (
                      <li key={`workExperience__item-aboutWork-${idx + 1}`}>
                        <span>{item}</span>{" "}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    )
  );
};

export default InfoList;
