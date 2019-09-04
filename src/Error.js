import React from 'react';

import './Error.css'


function Error(props){
    let content = undefined
    if (props.error) {
            content = (
                <div className="Error">
                    <h1>{props.error.message}</h1>
                </div>
            )
        } else {
            content = (
                <div className="Error">
                    {(props.isLoading) ? <img className="Loading" src="https://media.giphy.com/media/N256GFy1u6M6Y/giphy.gif" alt="" />:""}
                </div>
            )
        }
    return content
}

export default Error
