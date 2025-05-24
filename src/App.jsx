import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Books from './pages/Books';
import About from './pages/About';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/books" component={Books} />
                    <Route path="/about" component={About} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;