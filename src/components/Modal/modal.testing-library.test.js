
import {act} from 'react-dom/test-utils'
import Modal from './Modal.jsx'
import {render} from "@testing-library/react"

describe('Testing Modal.js', () => {
  

  test('Smoke test Modal.js', () => {
    
      render(<Modal/>)
  })
  
  test('Should be name and text value in Modal.js', () => {
     const testName = "Some name"
     const testtext = "Add to cart"

    
      render(<Modal name={testName} text={testtext}/>)
    
    const nameContent = document.getElementById('name').textContent
    const textContent = document.getElementById('text').textContent
    expect(nameContent).toBe(testName)
    expect(textContent).toBe(testtext)
    
  })
})