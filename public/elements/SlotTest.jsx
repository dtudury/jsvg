/* global HTMLElement */

import h from '../../lib/h' // eslint-disable-line no-unused-vars

export default class SlotTest extends HTMLElement {
  constructor () {
    super()
    this.addEventListener('click', this)

    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(<p style='color: cyan;'>
      This is a slot:<slot name='test'>default text</slot><br />
      It's name is test. Hi test!
    </p>)
  }
  handleEvent (e) { this['on' + e.type](e) }
  static tag (attributes, children) {
    return h.buildCustomElement(SlotTest, attributes, children)
  }
}
