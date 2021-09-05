import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-bottom">
                <Router>
                    <Switch>
                    <Route path="/advertising"></Route>
                    <Route path="/business"></Route>
                    <Route path="/howsearchworks"></Route>
                    <Route path="/privacy"></Route>
                    <Route path="/terms"></Route>
                    <Route path="/settings"></Route>
                    </Switch>
                
                    <div className='footer-left'>
                        <Link to="/advertising">Advertising</Link>
                        <Link to="/business">Business</Link>
                        <Link to="/howsearchworks">How Search Works</Link>
                    </div>
                    <div className="text">Carbon neutral since 2007</div>

                    <div className='footer-right'>
                        <Link to="/privacy">Privacy</Link>
                        <Link to="/terms">Terms</Link>
                        <Link to="/settings">Settings</Link>
                    </div>
                </Router>
            </div>
        </div>
    )
}

export default Footer
