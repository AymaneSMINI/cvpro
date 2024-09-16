import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home';
import  Mydata from './mydata';
import Contents from './Contents';
import Templates from './Templates';

const AppRouter = () => {

    return (
        <BrowserRouter>
        <Routes>
            <Route index element = {<Home />} />
            <Route path='mydata' element = {<Mydata />} />
            <Route path='contents' element = {<Contents />} />
            <Route path='templates' element = {<Templates />} />
        </Routes>
        </BrowserRouter>
    );
}
export default AppRouter;