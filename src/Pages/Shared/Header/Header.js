import React from 'react';
import { Link } from 'react-router-dom';

import { useAuthState } from 'react-firebase-hooks/auth';
import './Header.css';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    }

    return (
        <>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <Link to='/' style={{ fontWeight: 'bold' }}>
                        <a class="navbar-brand" href="#">Ed Tech</a>
                    </Link>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to='/' style={{ textDecoration: 'none', fontWeight: 'bold' }}>
                                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                                </Link>
                            </li>
                            <li class="nav-item" style={{ textDecoration: 'none', fontWeight: 'bold' }}>
                                <a class="nav-link" href="#">Blogs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                        {
                            user ? <button className='login-btn' onClick={logout}>LogOut</button> : <Link to='/login'>
                                <button className='login-btn'>Login</button>
                            </Link>
                        }
                        {/* <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;