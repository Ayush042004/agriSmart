import { createRoot } from 'react-dom/client'
import {Provider} from "react-redux";
import store from './store/store.js';
import './index.css';
import App from './App.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Market from './components/Market.jsx';
//import Login from './components/Login.jsx';
//import Signup from './components/Signup.jsx';
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import './i18n.js';
import FileUpload from './components/DiseaseDetect.jsx';
import Wheather from './components/Wheather.jsx';
import Map from "./components/Map.jsx"
import MapML from './components/MapML.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/marketplace" element={<Market/>}/>
      {/*<Route path="/login" element={<Login/>}/>*/}
      {/*<Route path="/signup" element={<Signup/>}/>*/}
      <Route path="/Diseasedetect" element={<FileUpload/>}/>
      <Route path="/Wheather" element={<Wheather/>}/>
      <Route path="/intelligence" element={<Map/>}/>
      <Route path="/MapMl" element={<MapML/>}/>
     

    </Route>
  ))

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={router}/>
  </Provider>
)
