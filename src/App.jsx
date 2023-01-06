import { React } from 'react';

import { ThemeProvider } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import './App.css'

import { temaPrincipal } from './theme';
import TelaCadastro from './pages/telaCadastro';

function App () {
  return (
    <div className='App'>
      <ThemeProvider theme={ temaPrincipal }>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <TelaCadastro/>
        </LocalizationProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
