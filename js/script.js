function toggleMenu(visible) {
    document.querySelector('.sidebar').classList.toggle('show', visible)
    document.querySelector('.sidebar-small').classList.toggle('big', visible)
    document.querySelector('.btn').classList.toggle('hide', visible)
}

document.querySelector('.icons-ham').addEventListener('click', function (e) {
    e.preventDefault();
    toggleMenu();
});