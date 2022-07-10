// import React from 'react';
// import logo from './logo.svg';
import { Route, Router, Routes, useLocation, useRoutes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import TenorIndex from './components/TenorIndex/TenorIndex.component';

function App() {
  // const location = useLocation();
  // console.log(location);
//   const routes = useRoutes([
//     { path: '/', element: <TenorIndex /> },
//     { path: 'search', element: <TenorIndex /> },
//     // { path: 'usluge', element: <Services /> },
//     // { path: 'galerija', element: <Gallery /> },
//     // { path: 'cjenovnik', element: <Prices /> },
//     // { path: 'kontakt', element: <Contact /> }
// ]);

// return routes;
  // return (
  //   <Router >
  //     <TenorIndex />
  //   </Router>
  // );
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" >
        <Route index element={<TenorIndex  isNotFoundPage='NO IDEA'/>} />
        <Route path="/search/:searchTerm" element={<TenorIndex name='Venkat'/>}/>
          {/* <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />  */}
          <Route path='*' element={<TenorIndex isNotFoundPage={true}/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
