import Router from './Router';
import Header from './component/Header';
import { BrowserRouter } from 'react-router-dom';
import './AppStyled.ts';
import Progress from './component/Progress';

function App() {
  return (
    <BrowserRouter>
      <Progress/>
      <Header/>
      <Router/>
    </BrowserRouter>
  );
}

export default App;
