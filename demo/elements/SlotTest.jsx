/* global HTMLElement */

import h from '../../lib/h' // eslint-disable-line no-unused-vars

export default class SlotTest extends HTMLElement {
  constructor () {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(<p style='color: cyan;'>
      This is a slot: <slot name='test'>boring text</slot><br />
      If there's something other than "boring text" then it's working
    </p>)
  }
  static get NAME () {
    return 'slot-test-element'
  }
}
