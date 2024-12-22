import '../scss/styles.scss';
import { gsap } from './gsap.js';

gsap.to('.box', {
  x: 1000,
  duration: 8,
  scrollTrigger: {
    trigger: '.box',
    start: 'top 60%',
    end: 'bottom 40%',
    toggleActions: 'restart pause none reverse',
    markers: {
      startColor: 'purple',
      endColor: 'fuchsia',
      fontSize: '3rem',
    },
  },
});
