import React from 'react';

const searchBar = prop => {
    return (
        <form>
            <input type="text" placeholder="Search..."/>
            <br />
            <input type="checkbox" placeholder="Search..."/> <label> Only in stock ...</label>
        </form>
    )
}

export default searchBar;