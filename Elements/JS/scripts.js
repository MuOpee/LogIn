const wrapper - document.querrySelector('.wrapper');
const loginLink - document.querrySelector('.login link');
const registerLink - document.querrySelector('.register link');

registerLink.addEventListener('click', ()=> {
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
  wrapper.classList.remove('active');
