import { useState } from 'react'
import { Typography, Box, Container, Link, Grid } from '@mui/material'
import reactLogo from './assets/react.svg'
import { Button } from './components/atoms/Button'
import { TextField } from './components/atoms/TextField'
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
          text={`count is ${count}`}
        >
        </Button>

      <Grid>
        <TextField label='Email' type='email'></TextField>
        <TextField label='Senha' type='password'></TextField>
      </Grid>
      <Button text='Ola'></Button>
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
