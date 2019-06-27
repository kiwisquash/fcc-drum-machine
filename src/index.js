import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Clip = (props) => {
	return (<audio className="clip" src={props.src} id={props.id} />);
}

const Pad = (props) => {
	return (<div className={"drum-pad "+ props.row}>
		<div>{props.innertext}</div>
		<Clip src={props.src} id={props.innertext}/>	
	</div>);
}

const Display = (props) => {
	return (<div id="display">
		<Pad row="row1" src="temp" innertext="Q"/>
		<Pad row="row1" src="temp" innertext="W"/>
		<Pad row="row1" src="temp" innertext="E"/>
		<Pad row="row2" src="temp" innertext="A"/>
		<Pad row="row2" src="temp" innertext="S"/>
		<Pad row="row2" src="temp" innertext="D"/>
		<Pad row="row3" src="temp" innertext="Z"/>
		<Pad row="row3" src="temp" innertext="X"/>
		<Pad row="row3" src="temp" innertext="C"/>
	</div>);
}

ReactDOM.render(
	<div id="drum-machine">
		<div className="filler"/>
		<Display/>
		<div className="filler"/>
	</div>, document.getElementById('root')
);
