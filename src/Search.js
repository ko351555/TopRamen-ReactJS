import React, { Component } from 'react';

function SearchBox(props) {
    return (
        <div>
            <div class="ui icon input">
                <p><b style={{
                    marginTop: '10px',
                    fontSize: ' 20px', color: ' brown'
                }}>Filter Search through Year </b></p> :
            
                <input placeholder="Search..." onChange={props.handleInput} type="number" />
                <i aria-hidden="true" class="search icon"></i>
            </div>
        </div>
    )
}
export default SearchBox