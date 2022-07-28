import './Product-options.styles.css'

import ShopNavigator from "../shop-navigator/Shop-navigator.component"
import CustomButton from '../custom-button/Custom-button.component'

import { useDispatch } from 'react-redux/es/exports'
import { addItemToCart } from '../../redux/cart/cart.reducer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'


const ProductOptions = ({data}) => {
    const dispatch = useDispatch();
    const {
        title,
        description,
        price
    } = data ? data : {};

    const addToCart = () => {
        dispatch(addItemToCart(data))
    }

    return (
        <div className='product-options'>
            <div className='flex between'>
                <ShopNavigator src='https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=658&q=80' shopName='BONTON' shopId='bonton' />
                <FontAwesomeIcon className='icon' icon={faArrowUpRightFromSquare}/>
            </div>
            <p className='product-name'>{title} {description}</p>
            <div className='product-price'>KWD {price}</div>
            <div className='product-color-option-text'><span>Color:</span> Blue & Green</div>
            <div className='color-options flex start'>
                <div className='color-option selected'><img src="https://images.unsplash.com/photo-1509474520651-53cf6a80536f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" /></div>
                <div className='color-option'><img src="https://images.unsplash.com/photo-1509474520651-53cf6a80536f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" /></div>
            </div>
            <div className='product-size-option-text'><span>Size:</span> M</div>
            <div className='size-options flex start'>
                <div className='size-option'> S</div>
                <div className='size-option selected'> M</div>
            </div>
            <CustomButton className='add-to-cart-button' onClick={addToCart}>Add To Cart</CustomButton>
        </div>
    )
}

export default ProductOptions