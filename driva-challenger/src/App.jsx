import React from 'react';
import {BrowserRouter, Route, Routes as Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import CompanyProfile from './components/CompanyProfile/CompanyProfile';
import CompanyList from './components/CompanyList/CompanyList';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>

      <Switch>
        <Route path="/" element={<CompanyProfile/>}/>
        <Route path="/CompanyList" element={<CompanyList/>}/>
      </Switch>
      
    </BrowserRouter>
  )
}

export default App