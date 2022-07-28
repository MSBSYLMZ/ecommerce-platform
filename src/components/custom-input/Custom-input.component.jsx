import './Custom-input.styles.css'

const CustomInput = ({className ,...otherProps}) => {
    return (
    <input className={`custom-input ${className}`} {...otherProps} />
  )
}

export default CustomInput