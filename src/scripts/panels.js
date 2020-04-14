import gsap from 'gsap';

const $ = {
  panels: document.querySelectorAll('.panel'),
};

$.panels.forEach((e) => e.addEventListener('click', expandPanel));

function expandPanel(e) {
  const activePanel = e.currentTarget;
  console.log(activePanel);
  // activePanel.classList.toggle('panel--expanded');

  $.panels.forEach((e) =>
    gsap.to(e, {
      width: '10%',
      duration: 0.7,
      ease: 'power4.out',
    })
  );

  gsap.to(activePanel, {
    duration: 1,
    width: '70%',
    duration: 0.7,
    ease: 'power4.out',
  });

  gsap.set(activePanel.querySelector('.panel__img--large'), {
    y: '-101%',
  });

  gsap.to(activePanel.querySelector('.panel__img--large'), {
    autoAlpha: 1,
    duration: 0.7,
    delay: 0.5,
    ease: 'power4.out',
  });

  gsap.set('.panel__desc', { autoAlpha: 1 });

  gsap.to('.block-animate span', {
    y: 0,
    autoAlpha: 1,
    stagger: 0.16, // 0.1 seconds between when each ".box" element starts animating
    duration: 1,
    ease: 'power2.out',
    delay: 1,
  });

  gsap.to('.panel__meta', {
    opacity: 0.7,
    stagger: 0.16, // 0.1 seconds between when each ".box" element starts animating
    duration: 1,
    ease: 'power2.out',
    delay: 1,
  });

  gsap.to('.camera-trigger', {
    delay: 2,
    ease: 'elastic.out(0.8, 0.4)',
    y: 0,
    duration: 3,
  });

  gsap.to('.logo .bar', {
    width: 3,
    marginRight: 3,
  });

  gsap.to('.logo .column:first-child .bar', {
    width: 26,
    delay: 1,
  });
}
