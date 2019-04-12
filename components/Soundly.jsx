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
    "l": ["Cannabis", "sound (10)"],
    "m": ["cloud", "sound (11)"],
    "n": ["Dirt", "sound (12)"],
    "o": ["fire", "sound (13)"],
    "p": ["johannes", "sound (14)"],
    "q": ["Seashell", "sound (15)"],
    "r": ["Seashells", "sound (16)"],
    "s": ["water", "sound (17)"],
    "t": ["Lilies1", "sound (18)"],
    "u": ["Lilies2", "sound (19)"],
    "v": ["wig1", "sound (20)"],
    "w": ["wig2", "sound (21)"],
    "x": ["wig3", "sound (22)"],
    "y": ["wig4", "sound (23)"],
    "z": ["broccoli", "sound (24)"],
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