const modal = () => {
  const modalBtn = document.querySelector('.modal__button');
  const modal = document.querySelector('.modal');
  const modalInner = document.querySelector('.modal__inner');

  modalInner.style.position = 'relative';

  const addCloseBtn = () => {
    const closeBtn = document.createElement('div');

    closeBtn.classList.add('close-button');
    closeBtn.textContent = 'X';
    closeBtn.style.position = 'absolute';
    closeBtn.style.right = '10px';
    closeBtn.style.top = '10px';
    closeBtn.style.padding = '3px';
    closeBtn.style.width = '20px';
    closeBtn.style.height = '20px';
    closeBtn.style.fontSize = '20px';
    closeBtn.style.cursor = 'pointer';

    modalInner.append(closeBtn);

    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  modalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  modal.addEventListener('click', (event) => {
    const modalContent = event.target.closest('.modal__inner')
    if (!modalContent) {
      modal.style.display = 'none';
    }
  });

  addCloseBtn();
}

modal();