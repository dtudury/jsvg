import { HtmlView, TextView } from './View'

function sayHey () {
  console.log('hey')
}

const test = new HtmlView('div',
  {
    onclick: sayHey
  }, [
    new TextView('asdf')
  ]
)

document.body.appendChild(test.element)
