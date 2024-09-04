window.addEventListener('load', function() {
  setTimeout(function() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'none';
  }, 500); // 3000 milliseconds = 3 seconds
});

document.addEventListener('DOMContentLoaded', function() {
  var typed = new Typed("#text", {
    strings: ["Full Stack Web Developer", "Software Engineer", "Gamer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollElements = document.querySelectorAll(".animate-on-scroll");

  const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
      elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - offset)
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add('fade-in');
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 150)) {
        displayScrollElement(el);
      }
    });
  };

  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  });

  // Trigger animations on page load
  handleScrollAnimation();
});