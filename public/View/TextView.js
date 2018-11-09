import View from './View'

export default class TextView extends View {
  /**
   * @param {String} data
   */
  constructor (data) {
    super()
    this.element = document.createTextNode(data)
  }
  /**
   * @param {Array<View>} childViews
   */
  displayViews (childViews) {
    throw new Error('TextView can\'t have children')
  }
}
