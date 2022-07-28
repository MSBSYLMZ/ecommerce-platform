import './Custom-button.styles.css'
import { forwardRef } from 'react'

const CustomButton = forwardRef(({ children, className, ...otherProps }, ref) => {
  return (
    <button {...otherProps} ref={ref} className={`custom-button ${className}`}>{children}</button>
  )
});

export default CustomButton