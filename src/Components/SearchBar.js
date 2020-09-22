import React, {useState} from 'react';
import FetchingData from './FetchingData';

function SearchBar(props) {

    const [ search, setSearch ] = useState('');
    const [ submit, setSubmit ] = useState('');

    const getSearch = e => {
        setSearch(e.target.value)
    }
  
    const getSubmit = e => {
        e.preventDefault()
        setSubmit(search)
        setSearch('')
      }
    

    return (
        <div>
            <form className="form"  onSubmit={getSubmit}>
                <input type="text" placeholder="What You want?" className="bar" value={search} onChange={getSearch}  />
                <button type="submit" className="button" >Search</button>
            </form>
            <FetchingData searchData={submit} />
        </div>
    );
}

export default SearchBar;



