import './Cart-item.styles.css'

const CartItem = ({item}) => {
  const {
    images,
    title, 
    quantity
  } = item;

  const src = images[0];

  return (
    <div className='cart-item flex start'>
        <img className='cart-item-thumbnail' src={src} alt="cart-item" />
        <div className='title'>{title.length > 24 ? title.slice(0,24) + '...' : title}</div>
        <div className='quantity'>{quantity}</div>
    </div>
  )
}

export default CartItem