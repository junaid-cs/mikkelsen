document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.navigation-menu-box');
    const dorpdowntoggle = document.querySelector('.dorpdowntoggle');
    const navMenu = document.querySelector('.level1');
    const submenu = document.querySelector('#level2');
    console.log(dorpdowntoggle,'submenu')

    toggleButton.addEventListener('click', function () {
      navMenu.classList.toggle('visible');
    });
    dorpdowntoggle.addEventListener('click', function () {
      submenu.classList.toggle('d-block');
    });
  });