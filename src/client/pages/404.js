import React from 'react'
import { Helmet } from 'react-helmet'

const NotFound = ({ staticContext }) => {

    if (staticContext) {

        staticContext.notFound = true

    }

    return (
        <>
            <Helmet title="REACT SSR - PAGE NOT FOUND" />

            404 PAGE NOT FOUND
        </>
    )
}

export default NotFound
