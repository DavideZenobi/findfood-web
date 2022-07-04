import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import './App.css';
import { About } from './components/About';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { TopBar } from './components/TopBar';
import { HomeView } from './views/HomeView';
import { ProductDetailView } from './views/ProductDetailView';

const AppWrapper = styled.div`
    background-color: #E0E0E0;
    height: 100vh;
`;

function App() {
    return (
        <AppWrapper>
            <BrowserRouter>
                <TopBar />
                <Routes>
                    <Route path="/" element={<HomeView />} />
                    <Route path="/home" element={<HomeView />} />
                    <Route path="/product/:id" element={<ProductDetailView />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </AppWrapper>
    );
}

export default App;
