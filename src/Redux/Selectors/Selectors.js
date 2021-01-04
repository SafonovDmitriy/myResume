import { get } from "lodash";

export const workExperienceSelector = (state) =>
  get(state, "workExperience", []);

export const workEducationSelector = (state) => get(state, "education", []);

export const myProjectSelector = (state) =>
  get(state.mainInfo, "myProject", []);

export const myInfoSelector = (state) => {
  const { name, surname, job, age, aboutMe } = get(state, "mainInfo", {});
  return {
    name,
    surname,
    job,
    age,
    aboutMe,
  };
};
export const myInfoSideBarSelector = (state) => {
  const { contacts, techSkill, softSkill } = get(state, "mainInfo", {});
  return {
    contacts,
    techSkill,
    softSkill,
  };
};
//   reselect
// export const workExperienceDetailsSelector = createSelector(
//   workExperienceSelector, // тут мы получаем state.workExperience
//   (data) => get(data, "details") // data - это state.workExperience, из которой мы безопасно выдергиваем поле details c помощью метода get из lodash
// );
