import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Store from './utils/Store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={Store}>
      <Header />
      <Body/>
    </Provider>
  );
}

export default App;
