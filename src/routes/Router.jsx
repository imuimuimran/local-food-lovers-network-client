import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayouts from '../layouts/HomeLayouts';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AddReview from '../pages/AddReview';
import AllReviews from '../pages/AllReviews';
import MyReviews from '../pages/MyReviews';
import MyFavorites from '../pages/MyFavorites';
import ProtectedRoute from './ProtectedRoute';
// import ProtectedRoute from '../provider/ProtectedRoute';
import ErrorPage from '../pages/ErrorPage';



const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayouts />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/add-review',
                element: (
                    <ProtectedRoute>
                        <AddReview />
                    </ProtectedRoute>
                ),
            },
            {
                path: '/all-reviews',
                element: <AllReviews />
            },
            {
                path: '/my-reviews',
                element: (
                    <ProtectedRoute>
                        <MyReviews />
                    </ProtectedRoute>
                ),
            },
            {
                path: '/my-favorites',
                element: (
                    <ProtectedRoute>
                        <MyFavorites />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/*",
                element: <ErrorPage></ErrorPage>
            },
        ]
    }
]);

export default function RouterWrapper() {
    return <RouterProvider router={router} />;
}
