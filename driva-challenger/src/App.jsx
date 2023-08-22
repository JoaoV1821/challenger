import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header';
import CompanyProfile from './components/CompanyProfile/CompanyProfile';
import CompanyList from './components/CompanyList/CompanyList';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" exact element={<CompanyList/>}/>
        <Route path="/CompanyProfile/:id" element={<CompanyProfile/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App