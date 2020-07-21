import React from 'react'
import { Link } from 'react-router-dom'
// components
import GoogleButton from './GoogleButton'

const Navbar = () => (
    <nav>

        <ul>
            <li>

                <Link to="/">
                    HOME
                </Link>

            </li>

            <li>

                <Link to="/users">
                    USERS
                </Link>

            </li>

            <li>

                <Link to="/admins">
                    ADMINS
                </Link>

            </li>

            <li>

                <GoogleButton />

            </li>
        </ul>

    </nav>
)

export default Navbar
