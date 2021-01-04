import { API } from "./../../DataBase/API/API";
const educationReducer = (state = [], active) => {
  switch (active.type) {
    case "SET_EDUCATION":
      return [...active.educationDate];
    default:
      return [...state];
  }
};
const setEducation = (educationDate) => ({
  type: "SET_EDUCATION",
  educationDate,
});

export const getEducation = () => {
  return async (dispatch) => {
    const response = await API.getEducation();
    dispatch(setEducation(response));
  };
};
export default educationReducer;
