//scroll top
let calcScrollValue=()=>{
    let scrollProgress=document.getElementById("scroll");
    let progressllvalue=document.getElementById("value");
    let pos=document.documentElement.scrollTop;
    let calcHeight=document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue=Math.round((pos * 100) / calcHeight);
    if (pos>300){
        scrollProgress.style.display="grid";
    }else{
        scrollProgress.style.display="none";
    }
    scrollProgress.addEventListener("click",()=>{
        document.documentElement.scrollTop=0;
    })
    scrollProgress.style.background=`conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`
}
window.onscroll = calcScrollValue;

// menu
const nav = document.querySelector('#nav');
const menu = document.querySelector('#menu');
const menuToggle = document.querySelector('.nav__toggle');
let isMenuOpen = false;


// TOGGLE MENU ACTIVE STATE
menuToggle.addEventListener('click', e => {


    e.preventDefault();
    isMenuOpen = !isMenuOpen;

    // toggle a11y attributes and active class
    menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
    menu.hidden = !isMenuOpen;
    nav.classList.toggle('nav--open');
});


// TRAP TAB INSIDE NAV WHEN OPEN
nav.addEventListener('keydown', e => {
    // abort if menu isn't open or modifier keys are pressed
    if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
        return;
    }

    // listen for tab press and move focus
    // if we're on either end of the navigation
    const menuLinks = menu.querySelectorAll('.nav__link');
    if (e.keyCode === 9) {
        if (e.shiftKey) {
            if (document.activeElement === menuLinks[0]) {
                menuToggle.focus();
                e.preventDefault();
            }
        } else if (document.activeElement === menuToggle) {
            menuLinks[0].focus();
            e.preventDefault();
        }
    }
});



//slider
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

let slideIndexAuto = 0;
showSlidesAuto();

function showSlidesAuto() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndexAuto++;
    if (slideIndexAuto > slides.length) {slideIndexAuto = 1}
    slides[slideIndexAuto-1].style.display = "block";
    setTimeout(showSlidesAuto, 4000); // Change image every 2 seconds
}


//learn api
let ajaxLoaded=()=>{
    let itemLearn=""
    $.ajax({
        url:"api/learn.json",
        method:"GET",
        type:"json",
        data:{},
        success:function (response) {
            response.map(function (elem,index) {
                itemLearn+=`<div class="itemPostLearn">
             <img src="${elem.image}" alt="" 
                  style="">
             <h3>${elem.title}</h3>
             <h3>${elem.title2}</h3>
             <h4>${elem.description}</h4>
             <a href="about2.html">Read More</a>
             </div>
            `})
            document.getElementById("learn").innerHTML=itemLearn
        }
    })
}
document.addEventListener("DOMContentLoaded",ajaxLoaded)
// document.getElementById("learn").style.backgroundColor= "red"


//facts
function animate(obj, initVal, lastVal, duration) {
    let startTime = null;

    //get the current timestamp and assign it to the currentTime variable
    let currentTime = Date.now();

    //pass the current timestamp to the step function
    const step = (currentTime ) => {

        //if the start time is null, assign the current time to startTime
        if (!startTime) {
            startTime = currentTime ;
        }

        //calculate the value to be used in calculating the number to be displayed
        const progress = Math.min((currentTime - startTime)/ duration, 1);

        //calculate what to be displayed using the value gotten above
        obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

        //checking to make sure the counter does not exceed the last value (lastVal)
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            window.cancelAnimationFrame(window.requestAnimationFrame(step));
        }
    };
    //start animating
    window.requestAnimationFrame(step);
}
let text1 = document.getElementById('0101');
let text2 = document.getElementById('0102');
let text3 = document.getElementById('0103');

const load = () => {
    animate(text1, 0, 870, 11000);
    animate(text2, 0, 970, 11000);
    animate(text3, 0, 400, 11000);
}

//slider2
let slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    let i;
    let slides2 = document.getElementsByClassName("mySlides2");
    if (n > slides2.length) {slideIndex2 = 1}
    if (n < 1) {slideIndex2 = slides2.length}
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    slides2[slideIndex2-1].style.display = "block";
}

let slideIndexAuto2 = 0;
showSlidesAuto2();

function showSlidesAuto2() {
    let i;
    let slides2 = document.getElementsByClassName("mySlides2");
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    slideIndexAuto2++;
    if (slideIndexAuto2 > slides2.length) {slideIndexAuto2 = 1}
    slides2[slideIndexAuto2-1].style.display = "block";
    setTimeout(showSlidesAuto2, 7000); // Change image every 7 seconds
}
