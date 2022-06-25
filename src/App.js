import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import WherePage from './components/WherePage/WherePage';
import WhoPage from './components/WhoPage/WhoPage';
import WhatPage from './components/WhatPage/WhatPage';

import './App.css';

function App() {
    return (
        <div className="App">
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
