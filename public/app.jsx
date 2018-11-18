/* global customElements HTMLElement HTMLDivElement */

import { HtmlView, TextView } from './View'

class Autonomous extends HTMLElement {
  constructor () {
    super()
    let wrapper = document.createElement('span')
    wrapper.appendChild(document.createTextNode('text node in span in shadow in autonomous element'))

    let shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(wrapper)
  }
}
customElements.define('autonomous-custom-element', Autonomous)
let autonomous = document.createElement('autonomous-custom-element')
document.body.appendChild(autonomous)

class Customized extends HTMLDivElement {
  constructor () {
    super()
    this.appendChild(document.createTextNode('text node in customized element'))
  }
}
customElements.define('customized-built-in-element', Customized, { extends: 'div' })
let custom = document.createElement('div', { is: 'customized-built-in-element' })
document.body.appendChild(custom)

function dom (a, b, c) {
  console.log(a, b, c)
}

let a = <qwer a={sayHey}>asdf</qwer>

function sayHey () {
  console.log('hey')
}
const test = new HtmlView('div',
  { onclick: sayHey }, [
    new TextView([__dirname, __filename].join(' '))
  ]
)
document.body.appendChild(test.element)
