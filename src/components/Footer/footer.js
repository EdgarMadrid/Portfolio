import "./footer.scss";
import { Nav } from "@/components/Nav/nav";
import ErrorImg from "/icons/error.svg";
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

export const Footer = () => {
  return `
    <footer class="footer">
    ${Decoration(circles)}

      <section class="footer__contact">

        <div class="footer__content">

          <h2 class="footer__title">Contact</h2>

          <p class="footer__description">
            I would love to hear about your project and how I could help. Please
            fill out the form, and I'll get back to you as soon as possible.
          </p>

        </div>



        <form class="footer__form" action="#" method="post">


          <div class="footer__field">

            <label for="name">Name</label>


            <div class="footer__input-wrapper">

              <input
                id="name"
                name="name"
                type="text"
                autocomplete="name"
                required
              />


              <img 
                class="footer__icon"
                src="${ErrorImg}"
                alt="Error"
              >

            </div>


            <span class="footer__message">
              Name is required
            </span>

          </div>




          <div class="footer__field">

            <label for="email">Email</label>


            <div class="footer__input-wrapper">

              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
              />


              <img 
                class="footer__icon"
                src="${ErrorImg}"
                alt="Error"
              >

            </div>


            <span class="footer__message">
              Sorry, invalid format here
            </span>

          </div>




          <div class="footer__field">

            <label for="message">Message</label>


            <div class="footer__input-wrapper">

              <textarea
                id="message"
                name="message"
                rows="6"
                required
              ></textarea>


              <img 
                class="footer__icon"
                src="${ErrorImg}"
                alt="Error"
              >

            </div>


            <span class="footer__message">
              Message cannot be empty
            </span>

          </div>




          <button class="button" type="submit">
            Send Message
          </button>


        </form>

      </section>



      <section class="footer__nav">
        ${Nav()}
      </section>


    </footer>
  `;
};
