import './App.css';

import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import WherePage from './components/WherePage/WherePage';
import Navbar from './components/Navbar/Navbar';
import WhoPage from './components/WhoPage/WhoPage';
import WhatPage from './components/WhatPage/WhatPage';

function App() {
    return (
        <div className="App" data-barba="container">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Where" element={<WherePage />} />
                <Route path="What" element={<WhatPage />} />
                <Route path="Who" element={<WhoPage />} />
            </Routes>
        </div>
    );
}

export default App;
