import React from 'react';
import HikingApiGetConditionsById from '../components/HikingAPI/HikingApiGetConditionsById';
import HikingApiGetTrails from '../components/HikingAPI/HikingApiGetTrails';
import HikingApiGetTrailsById from '../components/HikingAPI/HikingApiGetTrailsById';

function App() {
  return (
    <>
      <HikingApiGetTrails />
      <HikingApiGetTrailsById />
      <HikingApiGetConditionsById />
    </>
  )
}

export default App;
