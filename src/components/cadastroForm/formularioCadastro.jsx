import Axios from 'axios'
import * as Yup from 'yup'
import moment from 'moment/moment'
import parse from 'date-fns/parse'

import { Formik, Form } from 'formik'
import { Grid, Container } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'

import Textfield from '../formUI/Textfield'
import Button from '../formUI/Button'
import { useState } from 'react'

export default function formularioCadastro () {
  const urlGamecollection = import.meta.env.VITE_GAMECOLLECTION_URL
  const [dateValue, setDateValue] = useState(null)

  async function formatarData (dadosFormulario) {
    console.log('entrada: ', dadosFormulario)
    dadosFormulario.data_nascimento = moment(dadosFormulario.data_nascimento, 'DD-MM-YYYY').format('YYYY-MM-DD')
    console.log('saída: ', dadosFormulario)
    return dadosFormulario
  }

  const data = ({
    nome: '',
    email: '',
    confirmacao_email: '',
    senha: '',
    confirmacao_senha: '',
    data_nascimento: dateValue
  })

  const validacaoFormulario = Yup.object().shape({
    nome: Yup.string().required('Campo obrigatório'),
    email: Yup.string()
      .required('Campo obrigatório')
      .matches(
        /^\w+([.!#$%&'*/=?^_+\-`{|}~]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
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
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&+\-_*/=\\\s'`~´:?<>.,;{}()[\]])[A-Za-z\d!@#$%&+\-_*/=\\\s'`~´:?<>.,;{}()[\]]{8,100}$/,
        'Senha inválida. A senha precisa conter uma combinação de ' +
        'letras (maiscula e minuscula), números e símbolos'),
    confirmacao_senha: Yup.string()
      .required('Campo obrigatório')
      .oneOf([Yup.ref('senha'), null], 'Senhas não coincidem'),
    data_nascimento: Yup.date()
      .transform((value, originalValue) =>
        parse(originalValue, 'dd/MM/yyyy', new Date())
      )
      .required('Campo obrigatório')
      .typeError('Formato inválido')
      .min(
        moment(new Date(), 'yyyy-MM-dd')
          .subtract(100, 'year')
          .format('DD/MM/yyyy')
        , 'Data inválida')
      .max(
        moment(new Date(), 'yyyy-MM-dd')
          .subtract(13, 'year')
          .format('DD/MM/yyyy')
        , 'É preciso ter mais de 13 anos para criar uma conta.')
  })

  async function submit (dadosDoFormulario) {
    try {
      await Axios.post(`${urlGamecollection}/cadastro`,
        dadosDoFormulario)
    } catch (err) {
      alert('Error: Não foi possível realizar o cadastro')
      return (err)
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
        backgroundColor: '#6241D9',
        borderRadius: '10px'
      }}
    >
      <h1
        style={{
          color: '#ffffff',
          fontFamily: 'Inter',
          fontWeight: '900',
          paddingBottom: '32px'
        }}>Preencha os campos abaixo:</h1>
      <Formik
        initialValues={{
          ...data
        }}
        validationSchema={validacaoFormulario}
        onSubmit={values => {
          const dadosDoFormulario = structuredClone(values)
          formatarData(dadosDoFormulario)
          submit(dadosDoFormulario)
        }}
      >
        <Form>
          <Grid
            item
            container
            justifyContent="center"
            spacing={7}
          >
            <Grid
              item
              container
              spacing={4}
            >
              <Grid
                item
                container
                spacing={1}
              >
                <Grid
                  item
                  xs={7.5}
                >
                  <Textfield
                    name="nome"
                    label="Nome:"
                    />
                </Grid>

                <Grid
                  item
                  xs={4.5}
                >
                  <DatePicker
                    name="data_nascimento"
                    label="Data de Nascimento:"
                    inputFormat="dd/MM/yyyy"
                    maxDate={new Date()}
                    disableOpenPicker
                    value={dateValue}
                    onChange={(newDateValue) => {
                      setDateValue(newDateValue)
                      console.log(dateValue)
                    }}
                    renderInput={(params) => <Textfield name='data_nascimento' {...params} />}
                  />
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Textfield
                  name="email"
                  label="Email:"
                />
              </Grid>

              <Grid item xs={12}>
                <Textfield
                  name="confirmacao_email"
                  label="Confirme seu Email:"
                />
              </Grid>

              <Grid item xs={12}>
                <Textfield
                  name="senha"
                  label="Senha:"
                  type="password"
                />
              </Grid>

              <Grid item xs={12}>
                <Textfield
                  name="confirmacao_senha"
                  label="Confirme sua enha:"
                  type="password"
                />
              </Grid>
            </Grid>
            <Grid
              item
              xs={10}
            >
              <Button
                fullWidth
                >Cadastrar</Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Container>
  )
}
