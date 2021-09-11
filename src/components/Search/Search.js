import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import './Search.css';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { useStateValue } from '../../DataLayer';
import { actionType } from '../../reducer';


function Search(props) {
    const [searchInput, setSearchInput] = useState("");
    const [{}, dispatch] = useStateValue();
    const history = useHistory();
    const handleSearch = (e)=> {
        e.preventDefault();
        console.log('you hit button')

        dispatch({
            type: actionType.SET_SEARCH_INPUT,
            term: searchInput
        })
        history.push("/search");
    }

    return (
        <div className="search">
            <form >
                <label className = "search-bar">
                    <SearchIcon className="search-icon"></SearchIcon>
                    <input className="input" value={searchInput} onChange={e=>setSearchInput(e.target.value)}></input>
                    <MicIcon className="mic"></MicIcon>
                </label>

            {!props.btnHidden ? (
                <div className="search-buttons">
                    <Button size="lg" className = "btn" type='submit' onClick={handleSearch}>Google Search</Button>
                    <Button size="lg" className = "btn">I'm Feeling Lucky</Button>
                </div>
            ) : (
                <div className="search-buttons">
                        <Button size="lg" className = "btn hidden-btns" type='submit' onClick={handleSearch}>Google Search</Button>
                        <Button size="lg" className = "btn hidden-btns">I'm Feeling Lucky</Button>

                </div>
            )}
                
           </form>
           
            
        </div>
    );
}



export default Search
