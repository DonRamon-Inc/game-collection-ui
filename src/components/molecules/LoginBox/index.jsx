import { Button } from '../../atoms/Button'
import { TextField } from '../../atoms/TextField'
import { Grid } from '@mui/material'

import * as Yup from 'yup'
import { Formik, Form } from 'formik'
export function LoginBox () {
  const data = ({
    email: '',
    senha: ''
  })

  const validacaoForm = Yup.object().shape({
    email: Yup.string()
      .required('Campo obrigatório')
      .matches(
        /^\w+([.!#$%&'*/=?^_+\-`{|}~]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Email invalido, favor verificar email'
      ),
    senha: Yup.string().required('Campo obrigatório').matches(/^.{8,100}/,
      'Senha inválida. Sua senha deve conter entre 8 a 100 caracteres'
    )
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&+\-_*/=\\\s'`~´:?<>.,;{}()[\]])[A-Za-z\d!@#$%&+\-_*/=\\\s'`~´:?<>.,;{}()[\]]{8,100}$/,
        'Senha inválida. A senha precisa conter uma combinação de ' +
        'letras (maiscula e minuscula), números e símbolos')
  })

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      >
        <Formik
          initialValues={data}
          validationSchema={validacaoForm}
          >
            <Form>
              <Grid item>
                <TextField label='Email' type='email'/>
              </Grid>
              <Grid item>
                <TextField label='Senha' type='password'/>
              </Grid>
              <Grid item>
                <Button text='Login'></Button>
              </Grid>
          </Form>
        </Formik>
      </Grid>

  )
}
