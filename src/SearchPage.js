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
import useGoogleSearch from './useGoogleSearch';
import Response from './response';
import { data } from 'jquery';

function SearchPage() {
    const [{term}, dispatch] = useStateValue();
    // const {data} = useGoogleSearch(term);
    const data = Response;
    console.log(data);

    return (
        <div >
            <div className = "header">
                <div className="header-left">
                    <a href = "/" >
                        <img style ={{width:"70px"}}src = {logo} alt ="google logo"></img>
                    </a>
                    <Search className="search-bar" btnHidden/>
                </div>
                
                <div className="header-right">
                    <SettingsIcon/>
                    <AppsIcon/>
                    <AccountCircleIcon/>
                </div>                
            </div>
            <div className="display-options">
                <SearchIcon/>
                <Link to='/all'>All</Link>
                <LocalOfferIcon/>
                <Link to='/shopping'>Shopping</Link>
                <CropOriginalIcon/>
                <Link to='/image'>Image</Link>
                <img src={news} style={{width:'20px'}} alt=""></img>
                <Link to='/news'>News</Link>
                <PlayCircleOutlineIcon/>
                <Link to='/video'>Video</Link>
                <MoreVertIcon/>
                <Link to='/more'>More</Link>
            </div>
            <hr/>
            <h1>{term}</h1>
            <p>About {data.searchInformation.formattedTotalResults} results ({data.searchInformation.formattedSearchTime} seconds)</p>
        </div>
    )
}

export default SearchPage
