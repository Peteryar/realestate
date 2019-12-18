import React from 'react';
import './styles.css';

const Header = (props) => {
    return (
        <div>
            <header id="header-con">
                <div style={{width:'20%'}}> <i class="fas fa-bars"></i></div>
                <ul className="nav">
                    <li><i class="far fa-bell"></i></li>
                    <li className="signup">Sign Up</li>
                    <li className ="login" style={{marginRight:0}}>Login</li>
                </ul>
            </header>
        </div>
    )
}
export default Header;