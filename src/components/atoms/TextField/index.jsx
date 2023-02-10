import { TextField as MuiTextField } from '@mui/material'
import { PropTypes } from 'prop-types'
import { useField } from 'formik'

export function TextField ({ name, label, type, helperText, error }) {
  const [field, meta] = useField(name)
  if (meta && meta.touched && meta.error) {
    error = true
    helperText = meta.error
  }

  return (
    <MuiTextField
      {...field}
      name={name}
      fullWidth={true}
      label = {label}
      type={type}
      variant='outlined'
      helperText={helperText}
      error ={error}
    />
  )
}
TextField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.bool
}

TextField.defaultProps = {
  name: 'defaultTextfield',
  label: 'example',
  type: 'text',
  helperText: '',
  error: false
}
