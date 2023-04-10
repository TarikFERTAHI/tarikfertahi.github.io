// gitprofile.config.js
// source code: https://github.com/arifszn/gitprofile

const config = {
  github: {
    username: 'TarikFERTAHI', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 14, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['tarikfertahi.github.io', 'TarikFERTAHI'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'tarik-fertahi',
    twitter: 'fertahitarik',
    website: 'https://tarikfertahi.github.io/',
    phone: '+212642696589',
    email: 'fertahitarik@gmail.com',
  },
  resume: {
    fileUrl: 'https://drive.google.com/file/d/1Ko6cop0tFRXdI6tapgmIL8OVx2SB8reK/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C',
    'c++',
    'JAVA',
    'JavaFX',
    'JAVA JEE',
    'Spring',
    'TypeScript',
    'Angular',
    'CSS',
    'Bootstrap',
    'Flutter',
    'Spark',
    'Kafka',
    'JSON',
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'Oracle DB',
    'Git',
    'GitHub',
    'Docker',
    'Docker Swarm',
    'Kubernetes',
    'Jenkins',
    'VirtualBox',
    'Vmware',
    'UML',
    'Merise',
    'SCRUM',
    'Networking',
    'Linux',
  ],
  experiences: [
    {
      company: 'IDEMIA Morocco',
      position: 'Software Engineer',
      from: 'February 01, 2023 ',
      to: 'Present',
    },
    {
      company: 'OCP (Office Cherifien des Phosphates)',
      position: 'Full Stack Developer Spring / Angular',
      from: 'July 15, 2022',
      to: 'September 15, 2022',
    },
    {
      company: 'WOBY WEB MAROC',
      position: 'Web Developer',
      from: 'July 01, 2021',
      to: 'July 30, 2021',
    },
    {
      company: 'BILLGATES',
      position: 'Network Administrator',
      from: 'January 01, 2019',
      to: 'January 30, 2019',
    },
    {
      company: 'CIMAT (Ciment de l\'Atlas)',
      position: 'Network and System Administrator',
      from: 'January 22, 2018',
      to: 'February 22, 2018',
    },
  ],
  education: [
    {
      institution: 'Ecole Normale Supérieure de l\'Enseignement Technique (ENSET-M)',
      degree: 'Software Engineer Big Data & Cloud Computing',
      from: '2020',
      to: 'Present',
    },
    {
      institution: 'Classes Préparatoires au Brevet de Technicien Supérieur (BTS)',
      degree: 'Higher Technician Computer Systems & Networks',
      from: '2018',
      to: '2020',
    },
    {
      institution: 'Lycée Technique Med V Béni Mellal (Bac Pro)',
      degree: 'Professional Baccalaureat Maintenance & computer networks',
      from: '2015',
      to: '2018',
    },
  ],

  //certif
  certifications: [
    {
      title: "M0001: MongoDB Basics",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link:
        "https://university.mongodb.com/course_completion/14a2cf08-59a4-4511-af96-167f6791b155",
      //alt_name: "MongoDB University",
      // color_code: "#2AAFED",
      //color_code: "#47A048",
    },
    {
      title: "M320: Data Modeling",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/file/d/1kwjdcMzH4DNYII4mDTY26ACM3g4jAKqj/view?usp=sharing",
      alt_name: "MongoDB University",
      // color_code: "#F6B808",
      color_code: "#47A048",
    },
    {
      title: "IBM Big Data 101",
      subtitle: "IBM University",
      logo_path: "ibm1.png",
      certificate_link:
        "https://drive.google.com/file/d/1OusmFjPVnWd3F-gl5Cn-WI7ZGQfhQwNX/view?usp=sharing",
      alt_name: "IBM University",
      color_code: "#E2405F",
    },
    {
      title: "IBM Hadoop 101",
      subtitle: "IBM University",
      logo_path: "ibm1.png",
      certificate_link:
        "https://drive.google.com/file/d/1Eyx8VF8YdE3e8j0OoxhJPzXkLnGn96DG/view?usp=sharing",
      alt_name: "IBM University",
      color_code: "#E2405F",
    },
    {
      title: "IBM Spark Fundamentals",
      subtitle: "IBM University",
      logo_path: "ibm1.png",
      certificate_link:
        "https://drive.google.com/file/d/1kcPVizkzdWFsnsQIidFU2_CTL2oeYzUm/view?usp=sharing",
      alt_name: "IBM University",
      color_code: "#E2405F",
    },
    {
      title: "Oracle Cloud Infrastructure 2021",
      subtitle: "Oracle University",
      logo_path: "oracle.png",
      certificate_link:
        "https://drive.google.com/file/d/134p4LcbIF21io7K9rWatIMZWXEJNbLzE/view?usp=sharing",
      alt_name: "Oracle University",
      color_code: "#2AAFED",
    },
  ],




  // Display blog posts from your medium or dev account. (Optional)
  blog: {

    //source: 'dev', // medium | dev
    //username: 'arifszn', // to hide blog section, keep it empty
    //limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: 'G-WLLB5E14M6', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '2617601', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'light',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      //'cupcake',
      //'bumblebee',
      //'emerald',
      //'corporate',
      //'synthwave',
      //'retro',
      //'cyberpunk',
      //'valentine',
      //'halloween',
      //'garden',
      //'forest',
      //'aqua',
      //'lofi',
      //'pastel',
      //'fantasy',
      //'wireframe',
      //'black',
      //'luxury',
      //'dracula',
      //'cmyk',
      //'autumn',
      //'business',
      //'acid',
      //'lemonade',
      //'night',
      //'coffee',
      //'winter',
      //'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
