(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/Portfolio/icons/akar-icons_github-fill.svg`,t=`/Portfolio/icons/simple-icons_frontendmentor.svg`,n=`/Portfolio/icons/LinkedIn.svg`,r=`/Portfolio/icons/akar-icons_twitter-fill.svg`,i=()=>`
    <nav class="nav">
        <span class="nav__logo">adamkeyes</span>

        <ul class="nav__social-list">
          <li class="nav__social-item">
            <a href="#" class="nav__social-link">
              <img src="${e}" alt="GitHub" />
            </a>
          </li>

          <li class="nav__social-item">
            <a href="#" class="nav__social-link">
              <img
                src="${t}"
                alt="Frontend Mentor"
              />
            </a>
          </li>

          <li class="nav__social-item">
            <a href="#" class="nav__social-link">
              <img src="${n}" alt="LinkedIn" />
            </a>
          </li>

          <li class="nav__social-item">
            <a href="#" class="nav__social-link">
              <img src="${r}" alt="Twitter" />
            </a>
          </li>
        </ul>
      </nav>
    `,a=(e=[])=>`
    <div class="decoration">
      ${e.map(e=>`
            <span 
              class="
                decoration__circle 
                decoration__circle--${e.size}
              "
            ></span>
          `).join(``)}
    </div>
  `,o=[{size:`small`},{size:`large`},{size:`large`},{size:`large`},{size:`large`},{size:`large`}],s=()=>`
    <header class="header">

      ${a(o)}
      ${i()}

      <div class="header__content">
        <h1 class="header__title">Nice to <br class="mobile"> meet you! I'm <span>Adam Keyes</span>.</h1>

        <p class="header__description">
          Based in the UK, I’m a front-end developer passionate about building
          accessible web apps that users love.
        </p>

        <a href="#" class="header__button">Contact me</a>
      </div>
    </header>
  `,c=({image:e,title:t,technologies:n=[],projectUrl:r,codeUrl:i})=>`
    <article class="card">
      <img
        class="card__image"
        src="${e}"
        alt="${t} project preview"
      />

      <div class="card__content">
        <h3 class="card__title">${t}</h3>

        <div class="card__technologies">
          ${n.map(e=>`<span class="card__technology">${e}</span>`).join(``)}
        </div>

        <div class="card__actions">
          <a
            class="card__link"
            href="${r}"
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW PROJECT
          </a>

          <a
            class="card__link"
            href="${i}"
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW CODE
          </a>
        </div>
      </div>
    </article>
  `,l=`/Portfolio/images/desing-preview.jpg`,u=`/Portfolio/images/entertainment-preview.jpg`,d=`/Portfolio/images/skill-preview.jpg`,f=`/Portfolio/images/todo-preview.jpg`,p=`/Portfolio/images/memory.jpg`,m=`/Portfolio/images/art.jpg`,h=[{size:`large`},{size:`large`},{size:`large`},{size:`large`},{size:`large`}],g=()=>{let e=[{image:l,title:`DESIGN PORTFOLIO`,technologies:[`HTML`,`CSS`],projectUrl:`#`,codeUrl:`#`},{image:d,title:`E-LEARNING LANDING PAGE`,technologies:[`HTML`,`SCSS`],projectUrl:`#`,codeUrl:`#`},{image:f,title:`TODO WEB APP`,technologies:[`HTML`,`SCSS`,`JavaScript`],projectUrl:`#`,codeUrl:`#`},{image:u,title:`ENTERTAINMENT WEB APP`,technologies:[`HTML`,`SCSS`,`JavaScript`],projectUrl:`#`,codeUrl:`#`},{image:p,title:`MEMORY GAME`,technologies:[`HTML`,`SCSS`,`JavaScript`],projectUrl:`#`,codeUrl:`#`},{image:m,title:`ART GALLERY SHOWCASE`,technologies:[`HTML`,`SCSS`,`JavaScript`],projectUrl:`#`,codeUrl:`#`}];return`
        <main class="main">
${a(h)}
         
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
                ${e.map(e=>c(e)).join(``)}
            </div>
        </section>
        </main>
    `},_=`/Portfolio/icons/error.svg`,v=[{size:`large`},{size:`large`},{size:`large`},{size:`large`},{size:`large`}],y=()=>`
    <footer class="footer">
    ${a(v)}

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
                src="${_}"
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
                src="${_}"
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
                src="${_}"
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
        ${i()}
      </section>


    </footer>
  `,b=()=>`
    <div class="container">
    ${s()}
    ${g()}
    ${y()}
    </div>
    `;function x(){return`
    <div class="loader">
      <div class="loader__spinner"></div>
      <p>Cargando...</p>
    </div>
  `}var S=()=>{let e=document.querySelectorAll(`.footer__field input, .footer__field textarea`);e.length&&e.forEach(e=>{let t=e.closest(`.footer__field`).querySelector(`.footer__message`);e.addEventListener(`input`,()=>{C(e,t)})})},C=(e,t)=>{if(e.value.trim()===``){e.classList.remove(`is-valid`),e.classList.add(`is-error`),t.classList.add(`show`);return}if(e.type===`email`&&!w(e.value)){e.classList.remove(`is-valid`),e.classList.add(`is-error`),t.classList.add(`show`);return}e.classList.remove(`is-error`),e.classList.add(`is-valid`),t.classList.remove(`show`)},w=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);function T(e){let t=document.querySelector(`#app`);if(!t){console.error(`No existe #app en el HTML`);return}t.innerHTML=x(),setTimeout(()=>{try{t.innerHTML=e();let n=t.querySelector(`main`);n&&n.classList.add(`page-enter`),S()}catch(e){console.error(`Error renderizando página:`,e),t.innerHTML=`<h1>Error cargando página</h1>`}},600)}var E={"/":b},D=`/Portfolio`;function O(){let e=window.location.pathname;e=e.replace(D,``),(e===``||e===`/`)&&(e=`/`),T(E[e]||b)}function k(){document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-link]`);t&&(e.preventDefault(),window.history.pushState({},``,t.href),O())}),window.addEventListener(`popstate`,O)}({init(){O(),k(),this.listen()},listen(){window.addEventListener(`popstate`,O)}}).init();