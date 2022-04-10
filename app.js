import AnalogClock from './AnalogClock.js';

class CustomAnalogClock extends HTMLElement {
  connectedCallback() {
    let title = document.createElement('h1')
    title.classList.add('title')
    title.textContent = 'Analog clock'
    this.appendChild(title)
    let clock = document.createElement('div')
    clock.classList.add('analog-clock')
    this.appendChild(clock)
  }
}

customElements.define('analog-clock', CustomAnalogClock)

document.querySelectorAll('.analog-clock').forEach(AnalogClock);
