import './Checkout-item.styles.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { increaseQuantityOfItem, decreaseQuantityofItem, removeItemFromCart } from '../../redux/cart/cart.reducer';

const CheckoutItem = ({item}) => {
    const dispatch = useDispatch();

    const {
        id,
        title,
        quantity,
        images,
        price
    } = item;

    const src = images[0];

    const increaseQuantity = () => {
        dispatch(increaseQuantityOfItem(id))
    }

    const decreaseQuantity = () => {
        dispatch(decreaseQuantityofItem(id));
    }

    const removeItem = () => {
        dispatch(removeItemFromCart(id))
    }
    
    return (
        <div className='checkout-item flex between'>
            <img className='main-image' src={src} alt="" />
            <div className='ci-title'>{title}</div>
            <div className='ci-price'>KWD {price * quantity}</div>
            <div className='quantity-section flex between'>
                <div className='change-quantity increase' onClick={increaseQuantity}>+</div>
                <div className='change-quantity decrease' onClick={decreaseQuantity}>-</div>
                <div className='ci-quantity'>{quantity}</div>
                <FontAwesomeIcon className='remove-item' icon={faTrash} onClick={removeItem}/>
            </div>
        </div>
    )
}

export default CheckoutItem