function toggleMenu(e){document.querySelector(".sidebar").classList.toggle("show1",e),document.querySelector(".sidebar-small").classList.toggle("big",e),document.querySelector(".btn").classList.toggle("hide",e)}function closeModal(){document.getElementById("overlay").classList.remove("show")}function openModal(e){document.querySelectorAll("#overlay > *").forEach(function(e){e.classList.remove("show")}),document.querySelector("#overlay").classList.add("show"),document.querySelector(e).classList.add("show")}document.querySelector(".icons-ham").addEventListener("click",function(e){e.preventDefault(),toggleMenu()}),document.querySelectorAll("#overlay .js--close-modal").forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),closeModal()})}),document.querySelector("#overlay").addEventListener("click",function(e){e.target===this&&closeModal()}),document.addEventListener("keyup",function(e){27===e.keyCode&&closeModal()}),document.querySelector(".top-bar .profile").addEventListener("click",function(){openModal("#myModal")}),document.querySelector(".top-bar .icon-quit").addEventListener("click",function(){openModal("#myModal-quit")}),document.querySelector(".sidebar a.postback").addEventListener("click",function(){openModal("#myModal-message")});