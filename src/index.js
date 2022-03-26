const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const gradients = [
  'linear-gradient(to right top, #1D976C, #93F9B9)',
  'linear-gradient(to right top, #EB3349, #F45C43)',
  'linear-gradient(to right top, #DD5E89, #F7BB97)',
];

const options = {
  threshold: 0.7,
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){
  entries.forEach(entry => {
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    const gradientIndex = entry.target.getAttribute('data-index');
    const coordinate = activeAnchor.getBoundingClientRect();
    if(entry.isIntersecting) {
      bubble.style.setProperty('height', `${coordinate.height}px`);
      bubble.style.setProperty('width', `${coordinate.width}px`);
      bubble.style.setProperty('top', `${coordinate.top}px`);
      bubble.style.setProperty('left', `${coordinate.left}px`);
      bubble.style.background = gradients[gradientIndex];
      activeAnchor.style.color = 'white';
    } else {
      activeAnchor.style.color = 'black';
    }; 
  });
};

sections.forEach(section => {
  observer.observe(section);
});
