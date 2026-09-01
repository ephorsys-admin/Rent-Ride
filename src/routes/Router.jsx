import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import PageNotFound from '../helpers/PageNotFound'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Services from '../pages/Services'
import Cars from '../pages/Cars'
import Bikes from '../pages/Bikes'
import CarDetails from '../pages/CarDetails'


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/self-drive-car-rental-kiit', element: <Home /> },
            { path: '/contact', element: <Contact /> },
            { path: '/about', element: <About /> },
            { path: '/cars', element: <Cars /> },
            { path: '/cars/:id', element: <CarDetails /> },
            { path: '/bike', element: <Bikes /> },
            { path: '/services', element: <Services /> },
            { path: '/*', element: <PageNotFound /> },
        ]
    }
])

export default Router
