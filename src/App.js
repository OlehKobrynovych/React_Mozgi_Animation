import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import HomeView from "./views/HomeView/HomeView";
import WhereView from "./views/WhereView/WhereView";
import WhoView from "./views/WhoView/WhoView";
import WhatView from "./views/WhatView/WhatView";

import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="Where" element={<WhereView />} />
                <Route path="What" element={<WhatView />} />
                <Route path="Who" element={<WhoView />} />
            </Routes>
        </div>
    );
}

export default App;
