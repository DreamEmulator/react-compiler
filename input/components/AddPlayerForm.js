import React, {Component} from 'react';

class AddPlayerForm extends Component {

    state = {
        input: "",
    }


    handleAddPlayer = (e) => {
    e.preventDefault();
        this.props.addPlayer(this.state.input);
        this.setState({input:""});
    }

    handleValueChange = (e)=> {
        this.setState({input: e.target.value})
    }

    render(){
         return (
             <form onSubmit={this.handleAddPlayer}>
                 <input type={"text"} onChange={this.handleValueChange} placeholder={"Add player name"} value={this.input}/>
                 <input type={"submit"} value={" player"}/>
             </form>
         )
    }
}

export default AddPlayerForm;