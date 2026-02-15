import { RouterProvider } from 'react-router-dom';
import Router from './routes/Router';
import './App.css';
import UseScrollAnimation from './shared/helpers/UseScrollAnimation';

function App() {
   UseScrollAnimation();
  return <RouterProvider router={Router} />;
}

export default App;