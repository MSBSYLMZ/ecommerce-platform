import './Header.styles.css';

import Logo from '../logo/Logo.component';
import CustomButton from '../custom-button/Custom-button.component';
import CustomInput from '../custom-input/Custom-input.component';
import CartDropdown from '../cart-dropdown/Cart-dropdown.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faMessage, faBell, faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';
import { useGetCategoriesQuery } from '../../hooks/services/backup-product.api';
import { useSelector } from 'react-redux/es/exports';
import { selectCartDropdownHidden, selectTotalQuantity } from '../../redux/cart/cart.selectors';
import { useDispatch } from 'react-redux';
import { toggleCartDropdown } from '../../redux/cart/cart.reducer';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const [navScroll, setNavScroll] = useState(0);
  const dispatch = useDispatch();
  const { hiddenAuthPopup, currentUser, toggleAuthentiactionPopup, logout } = useAuth();
  const isDropdownHidden = useSelector(selectCartDropdownHidden);
  const totalItemCount = useSelector(selectTotalQuantity);
  console.log('count', totalItemCount)

  const {isError, isLoading,  data:categories} = useGetCategoriesQuery();
  const navRef = useRef(null);

  const navNextSlider = ()=>{
    const windowSize = window.innerWidth;
    const navWidth = navRef.current.offsetWidth;
    console.log(navWidth);
    if(navScroll < navWidth){
      navRef.current.scrollBy({ left: windowSize - 180,  behavior: 'smooth' })
      setNavScroll((preScroll) => preScroll + windowSize - 180);
    }
  }

  const navPreSlider = () =>{
    const windowSize = window.innerWidth;
    if(navScroll > 10){
      navRef.current.scrollBy({ left: -windowSize + 180,  behavior: 'smooth' })
      setNavScroll((preScroll) => preScroll - windowSize + 180);
    }
  }

  const showCartDropdown = () => {
    dispatch(toggleCartDropdown());
  }

  const categoriesListItems = !isError && !isLoading ? categories.map((item) => <li key={item} className='category'>{item}</li>) : null

  return (
    <header className='header'>
        <div className='first-section flex between'>
          <Logo/>
          <div className='search-bar'>
              <CustomInput className='text-center' placeholder='&#128269; What are you looking for?...'/>
          </div>
          <div className='flex between'>
              <div className='utils flex between'>
                <div className='relative'>
                  { totalItemCount > 0 ? <div onClick={showCartDropdown} className='cart-indicator'>{totalItemCount}</div> :false}
                  <FontAwesomeIcon className='icon' icon={faBagShopping} onClick={showCartDropdown}/>
                  {!isDropdownHidden ? <CartDropdown/> : null}
                </div>

                  <FontAwesomeIcon className='icon'  icon={faMessage}/>
                  <FontAwesomeIcon className='icon'  icon={faBell}/>
              </div>
              {
                currentUser ? <CustomButton onClick={logout}>Logout</CustomButton>
                : <CustomButton onClick={toggleAuthentiactionPopup}>Sign Up / In</CustomButton>
              }
          </div>
        </div>
        {
          navScroll > 10 ? <FontAwesomeIcon className='nav-slider pre icon'  icon={faChevronLeft} onClick={navPreSlider}/> : null
        }
        <nav ref={navRef} className={`${navScroll > 10 ? 'show-pre' :''}`}> 
          <ul>
            {categoriesListItems}
          </ul>
        </nav>
        <FontAwesomeIcon className='nav-slider next icon' icon={faChevronRight} onClick={navNextSlider}/>
    </header>
  )
}

export default Header