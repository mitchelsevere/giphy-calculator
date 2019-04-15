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
                        <GiphyKey className="calculator__key--small" text="clear"/>
                        <GiphyKey className="calculator__key--med" text="seven"/>
                        <GiphyKey className="calculator__key--small" text="four"/>
                        <GiphyKey className="calculator__key--small" text="one"/>
                        <GiphyKey className="calculator__key--small" text="zero"/>
                    </div>
                    <div className="calculator__key">
                        <GiphyKey className="calculator__key--small" text="percent"/>
                        <GiphyKey className="calculator__key--small" text="eight"/>
                        <GiphyKey className="calculator__key--med" text="five"/>
                        <GiphyKey className="calculator__key--small" text="two"/>
                    </div>
                    <div className="calculator_key">
                        <GiphyKey className="calculator__key--med" text="nine"/>
                        <GiphyKey className="calculator__key--big" text="six"/>
                        <GiphyKey className="calculator__key--small" text="three"/>
                        <GiphyKey className="calculator__key--small" text="decimal"/>
                    </div>
                    <div className="calculator__key">
                        <GiphyKey className="calculator__key--small" text="divide"/>
                        <GiphyKey className="calculator__key--small" text="multiply"/>
                        <GiphyKey className="calculator__key--small" text="minus"/>
                        <GiphyKey className="calculator__key--small" text="plus"/>
                        <GiphyKey className="calculator__key--med" text="equal"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default GiphyCalculator;