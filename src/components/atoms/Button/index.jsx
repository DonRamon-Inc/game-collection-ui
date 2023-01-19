import { Button as MaterialButton } from '@mui/material'
import PropTypes from 'prop-types'

export default function Button ({ text, onClick, color }) {
  return (
    <MaterialButton
      onClick={onClick}
      variant="contained"
      color={color}
    >
      {text}
    </MaterialButton>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.oneOf(['error', 'success', 'primary', 'info', 'secondary'])
}

Button.defaultProps = {
  color: 'primary'
}
