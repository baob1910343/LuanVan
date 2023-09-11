import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import SignInPage from "../pages/SignInpage/SignInpage";
import SignUpPage from "../pages/SignUppage/SignUppage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage.jsx";
export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
        
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true
    },
    {
        path: '/products',
        page: ProductsPage,
        isShowHeader: true
    },
    {
        path: '/:type',
        page:TypeProductPage,
        isShowHeader: true
    },
    {
        path: '/sign-in',
        page: SignInPage,
        isShowHeader: true
    },
    {
        path: '/sign-up',
        page: SignUpPage,
        isShowHeader: true
    },
    
    {
        path: '/product-details',
        page:ProductDetailsPage,
        isShowHeader: true
    },
    {
        path: '*',
        page: NotFoundPage
    }
]