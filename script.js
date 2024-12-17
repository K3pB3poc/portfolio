var btnOpenPopUp = document.getElementById("btn-popup-open");
var overlay = document.getElementById("overlay");
    popup = document.getElementById("popup");
    btnPopUpClose = document.getElementById("btn-popup-close");
    btnSubmit = document.getElementById("btn-submit");

btnOpenPopUp.addEventListener('click', function() {
    overlay.classList.add('active');
    popup.classList.add('active');
});

btnPopUpClose.addEventListener('click', function() {
    overlay.classList.remove('active');
    popup.classList.remove('active');
});

btnSubmit.addEventListener('click', function() {
    overlay.classList.remove('active');
});