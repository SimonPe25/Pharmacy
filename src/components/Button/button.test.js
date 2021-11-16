import {render, unmountComponentAtNode} from 'react-dom'
import {act} from 'react-dom/test-utils'
import Button from './Button.jsx'
let container;
describe('Testing Button.js', () => {
  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })
  afterEach(() => {
    unmountComponentAtNode(container)
    container = null
  })
  test('Smoke test Button.js', () => {
    act(() => {
      render(<Button/>, container)
    })
  })
})