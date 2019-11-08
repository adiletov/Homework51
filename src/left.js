import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Leftblock = (props) => {
    return (
        <div className="leftblock">
            <p>ФИЛЬМЫ</p>
            <Nav vertical>
                <NavItem>
                    <NavLink href="#">2019 года </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">2018 года</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">2017 года</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Русские</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Зарубежные</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Сериалы</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Трейлеры в HD</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">HD филмы</NavLink>
                </NavItem>

            </Nav>
        </div>
    );
}

export default Leftblock;