import React from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom';
import Header from "./Components/Header/Header";
import MyRoutes from './Components/MyRoutes/MyRoutes';

const App = () => {
    return (
        <div className="App">
            <HashRouter>
                <Header/>
                <MyRoutes/>
            </HashRouter>
        </div>
    );
}

export default App;
