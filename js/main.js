//ABOUT__H3
const about__h3 = document.querySelector('.about__h3');
const about__h3Offset = about__h3.offsetTop;
const about__h3Width = about__h3.clientHeight;
const about__h3Start = about__h3Offset + about__h3Width;

//ABOUT__MAINTEXT
const about__mainText = document.querySelector('.about__mainText');
const about__mainTextOffset = about__mainText.offsetTop;
const about__mainTextWidth = about__mainText.offsetHeight;
const about__mainTextStart = about__mainTextOffset + about__mainTextWidth;


//SKILLS__SECTION
//sections divs and their offsets
const skills__section = document.querySelector('.skills__section');
const skills__h3 = document.querySelector('.skills__h3');
const skills = document.querySelector('.skills');
const html5 = document.querySelector('.wrapperBox__skill--html5');
const html5Offset = html5.offsetTop - 100;
const css3 = document.querySelector('.wrapperBox__skill--css3');
const css3Offset = css3.offsetTop - 100;
const js = document.querySelector('.wrapperBox__skill--js');
const jsOffset = js.offsetTop - 100;
const react = document.querySelector('.wrapperBox__skill--react');
const reactOffset = react.offsetTop - 100;
const sass = document.querySelector('.wrapperBox__skill--sass');
const sassOffset = sass.offsetTop - 100;
const git = document.querySelector('.wrapperBox__skill--git');
const gitOffset = git.offsetTop - 100;

//icons
const faHtml5 = document.querySelector('.fa-html5');
const faCss3 = document.querySelector('.fa-css3-alt');
const faJs = document.querySelector('.fa-js');
const faReact = document.querySelector('.fa-react');
const faSass = document.querySelector('.fa-sass');
const faGit = document.querySelector('.fa-git');

//skill__description
const descHtml5 = document.querySelector('.description--html5');
const descCss3 = document.querySelector('.description--css3');
const descJs = document.querySelector('.description--js');
const descReact = document.querySelector('.description--react');
const descSass = document.querySelector('.description--sass');
const descGit = document.querySelector('.description--git');

//skill__text
const textHtml5 = document.querySelector('.skill__text--html5');
const textCss3 = document.querySelector('.skill__text--css3');
const textJs = document.querySelector('.skill__text--js');
const textReact = document.querySelector('.skill__text--react');
const textSass = document.querySelector('.skill__text--sass');
const textGit = document.querySelector('.skill__text--git');


const skillsOffset = skills.offsetTop;
const skillsStart = skillsOffset - 100;
const html5Start = skillsOffset + html5Offset + html5.clientHeight;
const css3Start = skillsOffset + css3Offset + css3.clientHeight;
const jsStart = skillsOffset + jsOffset + js.clientHeight;
const reactStart = skillsOffset + reactOffset + react.clientHeight;
const sassStart = skillsOffset + sassOffset + sass.clientHeight;
const gitStart = skillsOffset + gitOffset + git.clientHeight;

//PROJECTS
const example__first = document.querySelector('.projects__example--first');
const example__firstOffset = example__first.offsetTop;
const example__second = document.querySelector('.projects__example--second');
const example__secondOffset = example__second.offsetTop;
const example__third = document.querySelector('.projects__example--third');
const example__thirdOffset = example__third.offsetTop;
const example__fourth = document.querySelector('.projects__example--fourth');
const example__fourthOffset = example__fourth.offsetTop;

const example__firstWidth = example__first.offsetHeight;
const example__secondWidth = example__second.offsetHeight;
const example__thirdWidth = example__third.offsetHeight;
const example__fourthWidth = example__fourth.offsetHeight;

const example__firstStart = example__firstOffset + example__firstWidth
const example__secondStart = example__secondOffset + example__secondWidth
const example__thirdStart = example__thirdOffset + example__thirdWidth
const example__fourthStart = example__fourthOffset + example__fourthWidth

const allProjects = document.querySelectorAll('.projects__container .projects__example');


//contact
const contact__wrapper = document.querySelector('.contact__wrapper');
const contact__wrapperOffset = contact__wrapper.offsetTop;
const contact__wrapperWidth = contact__wrapper.offsetHeight;
const contact__wrapperStart = contact__wrapperOffset + contact__wrapperWidth;


//navigation
const nav = document.querySelector('nav');
const hamburger = document.querySelector('.nav__hamburger');
const nav__container = document.querySelector('.nav__container');


//TIMER
const timer = document.querySelector('.footer__timer')



