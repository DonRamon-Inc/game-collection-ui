import { LoginBox } from '../../molecules/LoginBox'
import { Link, Typography, Grid } from '@mui/material'

export function LoginScreen () {
  return (
    <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
    spacing={1}
    >
      <Grid item>
        <Link href="https://github.com/DonRamon-Inc/game-collection-api" target="_blank">
          <img src="src/assets/gcSmallLogo.jpg" className="logo" alt="Game Collection Logo" />
        </Link>
      </Grid>
      <Grid item>
        <Typography color={'HighlightText'} variant='h3'>Insira seus dados de Login</Typography>
      </Grid>
      <Grid item>
        <LoginBox/>
      </Grid>
    </Grid>
  )
}
