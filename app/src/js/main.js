import Scrollbar from "smooth-scrollbar/dist/smooth-scrollbar";
import slick from "slick-carousel/slick/slick.min";


//АККОРДЕОН НА СТРАНИЦЕ "ЛЮБОЙ ФОРМАТ"
let formatPageGalleryList = document.body.querySelector('.format-page-gallery-list');
let formatPageGalleryListContentBlocks = document.body.querySelectorAll('.format-page-gallery-list__content-block');

formatPageGalleryList.addEventListener('click', showContentFormatPage);
function showContentFormatPage(event) {
    let target = event.target && event.target.closest('.format-page-gallery-list__title-block');

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


//СКРОЛЛБАР НА СТРАНИЦЕ "ЛЮБОЙ ФОРМАТ"
let scrollElems = document.body.querySelectorAll('.format-page-gallery-list__content-block-inner-1');
for (let scrollElem of scrollElems) {
    Scrollbar.init(scrollElem, {
        alwaysShowTracks: true,
    });
}


//СЛАЙДЕР НА ЛЕНТЕ С ЦИТАТАМИ
$('.quote-list').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    prevArrow: '.quote-list-arrow-left',
    nextArrow: '.quote-list-arrow-right',
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
});
