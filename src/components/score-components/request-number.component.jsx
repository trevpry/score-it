import React, { Component } from 'react';

class RequestNumber extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            response: ''
        }
            
    }

    handleChange = e => {
        this.setState({response: e.target.value})
    }

    handleSubmit = e => {
        this.props.handleClick({response: this.state.response})
        this.setState({sum: 0})
    }

    render() {
        return (
            <div className='center'>
                <div>{this.props.componentParams.request}</div>
                <div>                    
                    <form>
                        <input type='text' onChange={this.handleChange}></input>
                    </form>
                </div>
                <button onClick={this.handleSubmit}>NEXT</button>
            </div>
        )
    }

}

export default RequestNumber;