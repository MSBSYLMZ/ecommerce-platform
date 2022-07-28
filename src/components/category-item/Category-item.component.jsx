import './Category-item.styles.css'

const CategoryItem = ({src, title, id}) => {
  return (
    <div className='category-item'>
        <img className='category-img' src={src} alt="" />
        <h6 className='category-title'>{title}</h6>
    </div>
  )
}

export default CategoryItem