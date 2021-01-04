let dataBase = {
  mainInfo: {
    name: "Dmitriy",
    surname: "Safonov",
    age: 24,
    job: "Front-End Developer",
    aboutMe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    contacts: { tel: "0502333059", email: "sdssds341@gmail.com" },
    myProject: [
      {
        url: "https://github.com/SafonovDmitriy/cubex_test",
        title: "cubex_test",
        languages: "JavaScript,SCSS,CSS,HTML",
      },
      {
        url: "https://github.com/SafonovDmitriy/Chat-IT-KAMASUTRA",
        title: "Chat-IT-KAMASUTRA",
        languages: "JavaScript,CSS,HTML",
      },
      {
        url: "https://github.com/SafonovDmitriy/phonebook",
        title: "phonebook",
        languages: "JavaScript,TypeScript,CSS,HTML",
      },
    ],
    techSkill: [
      "HTML5",
      "CSS3",
      "SCSS",
      "JavaScript",
      "React",
      "Redux",
      "TypeScript",
      "REST API",
    ],
    softSkill: ["Visual Studio Code", "Avocode"],
  },
  workExperience: [
    {
      place: "Freelance",
      specialty: "Front-End Developer",
      startDate: "01.09.2012",
      endDate: "01.05.2016",
      country: "Ukraine",
      aboutWork: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Risus commodo viverra maecenas.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      ],
    },
    {
      place: "Roga & Kopyta New",
      specialty: "Manager",
      startDate: "01.09.2016",
      endDate: "01.12.2019",
      country: "Ukraine",
      aboutWork: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Risus commodo viverra maecenas.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      ],
    },
    {
      place: "Roga & Kopyta LLC",
      specialty: "Manager",
      startDate: "01.09.2012",
      endDate: "01.05.2016",
      country: "Ukraine",
      aboutWork: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Risus commodo viverra maecenas.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      ],
    },
  ],
  education: [
    {
      place: "Zaporozhye College of Radio Electronics",
      specialty: "Applied Mathematics",
      startDate: "01.09.2012",
      endDate: "01.05.2016",
      country: "Ukraine",
    },
    {
      place: "Zaporizhzhya Institute of Economics and Information Technology",
      specialty: "Software engineering",
      startDate: "01.09.2016",
      endDate: "01.12.2019",
      country: "Ukraine",
    },
  ],
};

function getMethods(type) {
  switch (type) {
    case "mainInfo":
      return dataBase.mainInfo;
    case "workExperience":
      return dataBase.workExperience;
    case "education":
      return dataBase.education;
    default:
      return dataBase;
  }
}
const timeOut = 1500;
const delay = async () =>
  await new Promise((resolve) => setTimeout(resolve, timeOut));
const Server = {
  get: (type) => {
    return delay(1000).then(() => getMethods(type));
  },
};
export default Server;
