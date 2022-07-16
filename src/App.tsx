import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import TenorIndex from './components/TenorIndex/TenorIndex.component';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" >
        <Route index element={<TenorIndex/>} />
        <Route path="/search/:searchTerm" element={<TenorIndex/>}/>
          <Route path='*' element={<TenorIndex/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
