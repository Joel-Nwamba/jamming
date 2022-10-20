import React from "react";




class SearchBar extends React.Component {
    render() {
        return(
            <div className="SearchBar">
                <input placeholder = "Enter a Song, Album, or Artist"/>
                <button className="SearchButton">SEARCH</button>
            </div>
        )
    }
}

export default SearchBar