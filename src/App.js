import './App.css';
import Header from './components/Header/Header';
import { Link } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import {ReactComponent as Logo} from './Google_logo.svg';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Logo/>
      
    </div>
  );
}

export default App;
