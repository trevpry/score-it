import React from 'react';

const FinalScore = (props) => {
    // const performOn = props.componentParams.performOn === 'lastResponse' ? props.lastResponse : props.score;
    // console.log(performOn)
    let finalScore = props.score;
    
    if (props.componentParams.operation === 'divide') {
        finalScore = props.score / props.componentParams.operationValue;
    }

    return <div>Final Score: {finalScore}</div>
}

export default FinalScore;