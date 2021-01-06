document.querySelector('.info__link_cord').addEventListener('click', (e) => {
  e.preventDefault();
  const popup = document.querySelector('.info__popup');
  const copyText = document.querySelector('.info__textarea');

  popup.classList.remove('info__popup_hidden');

  copyText.select();
  document.execCommand('copy');

  setTimeout(() => popup.classList.add('info__popup_hidden'), 1500);
});
