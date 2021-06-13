/*=========================================================================
                    Preloader
=========================================================================*/
$(document).ready(function () {
    setTimeout(function(){
        document.getElementById('preloader').style.display = "none";
        title.innerHTML = "Home";
    },3000);

    // CHANGE STEPS CLASS WHILE CHECKING RESPONSIVE
    $(window).resize(function() {
        if(window.innerWidth < 575){
            $("#step2").removeClass("apr-count-r");
            $("#step4").removeClass("apr-count-r");
            $("#step2").addClass("apr-count-l");
            $("#step4").addClass("apr-count-l");
        }
        else{
            $("#step2").removeClass("apr-count-l");
            $("#step4").removeClass("apr-count-l");
            $("#step2").addClass("apr-count-r");
            $("#step4").addClass("apr-count-r");
        }
    });
});

/*=========================================================================
                    Analys Form
=========================================================================*/
const dropForm = document.querySelector('#dropForm');
const icForm = document.querySelector('#ic-form');
document.querySelector('#frmBtn').addEventListener('click',function(){
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

/*=========================================================================
                    FIXED MENUBAR
=========================================================================*/
function scrollBody() {
    $(document).ready(function () {
        $(window).scroll(function () {
            var scrollheight = $(window).scrollTop();
            if (scrollheight > 80) {
                $("#menu").css("background", "#fff");
                $("#menu").addClass("fixed-menu");
                $("#menu").addClass("shadow-head");
            } else {
                $("#menu").removeClass("fixed-menu");
                $("#menu").removeClass("shadow-head");
            }
        });
    });
}

// SET STEPS CLASS ONLOAD
function screenSize(){
    if(window.innerWidth < 575){
        if(document.querySelector('#step2').classList.contains('apr-count-r')){
            $("#step2").removeClass("apr-count-r");
            $("#step4").removeClass("apr-count-r");
        }
        $("#step2").addClass("apr-count-l");
        $("#step4").addClass("apr-count-l");
    }
    else{
        if(document.querySelector('#step2').classList.contains('apr-count-r')){
            $("#step2").removeClass("apr-count-l");
            $("#step4").removeClass("apr-count-l");
        }
        $("#step2").addClass("apr-count-r");
        $("#step4").addClass("apr-count-r");
    }
}