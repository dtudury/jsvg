import View from './View'

export default class SvgView extends View {
  /**
   * @param {String} tagName
   * @param {Object} [attributes]
   * @param {Array<View>} [childViews]
   */
  constructor (tagName = 'div', attributes = {}, childViews = []) {
    super()
    this.element = document.createElementNS('http://www.w3.org/2000/svg', tagName)
    for (const attribute in attributes) {
      this.element.setAttribute(attribute, attributes[attribute])
    }
    this.displayViews(childViews)
  }
}
