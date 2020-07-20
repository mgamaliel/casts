import React from 'react'
import { connect } from 'react-redux'
// selectors
import { selectIsAuthenticated } from '../selectors/user'

const GoogleButton = ({ isAuthenticated }) => {
    const [href, setHref] = React.useState('')
    const handleClick = () => window.location.href = href

    React.useEffect(() => {
        const baseURL = process.env.BASE_URL_API

        if (isAuthenticated) {
            setHref(`${baseURL}/logout`)
        } else {
            setHref(`${baseURL}/auth/google`)
        }
    }, [isAuthenticated])

    return (
        <button onClick={handleClick}>

            {isAuthenticated ? 'LOGOUT' : 'LOGIN'}

        </button>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: selectIsAuthenticated(state)
})

export default connect(mapStateToProps)(GoogleButton)
