const sunriseSunset = document.querySelector('.sunrise-sunset');
const sun = document.querySelector('.sun');

function sunriseSunsetHandler() {
  const top = sunriseSunset.getBoundingClientRect().top;
  const height = sunriseSunset.offsetHeight;
  const scrollPercentage = (top + height) / height;

  if (scrollPercentage < 0.5) {
    sun.classList.remove('sun--sunset');
  } else {
    sun.classList.add('sun--sunset');
  }
}

window.addEventListener('scroll', sunriseSunsetHandler);
window.addEventListener('load', sunriseSunsetHandler);
