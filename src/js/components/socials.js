const socBtn = document.querySelector('.hero-btn')
const socContainer = document.querySelector('.hero__socials')

socBtn.addEventListener('click', e => {
  socContainer.classList.toggle('active')
})
socContainer.addEventListener('click', e => {
  e.stopPropagation()
})
document.body.addEventListener('click', e => {
  socContainer.classList.remove('active')
})
