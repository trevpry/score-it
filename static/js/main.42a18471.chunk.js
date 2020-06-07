(this["webpackJsonpscore-it"]=this["webpackJsonpscore-it"]||[]).push([[0],{49:function(e,a,t){e.exports=t(64)},54:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(7),s=t.n(r),l=(t(54),t(10)),c=(t(55),t(56),t(24)),i=function(){return o.a.createElement("div",{className:"header"},o.a.createElement(c.b,{to:"/",className:"logo"},"Score It!"))},u=t(15),m=t(16),p=t(17),d=t(18),v=(t(62),function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).state={games:[{name:"Blokus",id:1},{name:"Traders of Osaka",id:2},{name:"Brass: Lancashire",id:3}]},n}return Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"games-list-container"},o.a.createElement("div",null,o.a.createElement("h1",null,"Games List")),o.a.createElement("div",{className:"games-list"},this.state.games.map((function(e){return o.a.createElement("div",{className:"games-list-item",key:e.id},o.a.createElement(c.b,{className:"games-list-link",to:"games/".concat(e.id)},e.name))}))))}}]),t}(n.Component)),h=t(65),b=(t(63),t(96)),f=t(97),E=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).handleChange=function(e){var a=Number(e.target.value);n.setState({sum:a})},n.handleClick=function(e){n.setState({sum:n.state.sum+e})},n.handleSubmit=function(e){var a=n.props.componentParams.positive?Number(n.state.sum):-1*Number(n.state.sum),t=!1===n.props.componentParams.addScore?null:a,o=a;n.props.handleClick({score:t,response:o}),n.setState({sum:0})},n.state={sum:0},n}return Object(m.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"center"},o.a.createElement("div",{className:"score-component-text"},this.props.componentParams.label),o.a.createElement("form",null,o.a.createElement(f.a,{id:"standard-basic",className:"numberInput",value:this.state.sum,onChange:this.handleChange})),o.a.createElement("div",{className:"calculator"},o.a.createElement(b.a,{variant:"contained",color:"default","aria-label":"outlined primary button group"},o.a.createElement(h.a,{value:"1",onClick:function(){e.handleClick(1)}},"+1"),o.a.createElement(h.a,{value:"5",onClick:function(){e.handleClick(5)}},"+5"))),o.a.createElement("div",{className:"buttonNext"},o.a.createElement(h.a,{size:"large",variant:"contained",color:"primary",onClick:this.handleSubmit},"NEXT")))}}]),t}(n.Component),C=function(e){var a=e.score;return"divide"===e.componentParams.operation&&(a=e.score/e.componentParams.operationValue),o.a.createElement("div",null,"Final Score: ",a)},S=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).handleSubmit=function(e){console.log(e),n.props.handleClick({score:e}),n.setState({sum:0})},n.state={sum:0},n}return Object(m.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"center"},o.a.createElement("div",null,this.props.componentParams.question),o.a.createElement(b.a,{variant:"contained",color:"primary","aria-label":"outlined primary button group"},o.a.createElement(h.a,{value:this.props.componentParams.onTrue,onClick:function(){e.handleSubmit(e.props.componentParams.onTrue)}},"Yes"),o.a.createElement(h.a,{value:this.props.componentParams.onFalse,onClick:function(){e.handleSubmit(e.props.componentParams.onFalse)}},"No")))}}]),t}(n.Component),g=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(e){var n;Object(u.a)(this,t),(n=a.call(this,e)).handleChange=function(e){var a=n.state,t=Number(e.target.value);"value1"===e.target.id&&(a.value1=t),"value2"===e.target.id&&(a.value2=t),n.setState(a,(function(){console.log(n.state)}))},n.handleClick=function(e){var a=n.props.componentParams.positive?e:-1*e;n.setState({sum:n.state.sum+a})},n.handleSubmit=function(e){var a=n.props.componentParams.round.place,t=n.state.value1*n.state.value2,o=t+(t%a>0?a-t%a:0);n.props.handleClick({score:o}),n.setState({value1:0,value2:0,product:1})};var o=n.props.componentParams.value1,r=n.props.componentParams.value2,s="previousScore"===o.value?n.props.lastResponse:0,l="previousScore"===r.value?n.props.lastResponse:0;return n.state={value1:s,value2:l,product:1},n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){this.setState({value1:"previousScore"===this.props.componentParams.value1.value?this.props.lastResponse:0,value2:"previousScore"===this.props.componentParams.value2.value?this.props.lastResponse:0,product:1})}},{key:"render",value:function(){var e=this.props.componentParams.value1,a=this.props.componentParams.value2,t="previousScore"===e.value,n="previousScore"===a.value;return o.a.createElement("div",{className:"center"},o.a.createElement("form",null,o.a.createElement("div",{className:"center"},o.a.createElement("label",{htmlFor:"value1"},e.label),o.a.createElement("br",null),o.a.createElement("input",{type:"text",id:"value1",value:this.state.value1,disabled:t,onChange:this.handleChange}),o.a.createElement("br",null),o.a.createElement("label",{htmlFor:"value2"},a.label),o.a.createElement("br",null),o.a.createElement("input",{type:"text",id:"value2",value:this.state.value2,disabled:n,onChange:this.handleChange}))),o.a.createElement(h.a,{variant:"contained",color:"primary",onClick:this.handleSubmit},"NEXT"))}}]),t}(n.Component),P=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(e){var n;Object(u.a)(this,t),(n=a.call(this,e)).handleChange=function(e){var a=n.state,t=Number(e.target.value);"value1"===e.target.id&&(a.value1Value=t),"value2"===e.target.id&&(a.value2Value=t),n.setState(a,(function(){console.log(n.state)}))},n.handleClick=function(e){var a=n.props.componentParams.positive?e:-1*e;n.setState({sum:n.state.sum+a})},n.handleSubmit=function(e){n.props.componentParams.round.place;var a=n.state.value1Value/n.state.value2Value,t="down"===n.props.componentParams.round.direction?Math.floor(a):a;n.props.handleClick({score:t})};var o=n.props.componentParams.value1,r=n.props.componentParams.value2,s="previousScore"===o.value?n.props.lastResponse:n.props.componentParams.value,l="previousScore"===r.value?n.props.lastResponse:n.props.componentParams.value,c="previousScore"===o.value,i="previousScore"===r.value;return"fixed"===o.type?(s=o.value,c=!0):"previousScore"===o.value?(s=n.props.lastResponse,c=!0):s=n.props.componentParams.value,"fixed"===r.type?(l=r.value,i=!0):"previousScore"===r.value?(l=n.props.lastResponse,i=!0):l=n.props.componentParams.value,n.state={value1Value:s,value2Value:l,value1Disabled:c,value2Disabled:i},n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.componentParams.value1,a=this.props.componentParams.value2;return o.a.createElement("div",{className:"center"},o.a.createElement("form",null,o.a.createElement("div",{className:"center"},o.a.createElement("label",{htmlFor:"value1"},e.label),o.a.createElement("br",null),o.a.createElement("input",{type:"text",id:"value1",value:this.state.value1Value,disabled:this.state.value1Disabled,onChange:this.handleChange}),o.a.createElement("br",null),o.a.createElement("label",{htmlFor:"value2"},a.label),o.a.createElement("br",null),o.a.createElement("input",{type:"text",id:"value2",value:this.state.value2Value,disabled:this.state.value2Disabled,onChange:this.handleChange}))),o.a.createElement(h.a,{variant:"contained",color:"primary",onClick:this.handleSubmit},"NEXT"))}}]),t}(n.Component),k=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(e){var n;Object(u.a)(this,t),(n=a.call(this,e)).componentDidMount=function(){var e=n.state;e.currentGame=n.state.games.find((function(e){return e.id==n.state.id})),n.setState(e)},n.handleClick=function(e){var a=n.state,t=a.currentGame.scoreComponents[a.currentScoreComponent];console.log(e),a.currentScore=e.score?a.currentScore+e.score:a.currentScore,a.lastResponse=e.response?e.response:n.state.lastResponse,a.scoreClicked&&a.currentScoreComponent++,a.scoreClicked=!0,0===a.currentScoreComponent&&n.state.currentGame.scoreComponents.length>1?a.button.buttonText="In Overview":"final"===t.type&&(a.button.buttonState="hide"),n.setState(a)},n.setSum=function(e){console.log(e)};var o=e.match.params.gameId;return n.state={scoreClicked:!1,button:{buttonState:"init",buttonText:"SCORE IT!"},id:o,currentScoreComponent:0,currentGame:{},currentScore:0,lastResponse:"",games:[{id:1,name:"Blokus",scoreComponents:[{component:E,componentParams:{positive:!1,addScore:!0,label:"Enter the number of squares you have in your remaining tiles."}},{component:S,componentParams:{question:"Is the last piece you placed on the board your smallest piece (1 square)?",onTrue:5,onFalse:0}},{component:S,componentParams:{question:"Did you place all of your tiles?",onTrue:15,onFalse:0}},{component:C,type:"final",componentParams:{}}]},{name:"Traders of Osaka",id:2,scoreComponents:[{component:E,componentParams:{positive:!0,addScore:!1,label:"Enter the number of cards in the set being sold plus the number of achievement tokens in that color."}},{component:g,componentParams:{round:{direction:"up",place:5},value1:{type:"input",label:"Enter the value of the highest value card in the set being sold"},value2:{type:"input",label:"Value from the previous entry",value:"previousScore"}}},{component:C,type:"final",componentParams:{operation:"divide",operationValue:5}}]},{name:"Brass: Lancashire",id:3,scoreComponents:[{component:E,componentParams:{positive:!0,addScore:!0,label:"End of Canal Era: For each of your link tiles, add 1 for each connect icon in adjacent locations."}},{component:E,componentParams:{positive:!0,addScore:!0,label:"End of Canal Era: Add all points from your flipped tiles."}},{component:E,componentParams:{positive:!0,addScore:!0,label:"End of Game: For each of your link tiles, add 1 for each connect icon in adjacent locations."}},{component:E,componentParams:{positive:!0,addScore:!0,label:"End of Game: Add all points from your flipped tiles."}},{component:P,componentParams:{positive:!0,addScore:!0,round:{direction:"down",place:1},value1:{type:"input",label:"End of Game: Add all Pounds remaining."},value2:{type:"fixed",label:"1 Point for every 10 Pounds",value:10}}},{component:C,type:"final",componentParams:{}}]}]},n}return Object(m.a)(t,[{key:"render",value:function(){var e=this,a=this.state.games.find((function(a){return a.id==e.state.id})),t=this.state.currentGame.id?this.state.currentGame:a,n=t.scoreComponents[this.state.currentScoreComponent].component;return o.a.createElement("div",{className:"center game-overview"},o.a.createElement("h2",{className:"game-title"},"Game Overview for ",a.name," "),this.state.scoreClicked&&o.a.createElement("h3",{className:"game-score"},"Current Score: ",this.state.currentScore),this.state.scoreClicked&&o.a.createElement(n,{componentParams:t.scoreComponents[this.state.currentScoreComponent].componentParams,score:this.state.currentScore,lastResponse:this.state.lastResponse,handleClick:this.handleClick}),!this.state.scoreClicked&&o.a.createElement(h.a,{variant:"contained",color:"primary",onClick:this.handleClick},this.state.button.buttonText))}}]),t}(n.Component);var y=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(i,null),o.a.createElement(l.c,null,o.a.createElement(l.a,{exact:!0,path:"/",component:v}),o.a.createElement(l.a,{exact:!0,path:"/score-it",component:v}),o.a.createElement(l.a,{path:"/games/:gameId",component:k})))};s.a.render(o.a.createElement(c.a,null,o.a.createElement(y,null)),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.42a18471.chunk.js.map