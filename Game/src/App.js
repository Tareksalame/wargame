
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import AdminPage from './components/AdminPage';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AdminPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

