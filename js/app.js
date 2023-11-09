// <=========== SCROLL HEADER ===========>
function scrollHeader() {
  const nav = document.getElementById('header');
  if (this.scrollY >= 50) nav.classList.add('active-header');
  else nav.classList.remove('active-header');
}
// evento adicionado ao iniciar o scroll...
window.addEventListener('scroll', scrollHeader);

// <=========== DROPDOWN MENU ===========>

const dropdownMenu1 = document.getElementById('dropdown-item-1');
const dropdownMenu2 = document.getElementById('dropdown-item-2');
const dropdownMenu3 = document.getElementById('dropdown-item-3');

const menuItem1 = document.getElementById('menu-item-1');
const menuItem2 = document.getElementById('menu-item-2');
const menuItem3 = document.getElementById('menu-item-3');

function showDropdownMenu1(event) {
  event.preventDefault();
  dropdownMenu1.classList.toggle('active-dropdown-menu');
  dropdownMenu2.classList.remove('active-dropdown-menu');
  dropdownMenu3.classList.remove('active-dropdown-menu');
}

function showDropdownMenu2(event) {
  event.preventDefault();
  dropdownMenu2.classList.toggle('active-dropdown-menu');
  dropdownMenu1.classList.remove('active-dropdown-menu');
  dropdownMenu3.classList.remove('active-dropdown-menu');
}

function showDropdownMenu3(event) {
  event.preventDefault();
  dropdownMenu3.classList.toggle('active-dropdown-menu');
  dropdownMenu1.classList.remove('active-dropdown-menu');
  dropdownMenu2.classList.remove('active-dropdown-menu');
}

menuItem1.addEventListener('click', showDropdownMenu1);
menuItem2.addEventListener('click', showDropdownMenu2);
menuItem3.addEventListener('click', showDropdownMenu3)

function closeDropdownMenu() {
  dropdownMenu1.classList.remove('active-dropdown-menu');
  dropdownMenu2.classList.remove('active-dropdown-menu');
  dropdownMenu3.classList.remove('active-dropdown-menu');
}

dropdownMenu1.addEventListener('mouseleave', closeDropdownMenu);
dropdownMenu2.addEventListener('mouseleave', closeDropdownMenu);
dropdownMenu3.addEventListener('mouseleave', closeDropdownMenu);

// #Projeto: Nubank | 15 - Codificação: Menu pt.2