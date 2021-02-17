import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import OilChange from './components/OilChange';
import VehicleContextProvider from './contexts/VehicleContext';
import VehicleList from './components/VehicleList';


const App = () => {
    return (
      <VehicleContextProvider>
        <BrowserRouter>
          <Route exact path='/' component={Home} />
          <Route path='/oilchange' component={OilChange} />
          <Route path='/vehiclelist' component={VehicleList} />
        </BrowserRouter>
      </VehicleContextProvider>       
    )
}
export default App;
