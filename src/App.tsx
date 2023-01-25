import Router from './router/Router';
import Header from './component/common/Header';
import { BrowserRouter } from 'react-router-dom';
import './AppStyled.ts';
import Progress from './component/common/Progress';

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
