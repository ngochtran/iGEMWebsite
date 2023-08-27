import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Description from './components/pages/Description';
import Home from './components/pages/Home';
import Design from './components/pages/Design';
import Engineering from './components/pages/Engineering';
import Implementation from './components/pages/Implementation';
import Results from './components/pages/Results';
import PartCollection from './components/pages/PartCollection';
import Parts from './components/pages/Parts';
import Experiments from './components/pages/Experiments';
import Safety from './components/pages/Safety';
import Notebook from './components/pages/Notebook';
import HumanPractices from './components/pages/IntegratedHumanPractices';
import Communication from './components/pages/Communication';
import SustainableDevelopment from './components/pages/SustainableDevelopment';
import Education from './components/pages/Education';
import Team from './components/pages/Team';
import Attributions from './components/pages/Attributions';
import Contribution from './components/pages/Contribution';
import Awards from './components/pages/Awards';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/description" element={<Description />} />
        <Route path="/home" element={<Home />} />
        <Route path="/design" element={<Design />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/implementation" element={<Implementation />} />
        <Route path="/results" element={<Results />} />
        <Route path="/partcollection" element={<PartCollection />} />
        <Route path="/parts" element={<Parts />} />
        <Route path="/experiments" element={<Experiments />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/notebook" element={<Notebook />} />
        <Route path="/integratedhumanpractices" element={<HumanPractices />} />
        <Route path="/communication" element={<Communication />} />
        <Route path="/sustainabledevelopment" element={<SustainableDevelopment />} />
        <Route path="/education" element={<Education />} />
        <Route path="/ourteam" element={<Team />} />
        <Route path="/attributions" element={<Attributions />} />
        <Route path="/ourcontribution" element={<Contribution />} />
        <Route path="/awards" element={<Awards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;