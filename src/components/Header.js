import { Close, MenuOutlined } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header = () => {
  return (
    <div className='header'>
        <div className="header__logo">
            <h1>Leedd</h1>
        </div>

        <nav>
            <ul>

                <div className="closed">
                    <Close className='close'/>
                </div>

                <li>
                    <Link to='/'>Home</Link>
                </li>

                <li>
                    <Link to='/'>About</Link>
                </li>   

                <li>
                    <Link to='/'>Portfolio</Link>
                </li>

                <li>
                    <Link to='/'>Pages</Link>
                </li>   

                <li>
                    <Link to='/'>Blog</Link>
                </li>

                <li>
                    <Link to='/'>Contact</Link>
                </li>               

            </ul>
        </nav>

        <div className="changer">
            <MenuOutlined className='menu' />
        </div>

    </div>
  )
}

export default Header;
