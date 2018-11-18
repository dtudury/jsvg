export default class View {
  /**
   * @param {Array<View>} childViews
   */
  displayViews (childViews) {
    childViews.forEach((view, index) => {
      const newNode = view.element
      if (!newNode) {
        throw new Error('no element', this, view)
      }
      const referenceNode = this.element.childNodes[index]
      if (!referenceNode) {
        this.element.appendChild(newNode)
      } else if (newNode !== referenceNode) {
        this.element.insertBefore(newNode, referenceNode)
      }
    })
    while (this.element.childNodes.length > childViews.length) {
      this.element.removeChild(this.element.lastChild)
    }
  }
}
