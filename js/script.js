allListeners();

function toggleMenu(visible) {
    document.querySelector('.sidebar').classList.toggle('show1', visible)
    document.querySelector('.sidebar-small').classList.toggle('big', visible)
    document.querySelector('.btn').classList.toggle('hide', visible)
}

function closeModal() {
    document.getElementById('overlay').classList.remove('show')
};

function allListeners() {
    document.querySelector('.icons-ham').addEventListener('click', function (e) {
        e.preventDefault();
        toggleMenu();
    });
    document.querySelectorAll('#overlay .js--close-modal').forEach(function (btn) {
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

    document.querySelector('.top-bar .profile').addEventListener('click',
        function () {
            openModal('#my-modal');
        });

    document.querySelector('.top-bar .modal-quit-open').addEventListener('click',
        function () {
            openModal('#my-modal-quit');
        });

    document.querySelector('.sidebar a.postback').addEventListener('click',
        function () {
            openModal('#my-modal-message');
        });
}

function openModal(modal) {
    document.querySelectorAll('#overlay > *').forEach(function (modal) {
        modal.classList.remove('show')
    })
    document.querySelector('#overlay').classList.add('show')
    document.querySelector(modal).classList.add('show')
}