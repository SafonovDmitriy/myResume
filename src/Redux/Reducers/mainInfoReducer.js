import { API } from "./../../DataBase/API/API";
const mainInfoReducer = (state = {}, active) => {
  switch (active.type) {
    case "SET_MAIN_INFO":
      return { ...active.maneInfoDate };
    default:
      return { ...state };
  }
};

const setMainInfo = (maneInfoDate) => ({
  type: "SET_MAIN_INFO",
  maneInfoDate,
});

export const getMainInfo = () => {
  return async (dispatch) => {
    const response = await API.getMainInfo();
    dispatch(setMainInfo(response));
  };
};
export default mainInfoReducer;
