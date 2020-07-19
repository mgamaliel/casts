import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import axiosInstance from '../../client/config/axios'
import reducers from '../../client/reducers'

const enhancedCompose = __isServer__
    ? compose
    : (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)

const configureStore = (initialState = {}) => {
    const store = createStore(
        reducers,

        initialState,

        enhancedCompose(applyMiddleware(thunk.withExtraArgument(axiosInstance)))
    )

    return store
}

export default configureStore
