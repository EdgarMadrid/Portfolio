import "./main.scss";
import { Card } from "./components/Card/card";
import desingImg from "/images/desing-preview.jpg";
import entertainmentImg from "/images/entertainment-preview.jpg";
import skillImg from "/images/skill-preview.jpg";
import todoImg from "/images/todo-preview.jpg";
import memoryImg from "/images/memory.jpg";
import artImg from "/images/art.jpg";
import { Decoration } from "@/components/Decoration/decoration";

const circles = [
  {
    size: "large",
  },

  {
    size: "large",
  },

  {
    size: "large",
  },

  {
    size: "large",
  },

  {
    size: "large",
  },
];

export const Main = () => {
  const projects = [
    {
      image: desingImg,
      title: "DESIGN PORTFOLIO",
      technologies: ["HTML", "CSS"],
      projectUrl: "#",
      codeUrl: "#",
    },
    {
      image: skillImg,
      title: "E-LEARNING LANDING PAGE",
      technologies: ["HTML", "SCSS"],
      projectUrl: "#",
      codeUrl: "#",
    },
    {
      image: todoImg,
      title: "TODO WEB APP",
      technologies: ["HTML", "SCSS", "JavaScript"],
      projectUrl: "#",
      codeUrl: "#",
    },
    {
      image: entertainmentImg,
      title: "ENTERTAINMENT WEB APP",
      technologies: ["HTML", "SCSS", "JavaScript"],
      projectUrl: "#",
      codeUrl: "#",
    },
    {
      image: memoryImg,
      title: "MEMORY GAME",
      technologies: ["HTML", "SCSS", "JavaScript"],
      projectUrl: "#",
      codeUrl: "#",
    },
    {
      image: artImg,
      title: "ART GALLERY SHOWCASE",
      technologies: ["HTML", "SCSS", "JavaScript"],
      projectUrl: "#",
      codeUrl: "#",
    },
  ];
  return `
        <main class="main">
${Decoration(circles)}
         
        <section class="main__technologies">
      
            <ul class="main__technology-list">
            <li class="main__technology-item">
                <span class="main__technology-name">HTML</span>
                <span class="main__technology-experience">4 Years Experience</span>
            </li>

            <li class="main__technology-item">
                <span class="main__technology-name">CSS</span>
                <span class="main__technology-experience">4 Years Experience</span>
            </li>

            <li class="main__technology-item">
                <span class="main__technology-name">JavaScript</span>
                <span class="main__technology-experience">4 Years Experience</span>
            </li>

            <li class="main__technology-item">
                <span class="main__technology-name">Accessibility</span>
                <span class="main__technology-experience">4 Years Experience</span>
            </li>

            <li class="main__technology-item">
                <span class="main__technology-name">React</span>
                <span class="main__technology-experience">3 Years Experience</span>
            </li>

            <li class="main__technology-item">
                <span class="main__technology-name">Sass</span>
                <span class="main__technology-experience">3 Years Experience</span>
            </li>
            </ul>
        </section>

        <section class="main__projects">
            <div class="main__projects-header">
            <h2 class="main__projects-title">Projects</h2>
            <a href="#" class="main__projects-link">Contact me</a>
            </div>

            <div class="main__projects-grid">
                ${projects.map((project) => Card(project)).join("")}
            </div>
        </section>
        </main>
    `;
};
