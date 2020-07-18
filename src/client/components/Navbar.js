import React from 'react'
import { Link } from 'react-router-dom'

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
        </ul>

    </nav>
)

export default Navbar
