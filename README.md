# Front End Libraries Projects - Build a Drum Machine

**Objective**: Build a CodePen.io app that is functionally similar to this: [https://codepen.io/freeCodeCamp/full/MJyNMd](https://codepen.io/freeCodeCamp/full/MJyNMd).

- User Story #1: I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements.
- User Story #2: Within #drum-machine I can see an element with a corresponding id="display".
- User Story #3: Within #drum-machine I can see 9 clickable drum pad elements, each with a class name of drum-pad, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.
- User Story #4: Within each .drum-pad, there should be an HTML5 audio element which has a src attribute pointing to an audio clip, a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).
    User Story #5: When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.
- User Story #6: When I press the trigger key associated with each .drum-pad, the audio clip contained in its child audio element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string "Q", pressing the W key should trigger the drum pad which contains the string "W", etc.).
- User Story #7: When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).

# Basic design

This google doc contains the basic design for the [drum machine](https://docs.google.com/document/d/1-g2ZRDjTF491ileXkFPDAXOm45D1KkBEaGTIs0wJV_I/edit).

# Tools
- React.js

# Drum machine sounds
- The URL of the mp3 files for the different drum machine sounds are listed here:
	- [https://www.freecodecamp.org/forum/t/drum-machine-sound-urls/231516](https://www.freecodecamp.org/forum/t/drum-machine-sound-urls/231516)
- Before I can get started, I need to figure out how to play sounds!

# How to get audio to play

- Look into the `<audio>` tag, as welll as the `load()` and `play()` methods 
- [play and pause buttons](https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_av_met_play_pause)
