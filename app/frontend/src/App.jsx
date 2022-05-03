import ProviderContext from './context/ProviderContext';
import './App.css';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <ProviderContext>
      <AppRoutes />
    </ProviderContext>
  );
}

export default App;
