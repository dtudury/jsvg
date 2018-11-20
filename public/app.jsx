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

const hFrag = Symbol('hFrag')

function expandChildren (children) {
  let expanded = []
  children.forEach(child => {
    if (Array.isArray(child)) {
      expanded = expanded.concat(expandChildren(child))
    } else if (child.type === hFrag) {
      expanded = expanded.concat(expandChildren(child.children))
    } else {
      expanded.push(child)
    }
  })
  return expanded
}

function h (type, props, ...children) {
  const expandedChildren = expandChildren(children)
  return { type, props, children: expandedChildren }
}

let zxc = { qwer: { some: 'thing' } }

let a = <zxc.qwer a={sayHey}>
  <i>{0}</i>
  <i>{1}</i>
  {[2, 3].map(x => <i>{x}</i>)}
  <>
    <i>{4}</i>
    <i>{5}</i>
  </>
  <>
    {[6, 7].map(x => <i>{x}</i>)}
  </>
</zxc.qwer>

console.log(a)

function sayHey () {
  console.log('hey')
}
const test = new HtmlView('div',
  { onclick: sayHey }, [
    new TextView([__dirname, __filename].join(' '))
  ]
)
document.body.appendChild(test.element)
