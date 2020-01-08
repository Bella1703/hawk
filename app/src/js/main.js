import Scrollbar from "smooth-scrollbar/dist/smooth-scrollbar";

//ПЛАВНЫЕ ЯКОРНЫЕ ССЫЛКИ
$(document).ready(function () {
    $("nav").on("click", "a", function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

//ВЫПАДАЮЩЕЕ МЕНЮ
let navBurger = document.body.querySelector(".nav-burger");
let navListSmall = document.body.querySelector(".nav-list-small");

function Nav() {
    if (navListSmall.classList.contains("display-none")) {
        navListSmall.classList.remove("display-none");
    } else {
        navListSmall.classList.add("display-none");
    }
}

navBurger.addEventListener("click", Nav);



//АККОРДЕОН НА СТРАНИЦЕ "ЛЮБОЙ ФОРМАТ"
let formatPageGalleryList = document.body.querySelector('.format-page-gallery-list');
let formatPageGalleryListContentBlocks = document.body.querySelectorAll('.format-page-gallery-list__content-block');

formatPageGalleryList.addEventListener('click', showContentFormatPage);
function showContentFormatPage(event) {
    let target = event.target;
    let targetParent = event.target.parentElement;
    let targetParentParent = event.target.parentElement.parentElement;

    if (target.classList.contains('format-page-gallery-list__title-block')) {
        if (target.nextElementSibling.classList.contains('display-none-important')) {
            for (let formatPageGalleryListContentBlock of formatPageGalleryListContentBlocks) {
                formatPageGalleryListContentBlock.classList.add('display-none-important');
            }
        }
        target.nextElementSibling.classList.toggle('display-none-important');


        for (let formatPageGalleryListContentBlock of formatPageGalleryListContentBlocks) {
            formatPageGalleryListContentBlock.parentElement.removeAttribute("style");
        }


        if (!target.nextElementSibling.classList.contains('display-none-important')) {
            target.parentElement.style.height = '100%';
        } else if (target.nextElementSibling.classList.contains('display-none-important')) {
            target.parentElement.removeAttribute("style");
        }
    }

    if (target.parentElement.classList.contains('format-page-gallery-list__title-block')) {
        if (target.parentElement.nextElementSibling.classList.contains('display-none-important')) {
            for (let formatPageGalleryListContentBlock of formatPageGalleryListContentBlocks) {
                formatPageGalleryListContentBlock.classList.add('display-none-important');
            }
        }
        target.parentElement.nextElementSibling.classList.toggle('display-none-important');


        for (let formatPageGalleryListContentBlock of formatPageGalleryListContentBlocks) {
            formatPageGalleryListContentBlock.parentElement.removeAttribute("style");
        }


        if (!target.parentElement.nextElementSibling.classList.contains('display-none-important')) {
            target.parentElement.parentElement.style.height = '100%';
        } else if (target.parentElement.nextElementSibling.classList.contains('display-none-important')) {
            target.parentElement.parentElement.removeAttribute("style");
        }
    }

    if (target.parentElement.parentElement.classList.contains('format-page-gallery-list__title-block')) {
        if (target.parentElement.parentElement.nextElementSibling.classList.contains('display-none-important')) {
            for (let formatPageGalleryListContentBlock of formatPageGalleryListContentBlocks) {
                formatPageGalleryListContentBlock.classList.add('display-none-important');
            }
        }
        target.parentElement.parentElement.nextElementSibling.classList.toggle('display-none-important');


        for (let formatPageGalleryListContentBlock of formatPageGalleryListContentBlocks) {
            formatPageGalleryListContentBlock.parentElement.removeAttribute("style");
        }


        if (!target.parentElement.parentElement.nextElementSibling.classList.contains('display-none-important')) {
            target.parentElement.parentElement.parentElement.style.height = '100%';
        } else if (target.parentElement.parentElement.nextElementSibling.classList.contains('display-none-important')) {
            target.parentElement.parentElement.parentElement.removeAttribute("style");
        }
    }

}

//изменение стрелок в аккардеоне
let formatPageGalleryListArrowIcon = document.body.querySelector('.format-page-gallery-list__arrow-icon');

formatPageGalleryList.addEventListener('click', changeArrowFormatPageGallery);
function changeArrowFormatPageGallery(event) {
    for (let formatPageGalleryListContentBlock of formatPageGalleryListContentBlocks) {
        if (formatPageGalleryListContentBlock.classList.contains('display-none-important')) {
            formatPageGalleryListContentBlock.previousElementSibling.lastElementChild.classList.add('format-page-gallery-list__arrow-icon-down');
            formatPageGalleryListContentBlock.previousElementSibling.lastElementChild.classList.remove('format-page-gallery-list__arrow-icon-up');
        }
        else if (!formatPageGalleryListContentBlock.classList.contains('display-none-important')) {
            formatPageGalleryListContentBlock.previousElementSibling.lastElementChild.classList.add('format-page-gallery-list__arrow-icon-up');
            formatPageGalleryListContentBlock.previousElementSibling.lastElementChild.classList.remove('format-page-gallery-list__arrow-icon-down');
        }
    }
}

// formatPageGalleryList.addEventListener('click', changeHeightFormatPageGalleryList);
//
// function changeHeightFormatPageGalleryList () {
//     let formatPageGalleryListItems = document.body.querySelectorAll('.format-page-gallery-list-item');
//     let formatPageGalleryListContentBlock = document.body.querySelectorAll('.format-page-gallery-list__content-block');
//
//
//     if (formatPageGalleryListItems[0].contains('display-none-important') && formatPageGalleryListItems[1].contains('display-none-important') && formatPageGalleryListItems[2].contains('display-none-important'))
//     {
//         formatPageGalleryList.style.height = '250px';
//     }
//     else {
//         formatPageGalleryList.style.height = '500px';
//     }
// }
//
//











//СКРОЛЛБАР НА СТРАНИЦЕ "ЛЮБОЙ ФОРМАТ"
let scrollElems = document.body.querySelectorAll('.format-page-gallery-list__content-block-inner-1');
for (let scrollElem of scrollElems) {
    Scrollbar.init(scrollElem, {
        alwaysShowTracks: true,
    });
}


//СЛАЙДЕР НА ЛЕНТЕ С ЦИТАТАМИ
$('.first-quote-list').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    prevArrow: '.first-quote-list-arrow-left',
    nextArrow: '.first-quote-list-arrow-right',
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    draggable: true,
    adaptiveHeight: true,
});

//СЛАЙДЕР НА ВТОРОЙ ЛЕНТЕ С ЦИТАТАМИ
$('.second-quote-list').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    prevArrow: '.second-quote-list-arrow-left',
    nextArrow: '.second-quote-list-arrow-right',
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    draggable: true,
    adaptiveHeight: true,
});


//МОДАЛЬНОЕ ОКНО
let modalWindow = document.body.querySelector(".modal-window");
let submit = document.body.querySelector(".footer-level-1-col-1__submit");
let xIcon = document.body.querySelector(".modal-window__x-icon");
let modalWindowBackground = document.body.querySelector(".modal-window__background");

xIcon.addEventListener('click', hideModalWindow);
modalWindowBackground.addEventListener("click", hideModalWindow);

function showModalWindow() {
    modalWindow.classList.remove("display-none");
    document.body.style.overflow = "hidden";
    setTimeout(hideModalWindow, 5000);
}
function hideModalWindow() {
    modalWindow.classList.add("display-none");
    document.body.style.overflow = "";
}


submit.addEventListener("click", function(){
    let isError = false;
    let email = document.body.querySelector('#mail');
    let errorMail = document.querySelector('.error-mail');
    if (!email.validity.valid || email.value.length < 2) {
        isError = true;
        errorMail.innerHTML = "Введите корректный адрес электронной почты";
        email.classList.add("invalid");
    } else {
        errorMail.innerHTML = "";
        email.classList.remove("invalid");
    }
    if(!isError){
        showModalWindow();
        email.value = "";
    }
});
