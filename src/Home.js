import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {ReactComponent as Logo} from './images/Google_logo.svg';
import Search from './components/Search/Search';

function Home() {
  return (
    <div className="home" id="root">
      <Header></Header>
      <div style={{display:'flex', justifyContent:"center", marginTop:'80px'}}><Logo/></div>
      <Search/>
      <div></div>
      <Footer/>
    </div>
  );
}

export default Home;