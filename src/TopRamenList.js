import React, { Component } from 'react'
import TopRamen from './TopRamen'

function TopramenList(props) {
    let topramen = props.filteredtopramen.map((contacts, i) => {
        return <TopRamen key={i} contact={contacts} />
    })
    return (
        <div>

            {topramen}
        </div>
    )
}

export default TopramenList;