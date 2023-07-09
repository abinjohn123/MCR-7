import { Routes, Route } from 'react-router';

import Destinations from './Components/Destinations';
import DestinationPage from './Components/DestinationPage';
import './App.scss';

const NullComponent = () => null;

function App() {
  return (
    <>
      <h1 className="app-header">Welcome to Trip Advisor</h1>
      <Routes>
        <Route path="/" element={<Destinations type="continents" />} />
        <Route
          path="/:continentId"
          element={<Destinations type="countries" />}
        />
        <Route
          path="/:continentId/:countryId"
          element={<Destinations type="places" />}
        />
        <Route
          path="/:continentId/:countryId/:destinationId"
          element={<DestinationPage />}
        />
      </Routes>
    </>
  );
}

export default App;
