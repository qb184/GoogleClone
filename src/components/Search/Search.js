import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import './Search.css';
import Button from 'react-bootstrap/Button';

const Search = () => {
    return (
        <div>
            <label>
              <InputGroup hasValidation className = "search-bar" size="lg" >
                    <SearchIcon className="search-icon"></SearchIcon>
                    <FormControl className="input">

                    </FormControl>
                    <MicIcon className="mic"></MicIcon>
                </InputGroup>
           </label>
           <div className="search-buttons">
                <Button size="lg" className = "btn">Google Search</Button>
                <Button size="lg" className = "btn">I'm Feeling Lucky</Button>
           </div>
           
            
        </div>
    )
}

export default Search
