
import CustomButton from "../custom-button/Custom-button.component"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import List from "../list/List.component"

const RecommendationsOverview = ({children, className, title, justifyContent='between',icon=false, button=false, secondList}) => {
  return (
    <div className={`recommendations ${className ? className : ''}`}>
          <div className={`flex ${justifyContent}`}>
            <h5 className='intro-title'>{title}</h5>
            { icon ? <FontAwesomeIcon className='black-icon'  icon={icon}/> : null }
            { button ? <CustomButton className='see-more'>{button}</CustomButton> : null}
          </div>
          { secondList ? <List>{secondList}</List> : null}
          <List>{children}</List>
        </div>
  )
}

export default RecommendationsOverview