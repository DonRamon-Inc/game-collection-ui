import { createTheme } from '@mui/material'
import { green } from '@mui/material/colors'

export const temaPrincipal = createTheme({
  palette: {
    primary: {
      main: green[400],
      dark: green[500],
      light: green[300],
      contrastText: '#ffffff'
    },
    secondary: {
      main: green[800],
      dark: green[900],
      light: green[700],
      contrastText: '#ffffff'
    },
    background: {
      default: '#f7f6f3',
      paper: '#ffffff'
    },
    button: {
      main: '#402B8F',
      dark: '#2B1C5E',
      contrastText: '#ffffff'
    }
  },

  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: '#1E241B',
          borderRadius: '8px',
          color: '#B5D3CE'
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: '#B5D3CE',
          fontSize: '16px',
          fontWeight: 'bold'
        }
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#B5D3CE'
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginBottom: '-23px'
        }
      }
    }
  }

})
