const scrool = () => {
  const navBar = document.querySelector('.header__nav');
  const links = navBar.querySelectorAll('a');

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const section = document.querySelector(link.getAttribute('href'));
      if (section) {
        // section.scrollIntoView({ // этот не подерживается всеми браузерами
        //   block: 'start',
        //   behavior: 'smooth'
        // });
        seamless.scrollIntoView(section, { // https://www.npmjs.com/package/seamless-scroll-polyfill библиотека
          behavior: "smooth",
          block: "start",
          inline: "center",
        });
      }
    });
  });
}

scrool();