import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../../client/reducers'

const enhancedCompose = __isServer__
    ? compose
    : (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)

/**
 * Create redux store
 * @param {Object} initialState Preloaded state for redux store
 * @param {Function} axiosInstance Axios instance for async dispatching
 */
const configureStore = (initialState = {}, axiosInstance) => {
    const store = createStore(
        reducers,

        initialState,

        enhancedCompose(applyMiddleware(thunk.withExtraArgument(axiosInstance)))
    )

    return store
}

export default configureStore
