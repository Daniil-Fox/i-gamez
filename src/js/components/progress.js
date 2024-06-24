
function calcProgress(circle){
  let maxValue = +circle.getAttribute('data-to')
  let currentValue = +circle.getAttribute('data-from')
  let percentageProggress = currentValue / maxValue * 100
  let radius = circle.getBoundingClientRect().width / 2

  let circleLength = 2 * Math.PI * radius

  circle.setAttribute('stroke-dasharray', circleLength)
  circle.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProggress / 100)
}

const circlesProgress = document.querySelectorAll('.econom__progress')

circlesProgress.forEach(circle => {
  calcProgress(circle)
})
