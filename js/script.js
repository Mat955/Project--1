function toggleMenu(visible) {
    document.querySelector('.sidebar').classList.toggle('show1', visible)
    document.querySelector('.sidebar-small').classList.toggle('big', visible)
    document.querySelector('.btn').classList.toggle('hide', visible)
}

document.querySelector('.icons-ham').addEventListener('click', function (e) {
    e.preventDefault();
    toggleMenu();
})


function closeModal() {
    document.getElementById('overlay').classList.remove('show')
}

document.querySelectorAll('#overlay .js--close-modal').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        closeModal();
    })
})

document.querySelector('#overlay').addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
})


document.addEventListener('keyup', function (e) {
    if (e.keyCode === 27) {
        closeModal();
    }
})


function openModal(modal) {
    document.querySelectorAll('#overlay > *').forEach(function (modal) {
        modal.classList.remove('show')
    })
    document.querySelector('#overlay').classList.add('show')
    document.querySelector(modal).classList.add('show')
}

document.querySelector('.top-bar .profile').addEventListener('click',
    function () {
        openModal('#myModal');
    });

document.querySelector('.top-bar .icon-quit').addEventListener('click',
    function () {
        openModal('#myModal-quit');
    });

document.querySelector('.sidebar .icon-postback').addEventListener('click',
    function () {
        openModal('#myModal-message');
    });