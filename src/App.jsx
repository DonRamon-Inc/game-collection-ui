import { useState } from 'react'
import { Button, Typography, Box, Container, Link } from '@mui/material'
import reactLogo from './assets/react.svg'
import './App.css'

function App () {
  const [count, setCount] = useState(0)

  return (
    <Container className="App">
      <Box>
        <Link href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </Link>
        <Link href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </Link>
      </Box>
      <Typography variant='h2'>Vite + React</Typography>
      <Box className='card'>
        <Button
          onClick={() => setCount((count) => count + 1)}
          variant='contained'
          color='info'
        >
          count is {count}
        </Button>
        <Typography mt={2}>
          Edit <code>src/App.jsx</code> and save to test HMR
        </Typography>
      </Box>
      <Typography className="read-the-docs">
        Click on the Vite and React logos to learn more
      </Typography>
    </Container>
  )
}

export default App
