import { TextField as MuiTextField } from '@mui/material'
import { PropTypes } from 'prop-types'

export function TextField ({ label, type }) {
  return (
    <MuiTextField label = {label} type={type} variant='outlined'
    >
      exemplo
    </MuiTextField>
  )
}
TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string
}

TextField.defaultProps = {
  label: 'example',
  type: 'text'
}
