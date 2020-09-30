const navButtonElem = document.querySelector('.nav-button');
const navListElem = document.querySelector('.nav-list');

const makeNavButtonAlive = function() {
  const media600 = window.matchMedia('(min-width: 600px)');
  if (!media600.matches) {
    navListElem.classList.add('hidden');
    navButtonElem.setAttribute('data-listener', 'true');
    navButtonElem.addEventListener('click', function() {
      navListElem.classList.toggle('hidden')
      navButtonElem.classList.toggle('nav-button-close');
      if (navButtonElem.getAttribute('aria-expanded') === 'true') {
        navButtonElem.setAttribute('aria-expanded', 'false');
      } else {
        navButtonElem.setAttribute('aria-expanded', 'true');
      }
    });
  } else {
    navListElem.classList.remove('hidden');
  }
};

makeNavButtonAlive();

window.addEventListener('resize', function() {
  if (navButtonElem.getAttribute('data-listener') !== 'true') {
    makeNavButtonAlive();
  }
});
