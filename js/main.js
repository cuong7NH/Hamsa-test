


console.log('I\'m CuongF =.=');


// handel menu mobile

const menuIcon = document.getElementById('menu-icon');
const menuMobile = document.querySelector('.menu-mobile');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('menu-close');
    menuMobile.classList.toggle('menu-open');
})


// handel modal 

const modalCloseBtn = document.getElementById('modal-close');

const modalArea = document.getElementById('modal-collection');
const imgModal = document.querySelector('.modal-img');
const modalImgItems = document.querySelectorAll('.collection-item img');

modalImgItems.forEach(modalImgItem => {
    modalImgItem.addEventListener('click', () => {
        modalArea.style.visibility = 'visible';
        const srcImg = modalImgItem.getAttribute('src');
        imgModal.setAttribute('src', srcImg);
        imgModal.classList.add('show-img-modal');
    })
})

modalCloseBtn.addEventListener('click', () => {
    modalArea.style.visibility = 'hidden';
    imgModal.classList.remove('show-img-modal');
})