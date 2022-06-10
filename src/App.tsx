import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { About } from './components/About';
import { TopBar } from './components/TopBar';
import { HomeView } from './views/HomeView';
import { ProductDetailView } from './views/ProductDetailView';

function App() {
    return (
        <>
            <BrowserRouter>
                <TopBar />
                <Routes>
                    <Route path="/" element={<HomeView />} />
                    <Route path="/home" element={<HomeView />} />
                    <Route path="/product/:id" element={<ProductDetailView />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
