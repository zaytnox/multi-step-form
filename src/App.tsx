import StepsCard from './components/StepsCard';
import Card from './components/Card';
import { AppContextProvider } from './contexts/AppContext';
import Steps from './containers/Steps';

function App() {
  return (
    <AppContextProvider>
      <main>
        <Card>
          <StepsCard />
          <Steps />
        </Card>
      </main>
    </AppContextProvider>
  );
}

export default App;
