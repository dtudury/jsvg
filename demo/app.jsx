import CustomizedTest from './elements/CustomizedTest.jsx'
import AutonomousTest from './elements/AutonomousTest.jsx'
import SlotTest from './elements/SlotTest.jsx'
import h from '../lib/h' // eslint-disable-line no-unused-vars

// Component experiment
document.body.appendChild(<CustomizedTest.tag a='1' b='1'><i>asdf</i></CustomizedTest.tag>)

document.body.appendChild(<AutonomousTest.tag a={{ foo: 'bar' }} b='4'>this won't show up</AutonomousTest.tag>)

document.body.appendChild(<SlotTest.tag><b slot='test'>thrilling bold text</b></SlotTest.tag>)
document.body.appendChild(<SlotTest.tag><i slot='test'>fascinating italic text</i></SlotTest.tag>)

// SVG experiment
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

// children flattening experiment
let a = <p>
  <i>{0}</i>0
  <i>{1}</i>1
  {[2, 3].map(x => <><i>{x}</i>{x}</>)}
  {null}
  <>
    <i>{4}</i>4
    <i>{5}</i>5
  </>
  <>
    {[6, 7].map(x => <><i>{x}</i>{x}</>)}
  </>
</p>

console.log(a)
