import React from 'react';
import ProviderContext from './context/ProviderContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <ProviderContext>
      <AppRoutes />
    </ProviderContext>
  );
}

export default App;
