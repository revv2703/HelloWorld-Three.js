import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    ongc,
    acm,
    gan,
    comingsoon,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web dev",
      icon: web,
    },
    {
      title: "Game dev",
      icon: mobile,
    },
    {
      title: "Application dev",
      icon: backend,
    },
    {
      title: "AIML dev",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Web Master",
      company_name: "ACM Bennett",
      icon: acm,
      iconBg: "#E6DEDD",
      date: "Sept 2022 - Sept 2023",
      points: [
        "Developed and maintained web content including website navigationr images, and multimedia for ACM Bennett"
      ],
    },
    {
      title: "Summer Trainee",
      company_name: "ONGC",
      icon: ongc,
      iconBg: "#E6DEDD",
      date: "June 2023 - July 2023",
      points: [
        "Learned and developed report on ABAP programming language."
      ],
    },
    
  ];

  const projects = [
    {
      name: "Fashion GAN",
      description:
        "GAN that uses tensorflow datasets and generates images based on that.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
      ],
      image: gan,
      source_code_link: "https://github.com/revv2703/Fashion-GAN",
    },
    {
      name: "Coming Soon",
      description:
        "Was lazy enough not to upload anything. :(",
      tags: [
        // {
        //   name: "react",
        //   color: "blue-text-gradient",
        // },
        // {
        //   name: "restapi",
        //   color: "green-text-gradient",
        // },
        // {
        //   name: "scss",
        //   color: "pink-text-gradient",
        // },
      ],
      image: comingsoon,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };