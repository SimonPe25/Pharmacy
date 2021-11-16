import {render, unmountComponentAtNode} from 'react-dom'
import {act} from 'react-dom/test-utils'
import Modal from './Modal.jsx'
let container;
describe('Testing Modal.js', () => {
  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })
  afterEach(() => {
    unmountComponentAtNode(container)
    container = null
  })

  test('Smoke test Modal.js', () => {
    act(() => {
      render(<Modal/>, container)
    })
  })
  
  test('Should be name and text value in Modal.js', () => {
     const testName = "Some name"
     const testtext = "Add to cart"

    act(() => {
      render(<Modal name={testName} text={testtext} />, container)
    })
    const nameContent = document.getElementById('name').textContent
    const textContent = document.getElementById('text').textContent
    expect(nameContent).toBe(testName)
    expect(textContent).toBe(testtext)
    
  })
})