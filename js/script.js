'use strict';

var modalOverlay = '#overlay';
var closeAllModalOverlay = '#overlay > *';

initialize();

function toggleMenu(visible) {
    document.querySelector('.sidebar').classList.toggle('.show-sidebar', visible);
    document.querySelector('.sidebar-small').classList.toggle('big', visible);
    document.querySelector('.btn').classList.toggle('hide', visible);
}

function closeModal() {
    document.querySelector(modalOverlay).classList.remove('show');
}

function initialize() {
    registerListeners();
}

function registerListeners() {
    document.querySelector('.icons-ham').addEventListener('click', function (e) {
        e.preventDefault();
        toggleMenu();
    });
    document.querySelectorAll((modalOverlay), '.js--close-modal').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            closeModal();
        });
    });
    document.querySelector('#overlay').addEventListener('click', function (e) {
        if (e.target === this) {
            closeModal();
        }
    });
    document.addEventListener('keyup', function (e) {
        if (e.keyCode === 27) {
            closeModal();
        }
    });

    document.querySelector('.top-bar .profile').addEventListener('click', function () {
        openModal('#my-modal');
    });

    document.querySelector('.top-bar .modal-quit-open').addEventListener('click', function () {
        openModal('#my-modal-quit');
    });

    document.querySelector('.sidebar a.postback').addEventListener('click', function () {
        openModal('#my-modal-message');
    });
}

function openModal(modal) {
    document.querySelectorAll(closeAllModalOverlay).forEach(function (modal) {
        modal.classList.remove('show');
    });
    document.querySelector(modalOverlay).classList.add('show');
    document.querySelector(modal).classList.add('show');
}