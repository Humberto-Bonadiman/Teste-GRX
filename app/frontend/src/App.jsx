import ProviderContext from './context/ProviderContext';
import './App.css';
import Routes from './routes/Routes';

function App() {
  return (
    <ProviderContext>
      <Routes />
    </ProviderContext>
  );
}

export default App;
