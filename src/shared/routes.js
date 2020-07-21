import HomePage from '../client/pages/Home'
import UsersPage from '../client/pages/Users'
import AdminsPage from '../client/pages/Admins'
import NotFoundPage from '../client/pages/404'
// helpers
import privateRoute from '../client/helpers/privateRoute'

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

        component: privateRoute(AdminsPage)
    },

    {
        id: 4,

        component: NotFoundPage
    }

]

export default routes
