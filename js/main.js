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

console.log(example__firstOffset, example__secondOffset, example__thirdOffset, example__fourthOffset);


window.addEventListener('scroll', () => {
  const windowScroll = window.scrollY;
  const windowHeight = window.innerHeight;
  const windowBottom = windowScroll + windowHeight;

  // if (about__h3Start < windowBottom) {
  //   about__h3.style.color = 'red';
  // }

  // if (about__mainTextStart < windowBottom) {
  //   about__mainText.style.color = 'red';
  // }

  // if (skillsStart + 110 < windowBottom) {
  //   skills__section.style.backgroundColor = 'red';
  //   skills__h3.style.color = 'white';
  // }


})