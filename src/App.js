import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Store from './utils/Store';
import { Provider } from 'react-redux';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

export const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "watch",
        element: <WatchPage />
      },
    ]
  },
  
])

function App() {
  return (
    <Provider store={Store}>
      <Header />
      <RouterProvider router={appRoute} />
    </Provider>
  );
}

export default App;
