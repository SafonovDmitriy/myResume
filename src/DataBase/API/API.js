import Server from "./../dataBase";

export const API = {
  getData: async () => {
    const response = await Server.get();
    return response;
  },

  getMainInfo: async () => {
    const response = await Server.get("mainInfo");
    return response;
  },
  getWorkExperience: async () => {
    const response = await Server.get("workExperience");
    return response;
  },
  getEducation: async () => {
    const response = await Server.get("education");
    return response;
  },
};
