import { TextField } from '@mui/material'
import { useField } from 'formik'
import PropTypes from 'prop-types'

const TextfieldWrapper = ({
  name,
  ...otheProps
}) => {
  const [field, metaData] = useField(name)
  const configTextfield = {
    ...field,
    ...otheProps,
    fullWidth: true,
    variant: 'outlined'
  }

  if (metaData && metaData.touched && metaData.error) {
    configTextfield.error = true
    configTextfield.helperText = metaData.error
  }

  return (
        <TextField {...configTextfield}/>
  )
}

TextfieldWrapper.propTypes = {
  name: PropTypes.string
}

export default TextfieldWrapper
