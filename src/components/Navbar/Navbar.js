import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

import './Navbar.css';




function Navbar() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onOpenPage = (route) => {
        navigate(`/${route}`);
        setAnchorEl(null);
    };

  return (
    <div className="navbar">
        <div className='navbar__menu-mob'>
            <Button className='navbar__mob-toggle' aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <div className='navbar__mob-toggle-icon'>
                </div>
            </Button>

            <Menu
                className='navbar__mob-link-wrap'
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => onOpenPage('')}>Home</MenuItem> 
                <MenuItem onClick={() => onOpenPage('Where')}>Where?</MenuItem> 
                <MenuItem onClick={() => onOpenPage('What')}>What?</MenuItem> 
                <MenuItem onClick={() => onOpenPage('Who')}>Who?</MenuItem> 
            </Menu>
        </div>

        <NavLink to="/" className="navbar__logo">
            <svg id="svg1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 85 46" fill="none">
                <defs>
                    <filter id="violet-fill" x="0%" y="0%">
                        <feFlood floodColor="#000" />
                        <feOffset dy="0">
                            <animate id="anim" attributeName="dy" values="100;115;0" dur="4s" restart="whenNotActive" fill="freeze"/> 
                        </feOffset>
                        <feComposite operator="in" in2="SourceGraphic" />
                        <feComposite operator="over" in2="SourceGraphic" />
                    </filter>
                </defs>
            
                <path 
                    fillRule="evenodd"
                    clipRule="evenodd"
                    className='navbar__logo-path' 
                    id="path1" 
                    d="M29.1881 6.12368L37.1967 4.76944V32.3073L29.1881 30.9529V6.12368ZM25.7709 2.70864V34.3682L40.6138 37.0767V0L25.7709 2.70864ZM69.2349 18.1975V21.6108H73.8769V30.9366H65.4666V6.12038H72.6661V11.1968H76.0816V2.7072H62.0511V34.3498H77.2924V18.1975H69.2349ZM11.6071 28.088L11.6259 28.1724C13.5022 19.6456 15.3722 11.1529 17.2328 2.70721H22.3529V34.3496H18.9376V9.63353C18.8876 9.63353 13.2524 34.3656 13.2524 34.3656H9.96191C9.96191 34.3656 4.3267 9.63353 4.27684 9.63353V34.3496H0.861328V2.70721H5.98131C7.8421 11.1529 9.71227 19.6456 11.5885 28.1724C11.5948 28.1442 11.6007 28.1161 11.6071 28.088ZM54.9259 6.12045H44.4379V2.70727H58.6289V6.12045L48.1405 30.9365H58.6289V34.3498H44.4379V30.9365L54.9259 6.12045ZM84.1299 34.35H80.7142V2.7074H84.1299V34.35ZM30.9617 45.9999V45.4751H28.2521V43.8936H30.353V43.3689H28.2521V41.9542H30.8591V41.4293H27.6754V45.9999H30.9617ZM33.6423 41.4292H34.251L35.4999 45.4108H35.8204L37.0694 41.4292H37.6652L36.2045 45.9999H35.1027L33.6423 41.4292ZM43.9078 45.9999V45.4751H41.1982V43.8936H43.2995V43.3689H41.1982V41.9542H43.8055V41.4293H40.6218V45.9999H43.9078ZM50.7845 41.4292V45.9999H49.8749L47.7484 42.1782H47.6071V45.9999H47.0437V41.4292H47.9533L50.0798 45.251H50.2207V41.4292H50.7845ZM55.8168 41.9416H57.3159V41.4292H53.7286V41.9416H55.24V46H55.8168V41.9416Z" 
                    fill="#fff"  
                />
            </svg>  
        </NavLink>
        
        <div className="navbar__lang">
            <div className='navbar__lang-menu'>
                <div>👅</div>
                <div className="navbar__lang-btns">
                    <button className="navbar__lang-btn">RU</button>|
                    <button className="navbar__lang-btn">UA</button>
                </div>
            </div>
        </div>

        <NavLink to="/Where" className="navbar__link navbar__link-left">Where?</NavLink>
        <NavLink to="/What" className="navbar__link navbar__link-right">What?</NavLink>
        <NavLink to="/Who" className="navbar__link navbar__link-bottom">Who?</NavLink>
    </div>
  );
}

export default Navbar;
