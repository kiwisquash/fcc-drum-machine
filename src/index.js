import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Clip = (props) => {
	return (<audio className="clip" src={props.src} id={props.id} />);
}

const Pad = (props) => {
	return (<div className="drum-pad">
		{props.innertext}
		<Clip src={props.src} id={props.innertext}/>	
	</div>);
}

const Display = (props) => {
	return (<div id="display">
		<Pad src="temp" innertext="Q"/>
		<Pad src="temp" innertext="W"/>
		<Pad src="temp" innertext="E"/>
		<Pad src="temp" innertext="A"/>
		<Pad src="temp" innertext="S"/>
		<Pad src="temp" innertext="D"/>
		<Pad src="temp" innertext="Z"/>
		<Pad src="temp" innertext="X"/>
		<Pad src="temp" innertext="C"/>
	</div>);
}

ReactDOM.render(
	<div id="drum-machine">
		<Display/>
	</div>, document.getElementById('root')
);
