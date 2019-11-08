import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <header className="header">
            <Navbar expand="md" >
                <NavbarBrand href="/" >
                    <img src="https://goodwincinema.ru/img/logo.png" alt="" className="logopng"/>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink  onClick={toggle} style={{ marginBottom: '1rem' }}>Войти</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  onClick={toggle} style={{ marginBottom: '1rem' }}>Регистрация</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Жанры
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Боевик
                                </DropdownItem>
                                <DropdownItem>
                                    Мелодрамма
                                </DropdownItem>
                                <DropdownItem>
                                    Фантастика
                                </DropdownItem>
                                <DropdownItem>
                                    Мультфильмы
                                </DropdownItem>
                                <DropdownItem>
                                    Сериалы
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Закрыть
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </header>

    );
}

export default Navigation;