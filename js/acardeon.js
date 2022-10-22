// акардеон
const acardeon = () => {
  const contents = document.querySelectorAll('.program-line__content');
  const contentsDescr = document.querySelectorAll('.program-line__descr');


  contents.forEach((elem) => {
    const title = elem.querySelector('.program-line__title');
    const descr = elem.querySelector('.program-line__descr');

    descr.style.transition = 'all .3s'; // для плавности появления
    descr.style.overflow = 'hidden'; // для плавности появления


    title.addEventListener('click', () => {
      contentsDescr.forEach((tab) => {

        if (tab === descr) {
          tab.style.height = tab.scrollHeight + 'px'; // для плавности появления
          // tab.classList.add('active'); // обычное появление
        } else {
          tab.style.height = 0; // для плавности появления
          // tab.classList.remove('active'); // обычное появление
        }
      });


    });

  });
};

acardeon();