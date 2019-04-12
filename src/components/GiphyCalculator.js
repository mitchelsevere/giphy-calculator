import { Component } from 'react';
import GiphyKey from './GiphyKey';
import GiphyDisplay from './GiphyDisplay';

class GiphyCalculator extends Component {
    render() {
        return (
            <div>
                <GiphyDisplay />
                <div className="calculator">
                    <GiphyKey />
                    <GiphyKey />
                    <GiphyKey />
                    <GiphyKey />
                    <GiphyKey />
                    <GiphyKey />
                    <GiphyKey />
                    <GiphyKey />
                    <GiphyKey />
                    <GiphyKey />
                    <GiphyKey />
                    <GiphyKey />
                    <GiphyKey />
                    <GiphyKey />
                    <GiphyKey />
                    <GiphyKey />
                    <GiphyKey />
                </div>
            </div>
        );
    }
}

export default GiphyCalculator;