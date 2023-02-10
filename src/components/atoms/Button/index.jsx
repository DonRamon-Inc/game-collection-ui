import { Button as MuiButton } from '@mui/material'
import { PropTypes } from 'prop-types'
import { useFormikContext } from 'formik'

export function Button ({ text, onClick, color }) {
  const { submitForm } = useFormikContext()

  const handleSubmit = () => {
    submitForm()
  }

  return (
    <MuiButton
    onClick={handleSubmit}
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
