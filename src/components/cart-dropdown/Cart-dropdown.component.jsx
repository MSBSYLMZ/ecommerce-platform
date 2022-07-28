import './Cart-dropdown.styles.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartDropdown } from '../../redux/cart/cart.reducer';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/Cart-item.component';
import CustomButton from '../custom-button/Custom-button.component';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector(selectCartItems);
  const hideDropdown = () => {
    dispatch(toggleCartDropdown());
  }
  const navigateToCheckoutPage = () => {
    hideDropdown();
    navigate('/checkout')
  }

  const cartItems = items.map(item => <CartItem key={item.id} item={item} />)
  return (
    <div className='cart-dropdown'>
      <FontAwesomeIcon className='close-icon' icon={faXmark} onClick={hideDropdown}/>
      <hr />
      {cartItems}
      <CustomButton className="go-to-checkout" onClick={navigateToCheckoutPage}>Go To Checkout</CustomButton>
    </div>
  )
}

export default CartDropdown