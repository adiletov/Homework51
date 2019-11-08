import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

const Footer = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);

    return (
        <footer className="footer">
            <img src="https://www.facebook.com/images/fb_icon_325x325.png" alt="" className="socials"/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKjTtXsnXqHVpirjmEUeXtDD8qLs3WNphhX11ypXIGAdFjhX_-&s" alt="" className="socials"/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFou9C18b0CqinxRp4AdR0Bp9CDzn0UA4PC5KmmPND5Glhqg_WCw&s" alt="" className="socials"/>
                <p>Контакты

                </p>
                <p>Пожелания</p>
                <p>Copiryght 2019 11 10</p>

        </footer>
    );
}

export default Footer;