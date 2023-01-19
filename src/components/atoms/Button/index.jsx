import { Button as MuiButton } from '@mui/material'
import { PropTypes } from 'prop-types'

export function Button ({ text, onClick, color }) {
  return (
    <MuiButton
    onClick={onClick}
    variant="contained"
    color={color}
    >
      {text}
    </MuiButton>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(['error', 'sucess', 'primary', 'info', 'secondary']).isRequired
}

Button.defaultProps = {
  color: 'primary'
}
