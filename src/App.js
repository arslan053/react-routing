import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Home';
import MyProducts from './pages/Products'
import RootLayout from './pages/Root';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <HomePage />},
      { path: '/products', element: <MyProducts /> }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
