import '../styles/index.scss';

console.log('webpack starterkit');

// import * as gsap from './node_modules/gsap';

function pageTransition() {
  var tl = gsap.timeline();
  tl.to('ul.transition li', {
    duration: 0.5,
    scaleY: 1,
    transformOrigin: 'bottom left',
    stagger: 0.2
  });
  tl.to('ul.transition li', {
    duration: 0.5,
    scaleY: 0,
    transformOrigin: 'bottom left',
    stagger: 0.1,
    delay: 0.1
  });
}

function contentAnimation() {
  var tl = gsap.timeline();
  tl.from('main', {
    duration: 1,
    y: -20,
    autoAlpha: 0,
    delay: 0.3
  });
}

function delay(n) {
  n = n || 2000;
  return new Promise(done => {
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
      }
    }
  ]
});
