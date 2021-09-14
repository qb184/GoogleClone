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
// import { data } from 'jquery';

function SearchPage() {
    const [{term}, dispatch] = useStateValue();
    const {data} = useGoogleSearch(term);
    // const data = Response;
    let listItems;
    let info;
    let item;
    console.log ("data: " +data)
    if (data) {
        info = <p className="info">About {data.searchInformation.formattedTotalResults} results ({data.searchInformation.formattedSearchTime} seconds)</p>
        listItems = data.items;
        let i=0;
        item = listItems.map((item) => 
                    <div key = {i++} className="itemblock">
                        <a href ={item.formattedUrl}>{item.formattedUrl}</a>
                        <h3><a className = "links" href = {item.formattedUrl}>{item.title}</a></h3>
                        <p className="snippet">{item.snippet}</p>
                    </div>)}
    
    console.log(data);
    console.log(listItems);
    return (
        <div >
            <div className = "header">
                <div className="header-left">
                    <a href = "/" >
                        <img style ={{width:"100px",margin:"15px 30px 5px 10px"}}src = {logo} alt ="google logo"></img>
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
                <div>
                    <SearchIcon/>
                    <Link to='/all' className="link-option">All</Link>
                </div>
                <div>
                    <LocalOfferIcon/>
                    <Link to='/shopping' className="link-option">Shopping</Link>
                </div>
                <div>
                    <CropOriginalIcon/>
                    <Link to='/image' className="link-option">Image</Link>
                </div>
                <div>
                    <img src={news} style={{width:'20px'}} alt=""></img>
                    <Link to='/news' className="link-option">News</Link>
                </div>
                <div>
                    <PlayCircleOutlineIcon/>
                    <Link to='/video' className="link-option">Video</Link>
                </div>
                <div>
                    <MoreVertIcon/>
                    <Link to='/more' className="link-option">More</Link>
                </div>
            </div>
            <br/>
            <br/>
            <hr/>

            <div className="body">
                {info}
                {item}
            </div>
            
        </div>
    )
}

export default SearchPage
