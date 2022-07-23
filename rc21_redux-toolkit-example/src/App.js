import store from './app/store';
import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';

function App() {
  return (
    <div>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
