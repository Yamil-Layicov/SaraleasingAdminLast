import { NavLink } from 'react-router-dom';
import './navbutton.scss';

const NavButton = ({ children, toNavigate }) => {
    
  const target = toNavigate;

  return (
    <NavLink to={target} className='navButton'>
      {children}
    </NavLink>
  );
};

export default NavButton;