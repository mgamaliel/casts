import React from 'react'
import { connect } from 'react-redux'
// selectors
import { selectAdmins } from '../selectors/admins'
// actions
import { fetchAdminsAsync } from '../actions/admins'

const Admins = (props) => {
    React.useEffect(() => {
        props.fetchAdmins()
    }, [])

    return (
        <>

            <h1>Admins</h1>

            <ul>

                {props.admins.map(({ id, name }) => <li key={id}>{name}</li>)}

            </ul>

        </>
    )
}

const mapStateToProps = (state) => ({
    admins: selectAdmins(state)
})

const mapDispatchToProps = (dispatch) => ({
    fetchAdmins: () => dispatch(fetchAdminsAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(Admins)
