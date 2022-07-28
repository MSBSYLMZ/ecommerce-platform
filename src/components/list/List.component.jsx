import './List.styles.css'
import CustomButton from '../custom-button/Custom-button.component'

const List = ({children, button=false}) => {
  return (
    <div className='list flex between wrap'>
        {children}
        {  button ?  <CustomButton className="list-button">{button}</CustomButton> : null }
    </div>
  )
}

export default List