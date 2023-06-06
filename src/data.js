//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiLinkedin,
} from "react-icons/fi";

// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images
import Project1 from "./assets/img/projects/p1.webp";
import Project2 from "./assets/img/projects/Reasons-a-Financial-Advisor-Can-Help-Your-Business.jpg";
import Project3 from "./assets/img/projects/LXD-chongqing-city-designboom500.jpg";
import Project4 from "./assets/img/projects/p4.webp";
import Project5 from "./assets/img/projects/p5.webp";
import Project6 from "./assets/img/projects/p6.webp";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/nextjs.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";

// testimonial images
import TestiImage1 from "./assets/img/testimonials/testimonial-1.webp";
import TestiImage2 from "./assets/img/testimonials/testimonial-2.webp";
import TestiImage3 from "./assets/img/testimonials/testimonial-3.webp";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "services",
    href: "services",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/anas-qazza/",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/aqazza",
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "",
  },
  {
    img: UpworkBrandIcon,
    href: "",
  },
  {
    img: FiverBrandIcon,
    href: "",
  },
  {
    img: BehanceBrandIcon,
    href: "",
  },
  {
    img: DribbbleBrandIcon,
    href: "",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project2,
    name: "Dyme",
    // category: "UI/UX design",
    description:
      "Software application designed to help users track their income and expenses and monitor their spending habits",
  },
  {
    id: "2",
    image: Project1,
    name: "Juke Joint",
    // category: "Web Development",
    description: "A music streaming app that allows users to listen to music",
  },
  {
    id: "3",
    image: Project3,
    name: "Urban Info",
    // category: "UI/UX design",
    description: "A website that provides information about urban cities",
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "Dyme",
    images: [
      require("./assets/img/projects/dyme1.png"),
      require("./assets/img/projects/Dyme2.png"),
      require("./assets/img/projects/Dyme3.png"),
    ],
  },
  {
    name: "Juke Joint",
    images: [
      require("./assets/img/projects/JJ4.png"),
      require("./assets/img/projects/JJ2.png"),
      require("./assets/img/projects/JJ1.png"),
    ],

    // description: [
    //   "Description 1 for Image 1",
    //   "Description 2 for Image 2",
    //   "Description 3 for Image 3",
    // ],
  },

  {
    name: "Urban Info",
    images: [
      require("./assets/img/projects/UI1.png"),
      require("./assets/img/projects/UI2.png"),
      require("./assets/img/projects/UI3.png"),
    ],
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: "Web Design",
    description:
      "Creating visually appealing and user-friendly websites that are tailored to meet the unique requirements of each client. By incorporating modern design principles and utilizing the latest technologies, I ensure the websites I build leave a lasting impression on visitors.",
  },
  {
    icon: <FiSettings />,
    name: "Web Development",
    description:
      "Specializing in developing custom web applications that meet businesses' specific needs. From e-commerce platforms to content management systems and web-based software solutions, I deliver high-quality and scalable web development services.",
  },
  {
    icon: <FiPenTool />,
    name: "Branding",
    description:
      "Work closely with clients to develop strong and cohesive branding strategies. From designing captivating logos and brand identities to crafting compelling brand messages, I create a memorable impression on their target audience.",
  },
  {
    icon: <FiTag />,
    name: "SEO",
    description:
      "I employ proven search engine optimization techniques to improve the visibility and ranking of websites in search engine results. By conducting thorough keyword research, I help businesses drive organic traffic and increase their online visibility.",
  },
];

// testimonials
// export const testimonials = [
//   {
//     authorImg: TestiImage1,
//     authorText:
//       "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
//     authorName: "Olivia Doe",
//     authorPosition: "Head of Design, Google",
//   },
//   {
//     authorImg: TestiImage2,
//     authorText:
//       "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
//     authorName: "Olivia Doe",
//     authorPosition: "Head of Design, Google",
//   },
//   {
//     authorImg: TestiImage3,
//     authorText:
//       "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
//     authorName: "Olivia Doe",
//     authorPosition: "Head of Design, Google",
//   },
// ];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "Dont hesitate to reach out!",
    // description: "Email me at anasqazza@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Cypress, CA, USA",
    // description: "Serving clients worldwide",
  },
];
