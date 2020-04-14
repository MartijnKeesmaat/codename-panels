import '../styles/index.sass';
import './pace.min.js';
import './panels.js';
import './loader.js';

function pageTransition() {
  var tl = gsap.timeline();
  tl.to('ul.transition li', {
    duration: 0.5,
    scaleX: 1,
    transformOrigin: 'top left',
    stagger: 0.2,
  });
  tl.to('ul.transition li', {
    duration: 0.5,
    scaleX: 0,
    transformOrigin: 'top left',
    stagger: 0.1,
    delay: 0.1,
  });
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

  to: {
    namespace: ['home'],
  },

  transitions: [
    {
      async leave(data) {
        const done = this.async();

        pageTransition();
        await delay(1000);
        done();
      },

      async enter({ current, next, trigger }) {
        if (next.namespace === 'home') {
          contentAnimation();
        } else if (next.namespace === 'about') {
          contentAnimationGrid();
        }
      },

      async once({ current, next, trigger }) {
        console.log(next.namespace);
        if (next.namespace === 'home') {
          contentAnimation();
        } else if (next.namespace === 'about') {
          contentAnimationGrid();
        }
      },
    },
  ],
});

// barba.init({
//   sync: true,

//   to: {
//     namespace: ['about'],
//   },

//   transitions: [
//     {
//       async leave(data) {
//         const done = this.async();

//         pageTransition();
//         await delay(1000);
//         done();
//       },

//       async enter(data) {
//         contentAnimationGrid();
//       },

//       async once(data) {
//         contentAnimationGrid();
//       },
//     },
//   ],
// });

function contentAnimationGrid() {
  gsap.to('.grid-item:first-child', {
    duration: 1.2,
    autoAlpha: 1,
    delay: 0.3,
    y: 0,
    ease: 'power2.out',
  });

  gsap.to('.grid-item-overlay', {
    duration: 1.8,
    y: '-100%',
    delay: 0.3,
    stagger: 0.2,
    ease: 'power2.out',
  });

  gsap.to('.grid-item--img .test', {
    duration: 1,
    y: 0,
    delay: 0.6,
    stagger: 0.15,
    ease: 'power2.out',
  });
}
