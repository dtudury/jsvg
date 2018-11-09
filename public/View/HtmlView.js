import View from './View'

export default class HtmlView extends View {
  /**
   * @param {String} tagName
   * @param {Object} [attributes]
   * @param {Array<View>} [childViews]
   */
  constructor (tagName = 'div', attributes = {}, childViews = []) {
    super()
    this.element = document.createElement(tagName)
    for (const attribute in attributes) {
      this.element[attribute] = attributes[attribute]
    }
    this.displayViews(childViews)
  }
}
