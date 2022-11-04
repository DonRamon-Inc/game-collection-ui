import Axios from 'axios';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { Grid, Container} from '@mui/material';

import Textfield from '../formUI/Textfield';
import DateTimePicker from '../formUI/DateTimePicker';
import Button from '../formUI/Button'


export default function formularioCadastro() {


  const urlGamecollection = import.meta.env.VITE_GAMECOLLECTION_URL;

  const validacaoFormulario = Yup.object().shape({
    nome: Yup.string().required('Campo obrigatório'),
    email: Yup.string()
      .required('Campo obrigatório')
      .matches(
        /^\w+([\.!#$%&'*\/=?^_+\-`{|}~]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Email invalido, favor verificar email'
      ),
    confirmacao_email: Yup.string()
      .required('Campo obrigatório')
      .oneOf([Yup.ref('email'), null], 'Emails não coincidem'),
    senha: Yup.string()
      .required('Campo obrigatório')
      .matches(/^.{8,100}/,
        'Senha inválida. Sua senha deve conter entre 8 a 100 caracteres'
      )
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&\+\-_*\/=\\\s'`~´:?<>.,;{}()[\]])[A-Za-z\d!@#$%&\+\-_*\/=\\\s'`~´:?<>.,;{}()[\]]{8,100}$/,
        'Senha inválida. A senha precisa conter uma combinação de ' +
        'letras (maiscula e minuscula), números e símbolos'),
    confirmacao_senha: Yup.string()
      .required('Campo obrigatório')
      .oneOf([Yup.ref('senha'), null], 'Senhas não coincidem'),
    data_nascimento: Yup.date()
      .nullable()
      .required('Campo obrigatório')
  })

  const data = ({
    nome: '',
    email: '',
    confirmacao_email: '',
    senha: '',
    confirmacao_senha: '',
    data_nascimento: '',
  })

  async function submit(formData){
    try{
      await Axios.post(`${urlGamecollection}/cadastro`,
      formData)
    }
    catch(err) {
      alert('Error: Não foi possível realizar o cadastro');
      return(err)
    }
    (alert('Usuário Cadastrado com Sucesso')) 
  }

  return (
    
    <Container
      maxWidth="sm"
      style={{
        margin: '0px',
        alignItems: 'center',
        padding: '32px',
        backgroundColor: '#075834',
        borderRadius: '10px',
      }}
    >
      <h1
        style={{
          color: '#ffffff',
          fontFamily: 'Inter',
          fontWeight: '900',
          paddingBottom: '32px',
        }}>Preencha os campos abaixo:</h1>
      <Formik
        initialValues={{
          ...data
        }}
        validationSchema={validacaoFormulario}
        onSubmit={values => {
          submit(values)
        }}
      >
        <Form>
          <Grid
            item
            container
            spacing={7}
          >
            <Grid
              item
              container
              spacing={3}
            >
              <Grid
                item
                container
                spacing={1}
              >
                <Grid
                  item
                  xs={7}
                >
                  <Textfield
                    name="nome"
                    label="Nome:"
                    />
                </Grid>

                <Grid
                  item
                  xs={5}
                >
                  <DateTimePicker
                    name="data_nascimento"
                    label="Data de Nascimento:"
                  />
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Textfield
                  name="email"
                  label="Email:"
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Textfield
                  name="confirmacao_email"
                  label="Confirme seu Email:"
                />
              </Grid> 

              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Textfield
                  name="senha"
                  label="Senha:"
                  type="password"
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Textfield
                  name="confirmacao_senha"
                  label="Confirme sua enha:"
                  type="password"
                />
              </Grid>
            </Grid>
            <Grid
              item
            >
              <Button
                >Cadastrar</Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
}
