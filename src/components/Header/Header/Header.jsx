import React, {useRef, useEffect} from 'react';
import {Container, Row, Button} from 'reactstrap';
import {NavLink, Link} from 'react-router-dom';

import logo from '../../../assets/images/logo.png';
import './Header.css';

import ThemeButton from '../../../shared/ThemeButton'

const nav_links = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/about',
        display: 'About'
    },
    {
        path: '/tours',
        display: 'Tours'
    },
]

const Header = () => {

    const headerRef = useRef(null);

    const stickyHeaderFunc = ()=> {
        window.addEventListener('scroll', ()=> {
            if(document.body.scrollTop >20 ||  document.documentElement.scrollTop >20) {
                headerRef.current.classList.add('sticky_header')
            } else {
                headerRef.current.classList.remove('sticky_header')
            }
        })
    }

    useEffect(()=> {
        stickyHeaderFunc()

        return window.removeEventListener('scroll', stickyHeaderFunc)
    })

    return <header className="header" ref={headerRef}>
        <Container>
            <Row>
                <div className="nav_wrapper d-flex align-items-center justify-content-between">
                    
                    {/* ======== logo ======== */}
                        <div className="logo">
                            <img src={logo} alt=""/>
                        </div>
                    {/* ======== logo end======== */}

                    {/* ========menu start======== */}

                        <div className="navigation">
                            <ul className="menu d-flex align-items-center gap-5">{
                                    nav_links.map((item, index)=>(
                                        <NavLink to={item.path} key={item.id + index} className={navClass=> navClass.isActive ? "active_link" : '' }> {item.display} </NavLink>
                                    ))}
                            </ul>
                        </div>

                    {/* ========menu end======== */}

                    <div className="nav_right d-flex align-items-center gap-4">
                        <div className="nav_btns d-flex align-items-center gap-4">
                            <Button className="btn secondary_btn"><Link to='/login' className="login_btn">Login</Link></Button>
                            <Button className="btn primary_btn"><Link to='/register' className="register_btn">Register</Link></Button>
                        </div>
                    </div>

                    <span className="toggle_btn-dark">
                        <ThemeButton />
                    </span>

                    <span className="mobile_menu">
                        <i className="ri-menu-line"></i>
                    </span>

                </div>

            </Row>
        </Container>
    </header>;
};

export default Header;