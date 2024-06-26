import './_components.js';


const seoText = document.querySelector('.seo__desc')
const seoTextMore = seoText.querySelector('.more')
const seoBtn = document.querySelector('.seo__link')
seoBtn.addEventListener('click', e => {
  e.preventDefault()
  let isActive = seoText.classList.toggle('active')
  if(isActive){
    seoTextMore.style.display = 'inline';
    seoBtn.textContent = 'Скрыть';
  } else {
     seoTextMore.style.display = 'none';
    seoBtn.textContent = 'Читать больше';
  }
})



const modalButtons = document.querySelectorAll('.modal-btn')
const modal = document.querySelector('.modal')
const modalBody = modal.querySelector('.modal__body')
const modalClose = modal.querySelector('.modal__close')

modalButtons.forEach(btn => {
  const textForInput = btn.dataset.text || "Привет! Хочу записаться на онлайн-консультацию."
  const areaModal = modal.querySelector('textarea')
  btn.addEventListener('click', e => {
    areaModal.textContent = textForInput
    modal.classList.add('active')
  })
})

modalClose.addEventListener('click', e => {
  modal.classList.remove('active')
})
modal.addEventListener('click', e => {
  modal.classList.remove('active')
})
modalBody.addEventListener('click', e => {
  e.stopPropagation()
})


const menu = document.querySelector('.menu')
const menuLinks = menu.querySelectorAll('.nav__link')
const menuBtn = document.querySelector('.header__burger')

menuBtn.addEventListener('click', e => {
  menuBtn.classList.toggle('active')
  menu.classList.toggle('active')
})


menuLinks.forEach(link => {
  link.addEventListener('click', e => {
    menu.classList.remove('active')
  })
})
