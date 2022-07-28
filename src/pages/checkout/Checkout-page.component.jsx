import './Checkout-page.styles.css'

import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectTotalPrice } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/Checkout-item.comonent';
import CustomButton from '../../components/custom-button/Custom-button.component';
import { clearCart } from '../../redux/cart/cart.reducer';


const CheckoutPage = () => {
    const items = useSelector(selectCartItems);
    const checkoutTotal = useSelector(selectTotalPrice);
    const checkoutItems = items.map(item => <CheckoutItem key={item.id} item={item}/>);
    const dispatch = useDispatch();

    const handleCheckout = () => {
        dispatch(clearCart());
        alert('Success')
    }

    return (
        <div className='checkout-page-layout'>
            <div className='page-title'>Checkout</div>
            <div className='checkout-titles flex between'>
                <div>Image</div>
                <div>Title</div>
                <div>Price</div>
                <div>Quantity</div>
            </div>
            <div className='checkout-items'>
                {checkoutItems}
            </div>
            <div className='total flex between'>
                <div>Total</div>
                <div>KWD {checkoutTotal}</div>
            </div>
            <CustomButton className='checkout-button' onClick={handleCheckout}>Checkout</CustomButton>
        </div>
    )
}

export default CheckoutPage