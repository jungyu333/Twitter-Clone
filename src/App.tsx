import { useRefreshUser } from 'hooks/useRefreshUser';
import Router from './Router';

function App() {
  useRefreshUser();

  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
