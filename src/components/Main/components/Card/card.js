import "./card.scss";

export const Card = ({
  image,
  title,
  technologies = [],
  projectUrl,
  codeUrl,
}) => {
  return `
    <article class="card">
      <img
        class="card__image"
        src="${image}"
        alt="${title} project preview"
      />

      <div class="card__content">
        <h3 class="card__title">${title}</h3>

        <div class="card__technologies">
          ${technologies
            .map(
              (technology) =>
                `<span class="card__technology">${technology}</span>`,
            )
            .join("")}
        </div>

        <div class="card__actions">
          <a
            class="card__link"
            href="${projectUrl}"
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW PROJECT
          </a>

          <a
            class="card__link"
            href="${codeUrl}"
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW CODE
          </a>
        </div>
      </div>
    </article>
  `;
};
