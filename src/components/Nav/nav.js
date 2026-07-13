import "./nav.scss";
import githubImg from "/icons/akar-icons_github-fill.svg";
import mentorImg from "/icons/simple-icons_frontendmentor.svg";
import linkedinImg from "/icons/LinkedIn.svg";
import twitterImg from "/icons/akar-icons_twitter-fill.svg";

export const Nav = () => {
  return `
    <nav class="nav">
        <span class="nav__logo">adamkeyes</span>

        <ul class="nav__social-list">
          <li class="nav__social-item">
            <a href="#" class="nav__social-link">
              <img src="${githubImg}" alt="GitHub" />
            </a>
          </li>

          <li class="nav__social-item">
            <a href="#" class="nav__social-link">
              <img
                src="${mentorImg}"
                alt="Frontend Mentor"
              />
            </a>
          </li>

          <li class="nav__social-item">
            <a href="#" class="nav__social-link">
              <img src="${linkedinImg}" alt="LinkedIn" />
            </a>
          </li>

          <li class="nav__social-item">
            <a href="#" class="nav__social-link">
              <img src="${twitterImg}" alt="Twitter" />
            </a>
          </li>
        </ul>
      </nav>
    `;
};
