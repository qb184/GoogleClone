import Search from './components/Search/Search'
import React from 'react'
import logo from './images/Google.png';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import news from './images/news.png';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
import './SearchPage.css';
import { useStateValue } from './DataLayer';
import useGoogleSearch from './googleSearch';
import Response from './response';
import badInput from './badInputResponse';
import Footer from './components/Footer/Footer';
// import { data } from 'jquery';

function SearchPage() {
    const [{term}, dispatch] = useStateValue();
    let start = 1;
    const {data} = useGoogleSearch(term);
    // const data = badInput;
    // const data = Response;

    let listItems;
    let info;
    let item;
    console.log ("data: " +data)

    // when data is not null
    if (data) {
        if (data.searchInformation.totalResults != 0) {
            listItems = data.items;
            let i=0;
            info = <p className="info">About {data.searchInformation.formattedTotalResults} results ({data.searchInformation.formattedSearchTime} seconds)</p>
            item = listItems.map((item) => 
                    <div key = {i++} className="itemblock">
                        <a href ={item.formattedUrl}>{item.formattedUrl}</a>
                        <h3><a className = "links" href = {item.formattedUrl}>{item.title}</a></h3>
                        <p className="snippet">{item.snippet}</p>
                    </div>)
        } else { // when search shows 0 results, print a message
            item =<div className="undefined">
                     <p>Your search - <strong>{term}</strong> - did not match any documents.</p>
                     <p>Suggestions:</p>
                     <p>Make sure all words are spelled correctly.<br/>Try different keywords.<br/>Try more general keywords.</p>
                 </div>
            }
        }

    return (
        <div className="container">
            <div className = "header">
                <div className="header-left">
                    <a href = "/" >
                        <img style ={{width:"100px",margin:"15px 30px 5px 10px"}}src = {logo} alt ="google logo"></img>
                    </a>
                    <Search className="search-bar" btnHidden value={term} placeholder={term}/>
                </div>
                
                <div className="header-right">
                    <SettingsIcon/>
                    <AppsIcon/>
                    <AccountCircleIcon/>
                </div>                
            </div>
            <div className="display-options">
                <Link to='/all' className="link-option"><SearchIcon/>All</Link>
                <Link to='/shopping' className="link-option"><LocalOfferIcon/>Shopping</Link>
                <Link to='/image' className="link-option"><CropOriginalIcon/>Image</Link>
                <Link to='/news' className="link-option"><img src={news} style={{width:'20px'}} alt=""></img>News</Link>
                <Link to='/video' className="link-option"><PlayCircleOutlineIcon/>Video</Link>
                <Link to='/more' className="link-option"><MoreVertIcon/>More</Link>
            </div>
            <br/>
            <br/>
            <hr/>

            <div className="body">
                {info}
                {item}
            </div>
            <Footer/>
        </div>
    )
}

export default SearchPage
