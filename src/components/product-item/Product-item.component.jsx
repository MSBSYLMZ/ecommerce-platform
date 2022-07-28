import './Product-item.styles.css'
import { useNavigate } from 'react-router-dom';

const ProductItem = ({src, title, price, insidePrice, productId}) => {
  const navigate = useNavigate();

  const handleClick = ()=> {
    navigate(`/details/${productId}`)
  }

  return (
    <div className='product-item' onClick={handleClick}>
        <img className='product-img' src={src} alt="" />
        {
          title ? <div className='product-title'>{title}</div> : null
        }
         {
          price ? <div className='product-price'>{price}</div> : null
        }
         {
          insidePrice ? <div className='product-kd'>{insidePrice} KD</div> : null
        }
    </div>
  )
}

export default ProductItem