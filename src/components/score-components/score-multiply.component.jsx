import React, { Component } from 'react';

class ScoreMultiply extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            value1: 0,
            value2: 0,
            product: 1
        }
            
    }

    componentDidMount() {
        this.setState ({
            value1: this.props.componentParams.value1.value === 'previousScore' ? this.props.lastResponse : 0,
            value2: this.props.componentParams.value2.value === 'previousScore' ? this.props.lastResponse : 0,
            product: 1
        })
    }

    handleChange = e => {
        const newState = this.state;
        const value = Number(e.target.value);
        
        if(e.target.id === 'value1') {
            newState.value1 = value;
        }
        if(e.target.id === 'value2') {
            newState.value2 = value;
        }

        this.setState(newState, () => {
            console.log(this.state)
        })
    }

    handleClick = (e) => {
        const value = this.props.componentParams.positive ? Number(e.target.value) : Number(e.target.value) * -1
        this.setState({sum: this.state.sum + value});
    }

    handleSubmit = e => {
        const place = this.props.componentParams.round.place;
        const mult = this.state.value1 * this.state.value2
        const roundUp = mult % place > 0 ? place - (mult % place) : 0;
        const newValue = mult + roundUp;
        
        this.props.handleClick({score: newValue})
        this.setState({
            value1: 0,
            value2: 0,
            product: 1
        })
    }

    render() {
        const value1 = this.props.componentParams.value1;
        const value2 = this.props.componentParams.value2;
        const value1Value = value1.value === 'previousScore' ? this.props.lastResponse : this.state.value1;
        const value2Value = value2.value === 'previousScore' ? this.props.lastResponse : this.state.value2;
        const value1Disabled = value1.value === 'previousScore' ? true : false;
        const value2Disabled = value2.value === 'previousScore' ? true : false;

        return (
            <div className='center'>
                <form>
                    <div className='center'>
                    <label htmlFor='value1'>{value1.label}</label><br></br>
                    <input type='text' id='value1' value={value1Value} disabled={value1Disabled} onChange={this.handleChange}/><br></br>
                    <label htmlFor='value2'>{value2.label}</label><br></br>
                    <input type='text' id='value2' value={value2Value} disabled={value2Disabled} onChange={this.handleChange}/>
                    </div>
                </form>

                <button onClick={this.handleSubmit}>NEXT</button>
            </div>
        )
    }

}

export default ScoreMultiply;