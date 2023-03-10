import React from 'react';
import "./search.scss"

const Search = () => {
    return (
        <div className="Search-Container">
          <input type="text" className="form-control" placeholder="რას ვეძებთ?"/>
          <button className="btn btn-outline-primary">ძებნა</button>
        </div>
    );
};

export default Search;