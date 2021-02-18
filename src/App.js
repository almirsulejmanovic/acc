import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import VehicleContextProvider from './contexts/VehicleContext';
import Home from './components/Home';
import OilChange from './components/OilChange';
import Tires from './components/Tires';
import Battery from './components/Battery';
import VINDecoder from './components/VINDecoder';
import VehicleList from './components/VehicleList';

const App = () => {
    return (
      <VehicleContextProvider>
        <BrowserRouter>
          <Route path='/acc-gh-pages' component={Home} />
          <Route path='/oilchange' component={OilChange} />
          <Route path='/tires' component={Tires} />
          <Route path='/battery' component={Battery} />
          <Route path='/vehiclelist' component={VehicleList} />
          <Route path='/VINDecoder' component={VINDecoder} />
        </BrowserRouter>
      </VehicleContextProvider>       
    )
}
export default App;