import { API } from "./../../DataBase/API/API";

const workExperienceReducer = (state = [], active) => {
  switch (active.type) {
    case "SET_WORK_EXPERIENCE":
      return [...active.workExperienceDate];
    default:
      return [...state];
  }
};
export default workExperienceReducer;

const setWorkExperience = (workExperienceDate) => ({
  type: "SET_WORK_EXPERIENCE",
  workExperienceDate,
});

export const getWorkExperience = () => {
  return async (dispatch) => {
    const response = await API.getWorkExperience();
    dispatch(setWorkExperience(response));
  };
};
