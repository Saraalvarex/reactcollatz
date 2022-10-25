import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import MenuRutas from './components/RutasCollatz/MenuRutas';
import Collatz from './components/RutasCollatz/Collatz';
import Home from './components/RutasCollatz/Home';
import PageNotFound from './components/RutasCollatz/PageNotFound';

export default class Router extends Component {
  render() {
    return (
        <BrowserRouter>
        <MenuRutas/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/collatz" element={<Collatz/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
  }
}
