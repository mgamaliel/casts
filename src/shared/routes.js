import HomePage from '../client/pages/Home'
import UsersPage from '../client/pages/Users'
import AdminsPage from '../client/pages/Admins'

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
    },

    {
        id: 3,

        path: '/admins',

        component: AdminsPage
    }

]

export default routes
