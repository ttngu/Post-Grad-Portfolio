import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Tammy Nguyen', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Tammy Nguyen',
  subtitle: 'I am a Full Stack Developer',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a Full Stack Web Developer with a passion to be at the intersection of creativity and technology.',
  paragraphTwo: 'When COVID-19 hit Seattle, my lifestyle was forced to change. I began an ice cream business, making and selling small batches of oat milk based ice cream. The decision to use oat milk was due to my own personal dietary restrictions and food allergies. My love for ice cream runs through my veins, but I noticed there was a lack of alternative options that did not taste like cardboard. I chose to create flavors that were unique to my Asian American upbringing that were also not widely available on the market. Although this was a successful business, I grew more interested in web design through creating my first online store-front. This led me to realize that I have a natural desire to create web applications with a fluid data flow and calming, intuitive UI.',
  paragraphThree: 'I decided to pursue a formal education in Full Stack Web Development at UCLA through remote learning. This intensive certificate program was completed in 12 short weeks, clocking over 100 classroom hours, and 925+ Git commits. The course was rigorous, yet taught me that I am capable of learning, adapting and collaborating in various environments.',
  paragraphFour: 'As a passionate, self-starter, I am excited to begin my career as a Full Stack Web Developer within a fast paced, collaborative company.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'quarantinegame.png',
    title: 'The Quarantine Game',
    info: 'A virtual drinking card game, revolving around the theme of 2020 social distancing.',
    info2: 'HTML/CSS, Javascript, Socket.io, MySQL, sequelize and Bootstrap',
    url: 'https://gentle-cliffs-28390.herokuapp.com/',
    repo: 'https://github.com/ttngu/QuarantineGame', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Home Cooked Comfort',
    info: 'Recipe search web application to help add some variety to your quarantine meals.',
    info2: 'HTML/CSS, JavaScript, jQuery, AJAX, third party and server side APIs',
    url: 'https://tchristensendrumz.github.io/Home-Cooked-Comfort/',
    repo: 'https://github.com/TChristensenDrumz/Home-Cooked-Comfort', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'postit.png',
    title: 'PostIt',
    info: 'A holistic self-care platform for men to learn and explore techniques and products.',
    info2: 'HTML/CSS, Javascript, MySql, React, Node.js, Express, AJAX, Bootstrap, AWS S3',
    url: '',
    repo: 'https://github.com/candygarcia014/PostIt', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: 'Get in touch',
  email: 'tammyn137@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/tamngu/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ttngu',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
