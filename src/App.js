import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Legal from './pages/Legal/Legal';
import Linktree from './pages/Linktree/Linktree';

import CookieConsent from './components/CookieConsent';
import DarkmodeToggle from './components/DarkmodeToggle';

function App() {
  return (
    <>
      <DarkmodeToggle />
      <CookieConsent text="This site uses cookies. By accepting this prompt, you agree to our cookie-policy." />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/linktree" element={<Linktree />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
