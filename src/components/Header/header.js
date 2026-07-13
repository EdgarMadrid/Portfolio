import { Nav } from "@/components/Nav/nav";
import photoImg from "/images/image-removebg-preview.png";
import { Decoration } from "@/components/Decoration/decoration";
import "./header.scss";

const circles = [
  {
    size: "small",
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

  {
    size: "large",
  },
];

export const Header = () => {
  return `
    <header class="header">

      ${Decoration(circles)}
      ${Nav()}

      <div class="header__content">
        <h1 class="header__title">Nice to <br class="mobile"> meet you! I'm <span>Adam Keyes</span>.</h1>

        <p class="header__description">
          Based in the UK, I’m a front-end developer passionate about building
          accessible web apps that users love.
        </p>

        <a href="#" class="header__button">Contact me</a>
      </div>
    </header>
  `;
};
