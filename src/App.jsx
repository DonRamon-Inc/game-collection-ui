import { useState } from 'react'
import { Button, Typography, Box, Container, Link, TextField, Grid} from '@mui/material'
import reactLogo from './assets/react.svg'
import './App.css'

import logo from './assets/game-collection-logo.png'

function App () {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <span className="login-form-title">Bem vindo a sua coleção!</span>
      <div className="container-login">
        <div className = "wrap-login">
          <form className="login-form">
            <span className="login-form-img">
              <img src={logo} alt="Logo Gamecollection"/>
            </span>

            <div className="wrap-input">
              <TextField required id="outlined-required" variant="outlined" label="Email" />
            </div>

            <div className="wrap-input">
              <TextField required id="outlined-required" label="Senha" defaultValue=""/>
            </div>

            <div className="container-login-form-btn">
              <Button variant="contained" className="login-form-btn">Login</Button>
            </div>

            <div className="redirect-new-account">
              <span className="text-redirect">Não possui conta?</span>
              <a className="txt2" color='green'>Cadastre-se</a>
            </div>


          </form>
        </div>
      </div>
    </div>


    // <Container className="App">
    //   <Box>
    //     <Link href="https://github.com/DonRamon-Inc/game-collection-api" target="_blank">
    //       <img src={logo} className="logo" alt="GameCollection logo" />
    //     </Link>
    //     <Link href="https://reactjs.org" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </Link>
    //   </Box>
    //   <Typography variant='h2'>Vite + React</Typography>
    //   <Box className='card'>
    //     <Button
    //       onClick={() => setCount((count) => count + 1)}
    //       variant='contained'
    //       color='info'
    //     >
    //       count is {count}
    //     </Button>
    //     <Typography mt={2}>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </Typography>
    //   </Box>
    //   <Typography className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </Typography>
    // </Container>
  )
}

export default App
