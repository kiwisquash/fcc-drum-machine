import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const audioList = [
	{ key: "Q", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},
	{ key: "W", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
	{ key: "E", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },
	{ key: "A", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },
	{ key: "S", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
	{ key: "D", src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
	{ key: "Z", src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },
	{ key: "X", src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },
	{ key: "C", src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }
	// { src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" },
	// { src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" },
	// { src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" },
	// { src: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3" },
	// { src: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3" },
	// { src: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3" },
	// { src: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" },
	// { src: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" },
	// { src: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" }
]

const validKeys = [
	"Q", "W", "E", "A", "S", "D", "Z", "X", "C"
];

for (let clip of audioList) {
	clip.name = clip.src.match(/([\w_-\d]+)\.mp3$/)[1]; 
}

const Clip = (props) => {
	return (<audio preload="auto" className="clip" src={props.audioObj.src} id={props.innertext} />);
}

const Pad = (props) => {
	return (<div id={props.audioObj.name} className={"drum-pad "+ props.row} onClick={()=>props.handleClick(props.innertext)}>
		<div>{props.innertext}</div>
		<Clip audioObj={props.audioObj}  innertext={props.innertext}/>	
	</div>);
}

class Pads extends React.Component {
	
	renderPad(innertext, pos) {
		return <Pad row={"row" + Math.floor(1+pos/3)}
		audioObj={audioList[pos]}
		innertext={innertext}
		handleClick={(elem_id) => this.props.handleClick(elem_id)} />;
	}

	render() {
		return (
			<div id="drum-pads" >
				{this.renderPad("Q",0)}
				{this.renderPad("W",1)}
				{this.renderPad("E",2)}
				{this.renderPad("A",3)}
				{this.renderPad("S",4)}
				{this.renderPad("D",5)}
				{this.renderPad("Z",6)}
				{this.renderPad("X",7)}
				{this.renderPad("C",8)}
			</div>
		);
	}
}

const Display = (props) => (
	<div id="display">
		<div id="inner-screen">
		<h1>{props.clipName}</h1>
		</div>
	</div>
)

class DrumMachine extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			clipName: ""
		};
		this.onKeyPress = this.onKeyPress.bind(this);
	}

	playSound(elem_id) {
		const sound = document.getElementById(elem_id);
		sound.currentTime = 0;
		sound.play();
		let clip;
		for (let audio of audioList) {
			if (audio.key === elem_id) {
				clip = audio.name;
			}
		}
		this.setState({
			clipName: clip
		}, ()=>console.log("Just played: "+ this.state.clipName))
	}

	onKeyPress(e) {
		let pressed = String.fromCharCode(e.keyCode);
		if (validKeys.includes(pressed)) { 
			this.playSound(pressed);
		} else {
			console.log(pressed + " is not a valid key.");
		}
	}
	
	componentDidMount() {
		document.addEventListener("keydown", this.onKeyPress);
	}
	
	componentWillUnmount() {
		document.removeEventListener("keydown", this.onKeyPress);
	}

	handleClick(elem_id) {
		this.playSound(elem_id);	
		// console.log("I clicked on " + elem_id);
	}

	render() {
		return (
			<div id="drum-machine">
				<div id="inner-container">
					<Display clipName={this.state.clipName}/>
					<Pads handleClick={(elem_id)=>this.handleClick(elem_id)}/>
				</div>
			</div>
		);
	}
}
ReactDOM.render(
	<DrumMachine />, document.getElementById('root')
);


