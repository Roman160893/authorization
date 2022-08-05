import { BrowserRouter as Routers, Route } from 'react-router-dom';
import AutorisationPage from './Components/AutorisationPage/AutorisationPage';
import RegistratinPage from './Components/RegistrationPage/RegistratinPage';
import UserPage from './Components/UserPage/UserPage';
import './reset.scss';

function App() {
  return (
    <Routers>
      <Route path='/' exact component={AutorisationPage} ></Route>
      <Route path='/registration' component={RegistratinPage}></Route>
      <Route path='/user' component={UserPage}></Route>
    </Routers>
  );
}

export default App;
