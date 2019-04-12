import React from 'react'

let images = {
    "a": ["apple", "sound (1)"],
    "b": ["bear", "sound (2)"],
    "c": ["coconut", "sound (3)"]
}

class Soundly extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            keyPushed: '',
            image: '',
            audio: '',
            style: {
                height: '250px',
                width: '300px',
                backgroundColor: 'grey'
            }
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
            <div style={this.state.style} id="soundly">
                <img src ={this.state.image}/>
                <audio src={this.state.audio} type="audio/wav" autoPlay random={this.state.random} />
            </div>)
    }
}

export default Soundly