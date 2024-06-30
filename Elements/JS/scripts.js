const wrapper - document.querrySelector('.wrapper');
const loginLink - document.querrySelector('.login link');
const registerLink - document.querrySelector('.register link');
const btnPopup - document.querrySelector('.btnLogin-popup');
const iconClose - document.querrySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
  wrapper.classList.remove('active');

btnPopup.addEventListener('click', ()=> {
  wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
  wrapper.classList.remove('active-popup');
});

