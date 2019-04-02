const about__h3 = document.querySelector('.about__h3');
const about__h3Y = about__h3.offsetTop;

window.addEventListener('scroll', () => {
  const windowScroll = window.scrollY;
  // console.log(windowScroll);
  const windowHeight = window.outerHeight;
  console.log(windowHeight);
  const windowBottom = windowScroll + windowHeight;
  // console.log(windowBottom);

  if (about__h3Y < windowBottom) {
    about__h3.style.color = 'red';
  }

})