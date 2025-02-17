import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Market from './components/Market.jsx'
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import './i18n.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/marketplace" element={<Market/>}/>
      
    </Route>
  ))

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
