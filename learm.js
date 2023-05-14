let open = document.querySelectorAll('.sanket');
let close = document.querySelector('.sank');
let hack = document.querySelectorAll('.name');
let pass = document.querySelector('.pass');
let hide = document.querySelector('.hide');
let check = document.querySelector('.check');
let show = document.querySelector('.show');
let back = document.querySelector('.back');

show.classList.remove('show');

let sam = function (e) {
    let ram = parseInt(document.querySelector('.pass').value);
    console.log(ram);
    let sham = document.querySelector('.name').value;
    console.log(sham);

    if (sham == 'webwiz' && ram == '2023') {
        e.preventDefault()
        // alert("Correct Password 🎉");
        hide.classList.remove('hide');
        show.classList.add('show');

    }
    else {
        console.log('hii');
        alert("Incorrect ID or Password❌");
    }
}
check.addEventListener('click', sam);

let sita = function () {
    show.classList.remove('show');
    hide.classList.add('hide');
}
back.addEventListener('click', sam);


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let preview = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < preview.length; i++) {
        preview[i].className = preview[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    preview[slideIndex - 1].className += " active";
    captionText.innerHTML = preview[slideIndex - 1].alt;
}
