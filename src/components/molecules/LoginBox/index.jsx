import { Button } from '../../atoms/Button'
import { TextField } from '../../atoms/TextField'
import { Grid } from '@mui/material'

export function LoginBox () {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      >
        <Grid item>
          <TextField label='Email' type='email'/>
        </Grid>
        <Grid item>
          <TextField label='Senha' type='password'/>
        </Grid>
        <Grid item>
          <Button text='Login'></Button>
        </Grid>
      </Grid>

  )
}
