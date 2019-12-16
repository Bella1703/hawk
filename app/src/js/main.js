import Scrollbar from "smooth-scrollbar/dist/smooth-scrollbar";
import slick from "slick-carousel/slick/slick.min";


//АККОРДЕОН НА СТРАНИЦЕ "ЛЮБОЙ ФОРМАТ"
let formatPageGalleryList = document.body.querySelector('.format-page-gallery-list');
let formatPageGalleryListContentBlocks = document.body.querySelectorAll('.format-page-gallery-list__content-block');

formatPageGalleryList.addEventListener('click', showContentFormatPage);
function showContentFormatPage(event) {
    if (event.target.classList.contains('format-page-gallery-list__title-block')) {
        if (event.target.nextElementSibling.classList.contains('display-none')) {
            for (let formatPageGalleryListContentBlock of formatPageGalleryListContentBlocks) {
                formatPageGalleryListContentBlock.classList.add('display-none');
            }
        }
        event.target.nextElementSibling.classList.toggle('display-none');


        for (let formatPageGalleryListContentBlock of formatPageGalleryListContentBlocks) {
            formatPageGalleryListContentBlock.parentElement.removeAttribute("style");
        }


        if (!event.target.nextElementSibling.classList.contains('display-none')) {
            event.target.parentElement.style.height = '100%';
        } else if (event.target.nextElementSibling.classList.contains('display-none')) {
            event.target.parentElement.removeAttribute("style");
        }
    }
    else if (event.target.parentElement.classList.contains("format-page-gallery-list__title-block")) {
        if (event.target.parentElement.nextElementSibling.classList.contains('display-none')) {
            for (let formatPageGalleryListContentBlock of formatPageGalleryListContentBlocks) {
                formatPageGalleryListContentBlock.classList.add('display-none');
            }
        }
        event.target.parentElement.nextElementSibling.classList.toggle('display-none');

        if (!event.target.nextElementSibling.classList.contains('display-none')) {
            event.target.parentElement.parentElement.style.height = '100%';
        }
        else if (event.target.nextElementSibling.classList.contains('display-none')) {
            event.target.parentElement.parentElement.style.height = '';
        }
    }
    else if (event.target.parentElement.parentElement.classList.contains("format-page-gallery-list__title-block")) {
        if (event.target.parentElement.parentElement.nextElementSibling.classList.contains('display-none')) {
            for (let formatPageGalleryListContentBlock of formatPageGalleryListContentBlocks) {
                formatPageGalleryListContentBlock.classList.add('display-none');
            }
        }
        event.target.parentElement.parentElement.nextElementSibling.classList.toggle('display-none');
        if (!event.target.nextElementSibling.classList.contains('display-none')) {
            event.target.parentElement.parentElement.parentElement.style.height = '100%';
        }
        else if (event.target.nextElementSibling.classList.contains('display-none')) {
            event.target.parentElement.parentElement.parentElement.style.height = '';
        }
    }
}











//СКРОЛЛБАР НА СТРАНИЦЕ "ЛЮБОЙ ФОРМАТ"
Scrollbar.init(document.querySelector('.format-page-gallery-list__content-block'), {
    alwaysShowTracks: true,
});


//СЛАЙДЕР НА ЛЕНТЕ С ЦИТАТАМИ
$('.quote-list').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    prevArrow: '.quote-list-arrow-left',
    nextArrow: '.quote-list-arrow-right',
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 10000,
});
