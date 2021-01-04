import { combineReducers } from "redux";
import mainInfoReducer from "./mainInfoReducer";
import workExperienceReducercer from "./workExperienceReducer";
import educationReducer from "./educationReducer";

let reducers = combineReducers({
  mainInfo: mainInfoReducer,
  workExperience: workExperienceReducercer,
  education: educationReducer,
});

export default reducers;
