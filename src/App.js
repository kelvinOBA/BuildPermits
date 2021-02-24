import React from 'react';
import './App.css';
import NavBar from './components/navBar'
import SideBar from './components/sideBar'
import BuildingPerm from './components/buildingPermits'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <SideBar/>
      <BuildingPerm/>
     
    </div>
  );
}

export default App;
