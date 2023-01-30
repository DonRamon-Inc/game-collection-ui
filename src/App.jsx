import { Box, Container } from '@mui/material'
import { LoginScreen } from './components/organisms/LoginScreen'
import './App.css'

function App () {
  return (
    <Container className="App">
      <Box className='card'>
        <LoginScreen/>
      </Box>
    </Container>
  )
}

export default App