window.addEventListener('scroll', () => {
  const windowScroll = window.scrollY;
  const windowHeight = window.innerHeight;
  const windowBottom = windowScroll + windowHeight;
  const windowWidth = window.innerWidth;

  //ABOUT__H3 EFFECT
  if (about__h3Start < windowBottom) {
    about__h3.classList.add('active');
  }

  //ABOUT__MAINTEXT EFFECT
  if (about__mainTextStart - (about__mainTextWidth / 2) < windowBottom) {
    about__mainText.classList.add('active');
  }

  // SKILLS EFFECTS
  if (skillsStart + 110 < windowBottom) {
    skills__section.classList.add('active');
    skills__h3.classList.add('active');
  }

  if (html5Start < windowBottom) {
    faHtml5.classList.add('slideFromTop');
    descHtml5.classList.add('increase');
    textHtml5.classList.add('increase');
  }

  if (css3Start < windowBottom) {
    faCss3.classList.add('slideFromTop');
    descCss3.classList.add('increase');
    textCss3.classList.add('increase');
  }

  if (jsStart < windowBottom) {
    faJs.classList.add('slideFromTop');
    descJs.classList.add('increase');
    textJs.classList.add('increase');
  }

  if (reactStart < windowBottom) {
    faReact.classList.add('slideFromTop');
    descReact.classList.add('increase');
    textReact.classList.add('increase');
  }

  if (sassStart < windowBottom) {
    faSass.classList.add('slideFromTop');
    descSass.classList.add('increase');
    textSass.classList.add('increase');
  }

  if (gitStart < windowBottom) {
    faGit.classList.add('slideFromTop');
    descGit.classList.add('increase');
    textGit.classList.add('increase');
  }


  // PROJECTS EFFECTS
  if (windowWidth >= 900) {
    if (example__fourthStart < windowBottom) {
      allProjects.forEach((project, index) => {
        project.style.transition = `.3s ${index / 5}s`;
        project.classList.add('increase');
      });
    }
  } else if (windowWidth < 900) {
    if (example__firstStart < windowBottom) {
      example__first.classList.add('increase');
    }
    if (example__secondStart < windowBottom) {
      example__second.classList.add('increase');
    }
    if (example__thirdStart < windowBottom) {
      example__third.classList.add('increase');
    }
    if (example__fourthStart < windowBottom) {
      example__fourth.classList.add('increase');
    }
  }

  // CONTACT EFFECT
  if (contact__wrapperStart - (contact__wrapperWidth / 2) < windowBottom) {
    contact__wrapper.style.opacity = '1';
  }


  // NAV APPEAR EFFECT
  if (windowWidth > 723) {
    if (windowScroll > windowHeight - 1) {
      nav.style.transform = 'translateY(0)';
    } else {
      nav.style.transform = 'translateY(-100%)';
    }
  }

})


// ON/OFF MOBILE NAV
toggleNav = () => {
  hamburger.classList.toggle('active');
  nav__container.classList.toggle('mask');
  nav.classList.toggle('display');
}

hamburger.addEventListener('click', toggleNav);




// NAVIGATION SCROLLING

const links = document.querySelectorAll('.navigation__ul .ul__item a ');
const show = document.querySelector('.header__button');

goDown = (e) => {
  e.preventDefault();
  let time = 500;

  let section = `[data-section = ${e.target.classList}]`;

  if (e.target.classList.contains('header__button')) {
    section = '[data-section = about]';
    time = 1000;
  }

  let scrollTo = $(section).offset().top

  if (section === '[data-section = skillSection]') {
    scrollTo -= 120;
  }

  $('body, html').animate({
    scrollTop: scrollTo
  }, time);

  if (nav__container.classList.contains('mask')) {
    nav__container.classList.remove('mask');
    hamburger.classList.remove('active');
    nav.classList.remove('display');
  }
}


links.forEach(link => link.addEventListener('click', goDown));
show.addEventListener('click', goDown);



//TIMER IN FOOTER SECTION

let mSeconds = 0;
let minutes = 0;
let hours = 0;

const count = () => {
  mSeconds++;
  timer.textContent = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${mSeconds < 10 ? '0' + mSeconds : mSeconds}`;


  if (mSeconds > 58) {
    minutes++;
    mSeconds = -1;
  }

  if (minutes > 59) {
    hours++;
    minutes = -1;
  }
}
setInterval(count, 1000);


//COPY EMAIL TO CLIPBOARD
const copy = document.querySelector('.informations--copy');
const info = document.querySelector('.informations--message');
copy.addEventListener('click', (e) => {
  const textarea = document.createElement('textarea')
  textarea.value = '95damian.stasiak@gmail.com';
  textarea.style.transform = 'translate(-9999px)';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  info.style.opacity = '1';

  if (info.style.opacity === '1') {
    setTimeout(() => info.style.opacity = '0', 3000);
  }
})