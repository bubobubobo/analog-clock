const AnalogClock = $container => {
  // do something!
  // 1. 모든 analog-clock 클래스를 리스트로 가져온다.
  // 2. 자신의 위치에 맞는 div(아래에서는 childElementCount가 0인 비어있는 analog-clock
  //  으로 찾음)에 renderClock()과 setClock()을 시전한다.

  // 비어있는 index 찾기
  const clocks = document.getElementsByClassName('analog-clock')
  let idx
  for (idx = 0; idx < clocks.length; idx++) {
    if (clocks.item(idx).childElementCount === 0) break
  }

  // div 만들어서 그림 그리기
  function renderClock() {
    const hour = document.createElement('div')
    hour.className = 'hand hour'
    const min = document.createElement('div')
    min.className = 'hand minute'
    const sec = document.createElement('div')
    sec.className = 'hand second'

    clocks[idx].appendChild(hour)
    clocks[idx].appendChild(min)
    clocks[idx].appendChild(sec)

    for (let i = 1; i <= 12; i++) {
      const num = document.createElement('div')
      num.className = 'time time' + i
      num.innerHTML = '|'
      clocks[idx].appendChild(num)
    }
  }

  const secondHand = document.getElementsByClassName('hand second')
  const minuteHand = document.getElementsByClassName('hand minute')
  const hourHand = document.getElementsByClassName('hand hour')

  function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand[idx], secondsRatio)
    setRotation(minuteHand[idx], minutesRatio)
    setRotation(hourHand[idx], hoursRatio)
  }

  function setRotation(element, rotationRatio) {
    element.style.setProperty('--deg', rotationRatio * 360)
  }

  renderClock()
  setClock() // 새로고침해도 그 모양 그대로 하기 위해
  setInterval(setClock, 1000) // 주기적으로 세팅하기 위해
};

export default AnalogClock;
