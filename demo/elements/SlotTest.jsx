/* global HTMLElement */

import h from '../../lib/h' // eslint-disable-line no-unused-vars

export default class SlotTest extends HTMLElement {
  constructor () {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    const color = 'darkblue'
    const background = 'lightblue'
    let temp = <>
      <style>{`
        p {
          color: ${color};
          background: ${background};
          animation: bounce 3s ease-in-out 1;
          height: 50px;
        }
        @keyframes bounce {
          0% { height: 50px; }
          50% { height: 100px; }
          100% { height: 50px; }
        }
      `}</style>
      <p>
        This is a slot: <slot name='test'>boring text</slot><br />
        If there's something other than "boring text" then it's working
      </p>
    </>
    console.log(temp)
    h.setChildren(shadow, temp)
  }
  static get NAME () {
    return 'slot-test-element'
  }
}
