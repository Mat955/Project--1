'use strict';

var modalOverlayId = '#overlay';
var openMyModalId = '#my-modal';
var openModalQuitId = '#my-modal-quit';
var openModalMessageId = '#my-modal-message';


initialize();

function toggleMenu(visible) {
    document.querySelector('.sidebar').classList.toggle('.show-sidebar', visible);
    document.querySelector('.sidebar-small').classList.toggle('big', visible);
    document.querySelector('.btn').classList.toggle('hide', visible);
}

function closeModal() {
    document.querySelector(modalOverlayId).classList.remove('show');
}

function initialize() {
    registerListeners();
}

function registerListeners() {
    document.querySelector('.icons-ham').addEventListener('click', function (e) {
        e.preventDefault();
        toggleMenu();
    });
    document.querySelectorAll(modalOverlayId, '.js--close-modal').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            closeModal();
        });
    });
    document.querySelector(modalOverlayId).addEventListener('click', function (e) {
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
        openModal(openMyModalId);
    });

    document.querySelector('.top-bar .modal-quit-open').addEventListener('click', function () {
        openModal(openModalQuitId);
    });

    document.querySelector('.sidebar a.postback').addEventListener('click', function () {
        openModal(openModalMessageId);
    });
}

function openModal(modal) {
    document.querySelectorAll(modalOverlayId + '> *').forEach(function (modal) {
        modal.classList.remove('show');
    });
    document.querySelector(modalOverlayId).classList.add('show');
    document.querySelector(modal).classList.add('show');
}