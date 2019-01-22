/* global HTMLElement */

import h from '../../lib/h' // eslint-disable-line no-unused-vars

export default class SlotTest extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })

    this.paragraph = <p>
      This is a slot: <slot name='test' class='qwer'>boring text</slot><br />
      If there's something other than "boring text" then it's working
    </p>
  }
  update () {
    console.log(this.class)
    if (!this.config) {
      return
    }
    const style = <style>{`
      p {
        color: ${this.config.color};
        background: ${this.config.background};
        animation: bounce 1s ease-in-out 3;
      }
      :host-context(.asdf) .qwer {
        color: magenta;
      }
      :host(.be-bold) {
        font-weight: bold;
      }
      @keyframes bounce {
        0% { color: ${this.config.color}; background: ${this.config.background}}
        50% { color: ${this.config.background}; background: ${this.config.color}}
        100% { color: ${this.config.color}; background: ${this.config.background}}
      }
    `}</style>
    h.setChildren(this.shadow, [style, this.paragraph])
  }
  setAttributes (attributes) {
    console.log(attributes)
    if (this.class) {
      this.classList.add(this.class)
    }
    Object.assign(this, attributes)
    this.update()
  }
  static get NAME () {
    return 'slot-test-element'
  }
}
