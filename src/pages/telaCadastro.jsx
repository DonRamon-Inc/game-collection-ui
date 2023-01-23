import { Box } from '@mui/material'
import CadastroForm from '../components/cadastroForm/formularioCadastro'
import logo from '../assets/logo.png'

export default function telaCadastro () {
  return (
        <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '32px'
        }}
        >
            <img src={logo} alt='logo'/>
            <CadastroForm item/>
        </Box>
  )
}
