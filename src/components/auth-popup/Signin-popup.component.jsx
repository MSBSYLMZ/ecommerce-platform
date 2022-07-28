
import CustomInput from "../custom-input/Custom-input.component"
import CustomButton from "../custom-button/Custom-button.component"
import { useState } from "react"
import useAuth from "../../hooks/useAuth"

const SigninPopup = ({displaySignupPopup}) => {
    const { login } = useAuth();
    const [ form, setForm ] = useState({
        username:'',
        password: ''
    })
    const handleFormChange = (e) => {
        const newState = {...form};
        const key = e.target.id;
        const value = e.target.value;
        newState[key] = value;
        setForm(newState);
        }
    const handleSubmit = () => {
        login(form);
    }

    return (
        <div>
            <div className="auth-title">Discover. Share. Inspire.</div>
            <div className="auth-description">The first social marketplace of its kind</div>
            <div className="auth-form-element">
            <label htmlFor="">Username</label>
            <CustomInput id='username' placeholder='Your username' value={form.username} onChange={handleFormChange}/>
            </div>
            <div className="auth-form-element">
            <label htmlFor="">Password</label>
            <CustomInput id='password' type="password" placeholder='Your password' value={form.password} onChange={handleFormChange}/>
            <div className="worning"></div>
            </div>
            <CustomButton onClick={handleSubmit}>Login</CustomButton>
            <div className="auth-navigator">Don't have an account? <span onClick={displaySignupPopup}>Sign Up</span></div>
        </div>
    )
}

export default SigninPopup