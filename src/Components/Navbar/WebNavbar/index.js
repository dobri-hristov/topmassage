import React, { Fragment, useContext } from 'react'
import ProfileAvatar from '../ProfileAvatar'
import { AuthContext } from '../../../Shared/Contexts/ContextWrapper'
import {
    Nav,
    Logo,
    NavLogo,
    LogoContainter,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";
import logo from '../../../Shared/Assets/logo.jpg'

const WebNavbar = () => {
    const { auth, username, isLoaded } = useContext(AuthContext)

    return (
        <Fragment>
            <LogoContainter>
                <NavLogo to="/">
                    <Logo src={logo} alt="top massage logo" />
                </NavLogo>
            </LogoContainter>
            <Nav>
                <NavMenu>
                    <NavLink exact to="/">
                        Начало
                    </NavLink>
                    <NavLink to="/massages" >
                        Масажи
                    </NavLink>
                    <NavLink to="/prices" >
                        Цени
                    </NavLink>
                    <NavLink to="/contact" >
                        Контакти
                    </NavLink>
                    <NavLink to="/reservation" >
                        Запази час
                    </NavLink>
                    <NavLink to="/about" >
                        За нас
                    </NavLink>
                    {
                        isLoaded
                            ?
                            !auth
                                ? <Fragment>
                                    <NavBtn>
                                        <NavBtnLink to="/sign-in">Вход</NavBtnLink>
                                    </NavBtn>
                                    <NavBtn>
                                        <NavBtnLink to="/sign-up">Регистрация</NavBtnLink>
                                    </NavBtn>
                                </Fragment>
                                : <ProfileAvatar name={username} />
                            : null
                    }
                </NavMenu>
            </Nav>
        </Fragment>
    )
}

export default WebNavbar
