import Home from '../pages/home'
import ProductPage from '../pages/product/_page'
import SolutionPage from '../pages/solution/_page'
// import ErrorPage from '../layouts/errorPage'
// import Redirect from '../layouts/redirect'
// import NotFound from '../layouts/notFound'


export default [
    {
        path: '/',
        name: 'home',
        Component: Home,
    },
    {
        path: '/preview',
        name: 'home',
        Component: Home,
    },
    {
        path: '/product',
        name: 'productPage',
        Component: ProductPage,
    },
    {
        path: '/product/:page',
        name: 'productPage',
        Component: ProductPage,
    },
    {
        path: '/solution',
        name: 'solutionPage',
        Component: SolutionPage,
    },
    {
        path: '/solution/:page',
        name: 'solutionPage',
        Component: SolutionPage,
    },
    // {
    //     path: '/errorPage',
    //     name: 'errorPage',
    //     Component: ErrorPage,
    // },
    // {
    //     path: '/redirect',
    //     name: 'redirect',
    //     Component: Redirect,
    // },
    // {
    //     path: '/notFound',
    //     name: 'notFount',
    //     Component: NotFound,
    // },
]
