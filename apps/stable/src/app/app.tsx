import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const Cms = React.lazy(() => import('cms/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cms">Cms</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="stable" />} />
        <Route path="/cms" element={<Cms />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
