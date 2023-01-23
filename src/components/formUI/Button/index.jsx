import { Button } from '@mui/material'
import { useFormikContext } from 'formik'
import PropTypes from 'prop-types'

const ButtonWrapper = ({
  children,
  ...otheProps
}) => {
  const { submitForm } = useFormikContext()

  const handleSubmit = () => {
    submitForm()
  }

  const configButton = {
    ...otheProps,
    variant: 'contained',
    color: 'button',
    onClick: handleSubmit
  }

  return (
       <Button
       {...configButton}
       >
        {children}
       </Button>
  )
}

ButtonWrapper.propTypes = {
  children: PropTypes.string
}

export default ButtonWrapper
