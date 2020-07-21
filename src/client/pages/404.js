import React from 'react'

const NotFound = ({ staticContext }) => {

    if (staticContext) {

        staticContext.notFound = true

    }

    return (
        <>
            404 PAGE NOT FOUND
        </>
    )
}

export default NotFound
