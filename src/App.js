import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Home';
import MyProducts from './pages/Products'
import RootLayout from './pages/Root';
import Error from './pages/Error';
import ProductDetailPage from './pages/ProductDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage />},
      { path: 'products', element: <MyProducts /> },
      { path: 'products/:productId', element: <ProductDetailPage /> }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
