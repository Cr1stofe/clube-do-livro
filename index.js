const dropdown = document.querySelector('.dropdown');
const icone_botao = document.querySelector('.dropdown img');
const dropdown_menu = document.querySelector('.dropdown_menu');

dropdown.onclick = function(){
    dropdown_menu.classList.toggle('open');
    const isOpen = dropdown_menu.classList.contains('open');
}