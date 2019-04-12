import React from 'react'

let images = {
    "a": ["apple", "sound (1)"],
    "b": ["bear", "sound (2)"],
    "c": ["coconut", "sound (3)"],
    "d": ["dolphin", "sound (4)"],
    "e": ["jaguar", "sound (5)"],
    "f": ["kiwifruit", "sound (6)"],
    "i": ["orange", "sound (7)"],
    "j": ["peach", "sound (8)"],
    "k": ["strawberry", "sound (9)"],
    "l": ["apple", "sound (10)"],
    "m": ["bear", "sound (11)"],
    "n": ["coconut", "sound (12)"],
    "o": ["apple", "sound (13)"],
    "p": ["bear", "sound (14)"],
    "q": ["coconut", "sound (15)"],
    "r": ["apple", "sound (16)"],
    "s": ["bear", "sound (17)"],
    "t": ["coconut", "sound (18)"],
    "u": ["apple", "sound (19)"],
    "v": ["bear", "sound (20)"],
    "w": ["coconut", "sound (21)"],
    "x": ["apple", "sound (22)"],
    "y": ["bear", "sound (23)"],
    "z": ["coconut", "sound (24)"],
}

class Soundly extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            keyPushed: '',
            image: '',
            audio: '',
        }
    }

    componentDidMount() {
        document.getElementById("body").addEventListener("keydown", this.keyDownHandler);
        window.focus()
    }

    keyDownHandler = evt => {
        this.setState({
            keyPushed: event.key,
            image: "/images/" + images[event.key][0] + ".png",
            audio: "/sounds/" + images[event.key][1] + ".wav",
        })
    }
    

    render(){
        return (
            <div id="soundly">
                <img src ={this.state.image} id="key-image" />
                <audio src={this.state.audio} type="audio/wav" autoPlay random={this.state.random} />
            </div>)
    }
}

export default Soundly