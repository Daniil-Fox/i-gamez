const header = document.querySelector('.header')

const headerHeight = header.scrollHeight
const siteContainer = document.querySelector('.site-container')

let flag = false
window.addEventListener('scroll', e => {
  if(window.scrollY > headerHeight){
    if(flag) return
    siteContainer.style.paddingTop = headerHeight + 'px'
    header.classList.add('fixed')
    flag = true
  } else if(window.scrollY <= 20){
    if(!flag) return
    siteContainer.style.paddingTop = 0
    header.classList.remove('fixed')

    flag = false
  }
})
