import { Box } from '@mui/material';
import CadastroForm from '../components/cadastroForm/formularioCadastro';
import logo from '../assets/logo.png'
 

export default function telaCadastro() {
    return(
        <Box
        style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: '32px',
          }}
        >
            <CadastroForm item/>
            <img src={logo} alt='logo' item='true'/>
        </Box>
    );
}