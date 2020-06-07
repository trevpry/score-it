import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

class ScoreDivide extends Component {
    constructor(props) {
        super(props);

        const value1 = this.props.componentParams.value1;
        const value2 = this.props.componentParams.value2;
        let value1Value = value1.value === 'previousScore' ? this.props.lastResponse : this.props.componentParams.value;
        let value2Value = value2.value === 'previousScore' ? this.props.lastResponse : this.props.componentParams.value;
        let value1Disabled = value1.value === 'previousScore' ? true : false;
        let value2Disabled = value2.value === 'previousScore' ? true : false;

        if( value1.type === 'fixed' ) {
            value1Value = value1.value
            value1Disabled = true;
        } else if (value1.value === 'previousScore') {
            value1Value = this.props.lastResponse
            value1Disabled = true;
        } else {
            value1Value = this.props.componentParams.value
        }

        if( value2.type === 'fixed' ) {
            value2Value = value2.value
            value2Disabled = true;
        } else if (value2.value === 'previousScore') {
            value2Value = this.props.lastResponse
            value2Disabled = true;
        } else {
            value2Value = this.props.componentParams.value
        }
        
        this.state = {
            value1Value,
            value2Value,
            value1Disabled,
            value2Disabled
        }
            
    }

    componentDidMount() {
        // this.setState ({
        //     value1: this.props.componentParams.value1.value === 'previousScore' ? this.props.lastResponse : 0,
        //     value2: this.props.componentParams.value2.value === 'previousScore' ? this.props.lastResponse : 0
        // })
    }

    handleChange = e => {
        const newState = this.state;
        const value = Number(e.target.value);
        
        if(e.target.id === 'value1') {
            newState.value1Value = value;
        }
        if(e.target.id === 'value2') {
            newState.value2Value = value;
        }

        this.setState(newState, () => {
            console.log(this.state)
        })
    }

    handleClick = (number) => {
        const value = this.props.componentParams.positive ? number : number * -1
        this.setState({sum: this.state.sum + value});
    }

    handleSubmit = e => {
        const place = this.props.componentParams.round.place;
        const divide = this.state.value1Value / this.state.value2Value
        const newValue = this.props.componentParams.round.direction === 'down' ? Math.floor(divide) : divide;
        
        
        this.props.handleClick({score: newValue})
        // this.setState({
        //     value1: 0,
        //     value2: 0,
        //     product: 1
        // })
    }

    render() {
        const value1 = this.props.componentParams.value1;
        const value2 = this.props.componentParams.value2;
        // let value1Value = value1.value === 'previousScore' ? this.props.lastResponse : this.props.componentParams.value;
        // let value2Value = value2.value === 'previousScore' ? this.props.lastResponse : this.props.componentParams.value;
        // let value1Disabled = value1.value === 'previousScore' ? true : false;
        // let value2Disabled = value2.value === 'previousScore' ? true : false;

        // if( value1.type === 'fixed' ) {
        //     value1Value = value1.value
        //     value1Disabled = true;
        // } else if (value1.value === 'previousScore') {
        //     value1Value = this.props.lastResponse
        //     value1Disabled = true;
        // } else {
        //     value1Value = this.props.componentParams.value
        // }

        // if( value2.type === 'fixed' ) {
        //     value2Value = value2.value
        //     value2Disabled = true;
        // } else if (value2.value === 'previousScore') {
        //     value2Value = this.props.lastResponse
        //     value2Disabled = true;
        // } else {
        //     value2Value = this.props.componentParams.value
        // }

        return (
            <div className='center'>
                <form>
                    <div className='center'>
                    <label htmlFor='value1'>{value1.label}</label><br></br>
                    <input type='text' id='value1' value={this.state.value1Value} disabled={this.state.value1Disabled} onChange={this.handleChange}/><br></br>
                    <label htmlFor='value2'>{value2.label}</label><br></br>
                    <input type='text' id='value2' value={this.state.value2Value} disabled={this.state.value2Disabled} onChange={this.handleChange}/>
                    </div>
                </form>

                <Button variant="contained" color="primary" onClick={this.handleSubmit}>NEXT</Button>
            </div>
        )
    }

}

export default ScoreDivide;