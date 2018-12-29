import React from 'react';

const Gauge = props => {

    let divStyle = {
        height: '100%',
        width: props.totalAmount+ '%',
        background: '#f0f',
    }

    return (
        <div className={"card-body"} style={divStyle}></div>
    )
}

export default Gauge;