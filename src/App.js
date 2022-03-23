
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainBody from './components/Body/MainBody';
import MainHeader from './components/Header/MainHeader';

function App() {
  return (
    <BrowserRouter>
      <MainHeader />
      <MainBody />
    </BrowserRouter>
  );
}

export default App;
