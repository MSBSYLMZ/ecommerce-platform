import './Product-preview.styles.css'

const ProductPreview = ({children}) => {
  return (
    <div className='flex between'>
        {children}
    </div>
  )
}

export default ProductPreview