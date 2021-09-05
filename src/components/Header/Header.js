import './Header.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

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
                    <Link to="/apps"><AppsIcon/></Link>
                    <Link to="/account"><AccountCircleIcon/></Link>
                </div>
            </Router>
        </div>
    )
}

export default Header
