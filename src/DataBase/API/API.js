import Server from "./../dataBase";

export const API = {
  getData: () => Server.get(),
  getMainInfo: () => Server.get("mainInfo"),
  getWorkExperience: () => Server.get("workExperience"),
  getEducation: () => Server.get("education"),
};
