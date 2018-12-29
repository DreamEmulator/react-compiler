import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from "./component/Counter";
import Adder from "./component/Adder";
import Gauge from "./component/Gauge";

// document.olabWallet.add(7)

class App extends Component {

    constructor(){
        super();
        this.state = {
            totalAmount: 5
        }
        document.olabWallet = this;
    }

    add = (amount) => {
        this.setState((state) => ({
            totalAmount: state.totalAmount + amount
        }));
    }

    render() {
        return (
            <div className={"container"}>
                <div className="card-deck mb-3 text-center">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-header">
                            <Counter amount={this.state.totalAmount}/>
                        </div>
                        <Gauge totalAmount={this.state.totalAmount}/>
                        <div className="card-footer">
                            <Adder addAmount={this.add} amount={1}/>
                            <Adder addAmount={this.add} amount={2}/>
                            <Adder addAmount={this.add} amount={5}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
