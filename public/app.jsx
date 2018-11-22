import Menu from './elements/Menu.jsx'
import Item from './elements/Item.jsx'
import { h, hFrag } from './lib' // eslint-disable-line no-unused-vars

const menu = <Menu.tag a='1' b='1'><i>asdf</i></Menu.tag>
console.log(menu)
document.body.appendChild(menu)

const item = <Item.tag a={{ foo: 'bar' }} b='4'><i>asdf</i></Item.tag>
console.log(item)
document.body.appendChild(item)

let svgExample = <svg
  version='1.1'
  baseProfile='full'
  width='300' height='200'
  viewBox='0 0 300 200'
  xmlns='http://www.w3.org/2000/svg' >
  <rect width='100%' height='100%' fill='red'
    xmlns='http://www.w3.org/2000/svg' />
  <circle cx='150' cy='100' r='80' fill='green'
    xmlns='http://www.w3.org/2000/svg' />
  <text x='150' y='125' font-size='60' text-anchor='middle' fill='white'
    xmlns='http://www.w3.org/2000/svg' >
  SVG</text>
</svg >

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
