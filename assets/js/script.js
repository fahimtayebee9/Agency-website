/*=========================================================================
                    Preloader
=========================================================================*/
$(document).ready(function () {
    preloader.style.display = "none";
    title.innerHTML = "Home";
});

/*=========================================================================
                    Analys Form
=========================================================================*/
const dropForm = document.querySelector('#dropForm');
const icForm = document.querySelector('#ic-form');
document.querySelector('#formButton').addEventListener('click',function(){
    if (dropForm.style.display !== "none") {
        dropForm.style.display = "none";
        dropForm.style.height = "0%";
    } else {
        dropForm.style.display = "block";
        dropForm.style.height = "100%";
    }
    $(this).toggleClass("rotate");
});
document.querySelector('#close-form').addEventListener('click',function(){
    if (dropForm.style.display !== "none") {
        dropForm.style.display = "none";
    } else {
        dropForm.style.display = "block";
    }
    $('#formButton').toggleClass("rotate"); 
});
