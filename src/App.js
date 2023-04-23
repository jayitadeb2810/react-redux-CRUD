import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./components/Home";
import CreateData from './components/CreateData';
import Update from './components/Update';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/CreateData' element={<CreateData />}/>
        <Route path='/update/:id' element={<Update />}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
