import React from 'react';

function SearchBar(props) {
    return (
        <div>
            <form className="form">
                <input type="text" placeholder="What You want?" className="bar"   />
                <button type="submit" className="button" >Search</button>
            </form>
        </div>
    );
}

export default SearchBar;



// onSubmit={getSubmit}
// onChange={getSearch} value={search}