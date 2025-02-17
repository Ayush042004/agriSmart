import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import store from './store/store.js';
import './index.css';
import App from './App.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Market from './components/Market.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
//import ProtectedRoute from './components/ProtectedRoute.jsx';
import './i18n.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>

      
      
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/marketplace" element={<Market />} />
      

      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
