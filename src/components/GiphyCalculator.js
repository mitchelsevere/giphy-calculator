import { Component } from 'react';
import GiphyKey from './GiphyKey';
import GiphyDisplay from './GiphyDisplay';

class GiphyCalculator extends Component {
    render() {
        return (
            <div>
                <GiphyDisplay />
                <div className="calculator">
                    <GiphyKey className="" />
                    <GiphyKey className="" />
                    <GiphyKey className="" />
                    <GiphyKey className="" />
                    <GiphyKey className="" />
                    <GiphyKey className="" />
                    <GiphyKey className="" />
                    <GiphyKey className="" />
                    <GiphyKey className="" />
                    <GiphyKey className="" />
                    <GiphyKey className="" />
                    <GiphyKey className="" />
                    <GiphyKey className="" />
                    <GiphyKey className="" />
                    <GiphyKey className="" />
                    <GiphyKey className="" />
                    <GiphyKey className="" />
                </div>
            </div>
        );
    }
}

export default GiphyCalculator;