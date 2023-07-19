
import React from 'react';

import { useSelector } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { BiSolidUserCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { userLogOut } from '../../../store/userSlice';
import { useDispatch } from 'react-redux';

// import './style.css';

import logo from '../../../assets/logo.jpg';

function Navbar() {

  const {isSignIn} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(userLogOut());
    Navigate('/')
  }

    return (
        <header>
            <div className=' w-80 d-flex-justify-continent-between'>
            <div className='logo-container'>
             <img src={logo} alt='logo' />
            </div>
            <div className='navbar-right-container'>

            <DropdownButton  id="dropdown-button" title={<BiSolidUserCircle/>}>
              <Dropdown.Item onClick={handleSignOut} > {isSignIn ? 'Log Out' : ''}</Dropdown.Item>
             <Dropdown.Item >Help</Dropdown.Item>

      
            </DropdownButton>

           
            </div>

            </div>
        </header>
  

  
      );
  }
  
  export default Navbar;
