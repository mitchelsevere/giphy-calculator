import React, { Component } from 'react';
import GiphyKey from './GiphyKey';
import GiphyDisplay from './GiphyDisplay';

class GiphyCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = { display: 0 }
    }

    updateDisplay = () => {
        this.setState((prevState) => {
            // display: prevState.display
        })
    }
    render() {
        return (
            <div className="calculator">
                <GiphyDisplay display={this.updateDisplay}/>
                <div className="calculator__keys">
                    <div className="calculator__key">
                        <GiphyKey className="calculator__key--small" text="clear" value=""/>
                        <GiphyKey className="calculator__key--med" text="seven" value="7"/>
                        <GiphyKey className="calculator__key--small" text="four" value="4"/>
                        <GiphyKey className="calculator__key--small" text="one" value="1"/>
                        <GiphyKey className="calculator__key--small" text="zero" value="0"/>
                    </div>
                    <div className="calculator__key">
                        <GiphyKey className="calculator__key--small" text="percent" value="%"/>
                        <GiphyKey className="calculator__key--small" text="eight" value="8"/>
                        <GiphyKey className="calculator__key--med" text="five" value="5"/>
                        <GiphyKey className="calculator__key--small" text="two" value="2"/>
                    </div>
                    <div className="calculator_key">
                        <GiphyKey className="calculator__key--med" text="nine" value="9"/>
                        <GiphyKey className="calculator__key--big" text="six" value="6"/>
                        <GiphyKey className="calculator__key--small" text="three" value="3"/>
                        <GiphyKey className="calculator__key--small" text="decimal" value="."/>
                    </div>
                    <div className="calculator__key">
                        <GiphyKey className="calculator__key--small" text="divide" value="/"/>
                        <GiphyKey className="calculator__key--small" text="multiply" value="*"/>
                        <GiphyKey className="calculator__key--small" text="minus" value="-"/>
                        <GiphyKey className="calculator__key--small" text="plus" value="+"/>
                        <GiphyKey className="calculator__key--med" text="equal" value="="/>
                    </div>
                </div>
            </div>
        );
    }
}

export default GiphyCalculator;