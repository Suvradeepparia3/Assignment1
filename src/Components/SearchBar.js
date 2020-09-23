import React, {useState} from 'react';
import FetchingData from './FetchingData';

function SearchBar(props) {

    const [ search, setSearch ] = useState('');
    // const [ submit, setSubmit ] = useState('');

    const getSearch = e => {
        setSearch(e.target.value)
    }
  
    // const getSubmit = e => {
    //     e.preventDefault()
    //     setSubmit(search)
    //     // setSearch('')
    //   }
    

    return (
        <div>
            <form className="form"  >
                <input type="text" placeholder="Search name as 'modi'" className="bar" value={search} onChange={getSearch}  />
                <button type="button" className="button">Search</button>
            </form>
            <FetchingData searchData={search} />
        </div>
    );
}

export default SearchBar;



