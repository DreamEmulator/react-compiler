import React from 'react';

const Adder = (props) => {
    return (
        <button className={"btn"} onClick={()=>{props.addAmount(props.amount)}}>+{props.amount}</button>
    )
}

export default Adder;