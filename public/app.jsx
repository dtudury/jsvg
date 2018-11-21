import Menu from './elements/Menu.jsx'
import Item from './elements/Item.jsx'
import { h, hFrag } from './lib' // eslint-disable-line no-unused-vars

const menu = <Menu.tag a='1' b='1'><i>asdf</i></Menu.tag>
console.log(menu)
document.body.appendChild(menu)

const item = <Item.tag a={{ foo: 'bar' }} b='4'><i>asdf</i></Item.tag>
console.log(item)
document.body.appendChild(item)

/*
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
*/
