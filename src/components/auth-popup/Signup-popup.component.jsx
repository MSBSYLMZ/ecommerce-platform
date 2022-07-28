import { useState } from "react"
import CustomInput from "../custom-input/Custom-input.component";
import CustomButton from "../custom-button/Custom-button.component";
import useAuth from "../../hooks/useAuth";

const SignupPopup = ({displaySigninPopup}) => {

  const { createUser } = useAuth();

  const [ form, setForm ] = useState({
    email: '',
    fullName: '',
    username: '',
    password: '', 
    terms: false
  });

  const handleFormChange = (e) => {
    const newState = {...form};
    const key = e.target.id;
    const value = e.target.value;
    newState[key] = value;
    setForm(newState);
  }

  const handleSubmit = () => {
    alert('creating')
    createUser(form);
  }

  return (
    <div>
        <div className="auth-title">Discover. Share. Inspire.</div>
        <div className="auth-description">The first social marketplace of its kind</div>
        <div className="auth-form-element">
          <label htmlFor="">E-mail</label>
          <CustomInput id='email' type="email" placeholder='name@example.com' value={form.email} onChange={handleFormChange}/>
        </div>
        <div className="auth-form-element">
          <label htmlFor="">Name and surname</label>
          <CustomInput id='fullName' placeholder='Full name' value={form.fullName} onChange={handleFormChange}/>
        </div>
        <div className="auth-form-element">
          <label htmlFor="">Username</label>
          <CustomInput id='username' placeholder='Your username' value={form.username} onChange={handleFormChange}/>
        </div>
        <div className="auth-form-element">
          <label htmlFor="">Password</label>
          <CustomInput id='password' type="password" placeholder='Your password' value={form.password} onChange={handleFormChange}/>
          <div className="worning"></div>
        </div>
        <CustomButton onClick={handleSubmit}>Sign Up</CustomButton>
        <div className="auth-navigator">Already have an account? <span onClick={displaySigninPopup}>Login</span></div>
    </div>
  )
}

export default SignupPopup