import React, { Component } from 'react'

function Topramen(props) {
    return (
        <div >
            <p><div class="card-group">
                <div class="card">
                    <div class="card-body " >
                        <h5 class="card-title center">{props.contact.Brand}</h5>
                        <b>Variety:</b> <p class="card-text">{props.contact.Variety}</p>
                        <b>Style:</b> <p class="card-text">{props.contact.Style}</p>

                        <b>Stars:</b><p class="card-text">{props.contact.Stars}</p>

                        <b>Top Ten:</b><p class="card-text">{props.contact["Top Ten"]}</p>

                    </div>
                </div>


            </div>
            </p>
        </div>
    )
}

export default Topramen;