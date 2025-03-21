import React from 'react';
import GlobalStyle from './globalStyles';
import HomePage from './pages/HomePage/HomePage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import {Footer, Navbar} from './components';
import PortfolioPage from "./pages/Portfolio/PortfolioPage";


function App() {
    return (
        <Router>
            <GlobalStyle/>
            <ScrollToTop/>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={HomePage}/>
                <Route path='/portfolio' component={PortfolioPage}/>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
