import '../styles/index.sass';
import './pace.min.js';
import './panels.js';

function pageTransition() {
  // var tl = gsap.timeline();
  // tl.to('ul.transition li', {
  //   duration: 0.5,
  //   scaleY: 1,
  //   transformOrigin: 'bottom left',
  //   stagger: 0.2,
  // });
  // tl.to('ul.transition li', {
  //   duration: 0.5,
  //   scaleY: 0,
  //   transformOrigin: 'bottom left',
  //   stagger: 0.1,
  //   delay: 0.1,
  // });
}

function contentAnimation() {
  var tl = gsap.timeline();
  gsap.to('.panel-overlay', {
    duration: 1.8,
    x: '100%',
    delay: 0.3,
    stagger: 0.2,
  });

  gsap.to('.panel-content', {
    duration: 1,
    x: 0,
    delay: 0.6,
    stagger: 0.15,
  });
}

function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

barba.init({
  sync: true,

  transitions: [
    {
      async leave(data) {
        const done = this.async();

        pageTransition();
        await delay(1000);
        done();
      },

      async enter(data) {
        contentAnimation();
      },

      async once(data) {
        contentAnimation();
      },
    },
  ],
});
