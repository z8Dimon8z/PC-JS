// акардеон
const contents = document.querySelectorAll('.program-line__content');
contents.forEach(elem => {
const title = elem.querySelector('.program-line__title');
const descr = elem.querySelector('.program-line__descr');

  title.addEventListener('click', ()=> {
    if (!descr.classList.contains('active')){
      descr.classList.toggle('active');
    } else{
      descr.classList.remove('active');
    }

  });

});



