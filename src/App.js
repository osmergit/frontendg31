import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//mis componentes
import { CompShowUsers } from './deportes/Mostrarusuarios.jsx'
import { CompCreateUser } from './deportes/Crearusuarios.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
     </header>
      <BrowserRouter>

                      <Routes>
                              <Route path= '/users' element= { <CompShowUsers />} />
                              <Route path= '/create' element= { <CompCreateUser />} />

                      </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
