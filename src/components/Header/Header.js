import { Link } from 'react-router-dom'
import './Header.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom"

const Header = () => {
    return (
        
        <div className="header">
            <Router>
                <Switch>
                <Route path="/about"></Route>
                <Route path="/store"></Route>
                <Route path="/gmail"></Route>
                <Route path="/images"></Route>
                </Switch>
            
                <div className='header-left'>
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className='header-right'>
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <Link to="/apps">Apps</Link>
                    <Link to="/account">Account</Link>
                </div>
            </Router>
        </div>
    )
}

export default Header
