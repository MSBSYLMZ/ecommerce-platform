import './Auth-popup.styles.css';

import { useEffect, useRef, useState } from "react"
import SigninPopup from "./Signin-popup.component";
import SignupPopup from './Signup-popup.component'
import useAuth from '../../hooks/useAuth';

const AuthPopup = () => {
  const popupRef = useRef(null);  
  const { toggleAuthentiactionPopup } = useAuth();
  const [showSignUp, setShowSignup] = useState(true);

    const displaySigninPopup = () => {
      console.log('Display')
      setShowSignup(false);
    }

    const displaySignupPopup = () => {
      console.log('not display')
      setShowSignup(true);
    }

    const handleClick = (e) => {
      if(popupRef.current && !popupRef.current.contains(e.target)){
        toggleAuthentiactionPopup();
      }
    }

    return (
      <div className="overlay" onClick={handleClick}>
        <div className='popup' ref={popupRef}>
        { showSignUp ? <SignupPopup displaySigninPopup={displaySigninPopup}/>  : <SigninPopup displaySignupPopup={displaySignupPopup}/> }
        </div>
      </div>
    )
}

export default AuthPopup