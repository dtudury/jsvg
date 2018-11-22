import Menu from './elements/Menu.jsx'
import Item from './elements/Item.jsx'
import h from './h' // eslint-disable-line no-unused-vars

const menu = <Menu.tag a='1' b='1'><i>asdf</i></Menu.tag>
console.log(menu)
document.body.appendChild(menu)

const item = <Item.tag a={{ foo: 'bar' }} b='4'><i>asdf</i></Item.tag>
console.log(item)
document.body.appendChild(item)

h.setDefaultXlmns('http://www.w3.org/2000/svg')
let svgExample = <svg version='1.1' baseProfile='full' width='300' height='200' viewBox='0 0 300 200'>
  <>
    <rect width='100%' height='100%' fill='red' />
    <circle cx='150' cy='100' r='80' fill='green' />
    <text x='150' y='125' font-size='60' text-anchor='middle' fill='white'>SVG</text>
  </>
</svg >
h.resetDefaultXlmns()

document.body.appendChild(svgExample)

function sayHey () {
  console.log('hey')
}

let a = <zxc a={sayHey}>
  <i>{0}</i>
  {null}
  <i> {1}</i >
  {[2, 3].map(x => <i>{x}</i>)}

  <>
    <i>{4}</i>
    <i>{5}</i>
  </>
  <>
    {[6, 7].map(x => <i>{x}</i>)}
  </>
  asdf
</zxc >

console.log(a)
