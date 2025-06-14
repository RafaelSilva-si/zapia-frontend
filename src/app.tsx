import { useState } from 'react'
import styled from 'styled-components'

const Button = styled.button`
    background: palevioletred;
    color: white;
    padding: 8px 16px;
    border-radius: 4px;
`
export function App () {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <header className='App-header'>
        <p>Hello Vite + React!</p>
        <p>
          <Button type='button' onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </Button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          {' | '}
          <a
            className='App-link'
            href='https://vitejs.dev/guide/features.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}
