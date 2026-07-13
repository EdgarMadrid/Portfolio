import "./decoration.scss";

export const Decoration = (circles = []) => {
  return `
    <div class="decoration">
      ${circles
        .map(
          (circle) => `
            <span 
              class="
                decoration__circle 
                decoration__circle--${circle.size}
              "
            ></span>
          `,
        )
        .join("")}
    </div>
  `;
};
