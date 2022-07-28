import { useNavigate } from 'react-router-dom';

const Logo = ({ size = 'medium' }) => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/');
  }

  const sizeToPx = {
      small: '24px',
      medium: '36px',
      large: '48px'
  }

  const logoStyles = {
    fontSize: sizeToPx[size],
    marginTop:'10px',
    fontWeight: 'bold',
    color: 'var(--color3)',
    cursor:'pointer'
  }
  
    return (
    <div style={logoStyles} onClick={navigateToHome}>looksie</div>
  )
}

export default Logo