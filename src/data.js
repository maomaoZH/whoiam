const aboutMe = [
  "I have been developing web application since 2013.",
  "I use modern web technology framework or libraries such as React and Redux.",
  "I have experience of working with Ruby on Rails.",
  "I am focusing on writing clean quality code by refactoring my code",
  "Commit and delivery are the essentials in my daily work",
  "I am a fast learner and a great team player who love for challenging tasks."
];

const personalInfo = [
  {
    title: "website",
    icon: "link",
    link: "https://maomaozh.github.io/whoiam",
    value: "maomaozh.github.io/whoiam"
  },
  {
    title: "github",
    icon: "github",
    link: "https://github.com/maomaoZH",
    value: "github.com/maomaoZH"
  },
  {
    title: "email",
    icon: "at",
    link: "mailto:maomao.zha@gmail.com",
    value: "maomao.zha@gmail.com"
  },
  {
    title: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/maomao-zha",
    value: "www.linkedin.com/in/maomao-zha"
  }
];

const jobExperiences = [
  {
    Title: "Senior Frontend Developer immmr",
    Company: "immmr GmbH (100% subsidiary of Deutsche Telekom)",
    Responsibilities: [
      "develop WebRTC based web app using React/Redux/Electron technology",
      "develop web portal service using Ruby On Rails technology",
      "scrum master replacement"
    ],
    Achievements:
      "redesign of web tech stack which makes both UI components and redux store data possible to be shared by web app and mac app"
  },
  {
    Title: "Web Developer",
    Company: "x-ion GmbH",
    Responsibilities: [
      "develop internal api service using Ruby On Rails technology",
      "write integration tests and unit tests to existing internal web application"
    ]
  },
  {
    Title: "Web Developer",
    Company: "bab.la GmbH",
    Responsibilities: [
      "migrate old product into new desisn using PHP technology",
      "develop company job platform product",
      "translate English content to Chinese"
    ]
  }
];

const education = [
  {
    university: "Philipps-Universität Marburg",
    subject: "M.A. in Linguistic and Web Technology"
  },
  {
    university: "Tianjin University of Science and Technology",
    subject: "B.A. in English and InformationManagement"
  }
];

const skills = [
  { name: "React/Redux", value: "95%" },
  { name: "Javascript", value: "95%" },
  { name: "Ruby on Rails", value: "80%" },
  { name: "English Language", value: "95%" },
  { name: "German Lauguage", value: "75%" },
  { name: "Cooking", value: "100%" }
];

export default {
  aboutMe,
  personalInfo,
  jobExperiences,
  education,
  skills
};
