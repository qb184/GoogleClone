import './App.css';
import Header from './components/Header/Header';

import {ReactComponent as Logo} from './Google_logo.svg';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Logo/>
      <Search/>
    </div>
  );
}

export default App;
