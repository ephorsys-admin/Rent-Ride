import { RouterProvider } from 'react-router-dom';
import Router from './routes/Router';
import './App.css';
import useScrollAnimation from './shared/Helpers/useScrollAnimation';

function App() {
   useScrollAnimation();
  return <RouterProvider router={Router} />;
}

export default App;