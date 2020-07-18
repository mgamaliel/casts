import HomePage from '../client/pages/Home'
import UsersPage from '../client/pages/Users'

const routes = [

    {
        id: 1,

        path: '/',

        component: HomePage,

        exact: true,
    },

    {
        id: 2,

        path: '/users',

        component: UsersPage,
    }

]

export default routes
