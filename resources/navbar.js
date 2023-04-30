window.onload = function () {

    const menu_btn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    menu_btn.addEventListener('click', function () {
        menu.classList.toggle('active')
        menu_btn.classList.toggle('active')
    })
}
