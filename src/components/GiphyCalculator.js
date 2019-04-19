import React, { Component } from 'react';
import GiphyKey from './GiphyKey';
import GiphyDisplay from './GiphyDisplay';

class GiphyCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = { display: 0 }
    }

    handleInputDigits = (e) => {
        const input = parseInt(e.target.getAttribute('value')) || e.target.getAttribute('value');
        if (this.state.display === 0) {
            this.setState(() => ({ display: input}));
        } else if (input !== 'number'){
            console.log(typeof input);
            this.setState((prevState) => ({ display: prevState.display += input }));
        } else {
            return;
        }
    }
    render() {
        return (
            <div className="calc">
                <GiphyDisplay display={this.state.display}/>
                <div className="container">
                    <div className="calc__keys" onClick={this.handleInputDigits}>
                        <GiphyKey className="calc__key--small" text="clear" value=""/>
                        <GiphyKey className="calc__key--med" text="seven" value="7"/>
                        <GiphyKey className="calc__key--small" text="four" value="4"/>
                        <GiphyKey className="calc__key--small" text="one" value="1"/>
                        <GiphyKey className="calc__key--small" text="zero" value="0"/>
                    </div>
                    <div className="calc__keys" onClick={this.handleInputDigits}>
                        <GiphyKey className="calc__key--small" text="percent" value="%"/>
                        <GiphyKey className="calc__key--small" text="eight" value="8"/>
                        <GiphyKey className="calc__key--med" text="five" value="5"/>
                        <GiphyKey className="calc__key--small" text="two" value="2"/>
                    </div>
                    <div className="calc__keys" onClick={this.handleInputDigits}>
                        <GiphyKey className="calc__key--med" text="nine" value="9"/>
                        <GiphyKey className="calc__key--big" text="six" value="6"/>
                        <GiphyKey className="calc__key--small" text="three" value="3"/>
                        <GiphyKey className="calc__key--small" text="decimal" value="."/>
                    </div>
                    <div className="calc__keys" onClick={this.handleInputDigits}>
                        <GiphyKey className="calc__key--small" text="divide" value="/"/>
                        <GiphyKey className="calc__key--small" text="multiply" value="*"/>
                        <GiphyKey className="calc__key--small" text="minus" value="-"/>
                        <GiphyKey className="calc__key--small" text="plus" value="+"/>
                        <GiphyKey className="calc__key--med" text="equal" value="="/>
                    </div>
                </div>
            </div>
        );
    }
}

export default GiphyCalculator;