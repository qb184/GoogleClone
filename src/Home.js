import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {ReactComponent as Logo} from './Google_logo.svg';
import Search from './components/Search/Search';
import { findByLabelText } from '@testing-library/react';

function Home() {
  return (
    <div className="home">
      <Header></Header>
      <div style={{display:'flex', justifyContent:"center", marginTop:'80px'}}><Logo/></div>
      <Search/>
      <div></div>
      <Footer/>
    </div>
  );
}

export default Home;