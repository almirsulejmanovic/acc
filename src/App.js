import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppContextProvider from './contexts/AppContext';
import NavigationBar from './components/NavigationBar'
import Home from './components/Home';
import OilChange from './components/OilChange';
import VehicleList from './components/VehicleList';
import Battery from './components/Battery';
import Tires from './components/Tires';
import Misc from './components/Misc';


export default function App() {
  return (
    <>
      <AppContextProvider>
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/oilchange' element={<OilChange />} />
            <Route path='/battery' element={<Battery />} />
            <Route path='/tires' element={<Tires />} />
            <Route path='/misc' element={<Misc />} />
            <Route path='/vehiclelist' element={<VehicleList />} />
          </Routes>
        </BrowserRouter>
      </AppContextProvider>
    </>
  )
}
