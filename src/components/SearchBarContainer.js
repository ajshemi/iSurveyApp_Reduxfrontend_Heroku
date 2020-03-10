import React, { Component } from 'react'
import Filter from './Filter'
import Sort from './Sort'
import Search from './Search'

// import {Container} from 'semantic-ui-react'



const SearchBarContainer = (props) => {
  return (
    
    <div className="allsearch">
      <div className="filtersearch">
        <Filter currentUser={props.currentUser} handleFilter={props.handleFilter}/>
      </div>
      <div className="sortsearch">
        <Sort handleSort={props.handleSort}/>
      </div>
      <div className="searchsearch">
        <Search searchTerm={props.searchTerm} handleInput={props.handleInput}/*handleSearch={props.handleSearch}*//>
      </div>
    </div>
  );
}
export default SearchBarContainer;