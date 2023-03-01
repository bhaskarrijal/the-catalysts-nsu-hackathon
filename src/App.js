import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Vote from './page/Vote'
import Results from './page/Results'

const App = () => {
    return (
        <>
            <BrowserRouter>
                {/* <Header /> */}
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/vote" element={<Vote />} />
                    <Route exact path="/results" element={<Results />} />
                </Routes>
                {/* <Footer /> */}
            </BrowserRouter>
        </>
    )
}

export default App

// Green and White for trust and transparency