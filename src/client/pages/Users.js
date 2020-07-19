import React from 'react'
import { connect } from 'react-redux'
// actions
import { fetchUsersAsync } from '../actions/users'
// selectors
import { selectUsers } from '../selectors/users'

const Users = (props) => {
    React.useEffect(() => {
        props.fetchUsers()
    }, [])

    return (
        <>

            <h1>Users</h1>

            <ul>

                {props.users.map(({ id, name }) => <li key={id}>{name}</li>)}

            </ul>

        </>
    )
}

const mapStateToProps = (state) => ({
    users: selectUsers(state)
})

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsersAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)
