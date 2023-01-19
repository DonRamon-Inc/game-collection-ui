import { TextField } from '@mui/material'
import PropTypes from 'prop-types'

export default function Input ({
  type,
  label,
  helperText,
  required,
  disabled,
  error,
  value,
  onChange
}) {
  if (type === undefined || type === 'text' || type === 'password') {
    return (
      <TextField
        variant="outlined"
        label={label}
        helperText={helperText}
        required={required}
        disabled={disabled}
        error={error}
        value={value}
        onChange={onChange}
      />
    )
  } else {
    return null
  }
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'password']),
  label: PropTypes.string.isRequired,
  helperText: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func
}

Input.defaultProps = {
  helperText: '',
  required: false,
  disabled: false,
  error: false,
  onChange: () => undefined
}
