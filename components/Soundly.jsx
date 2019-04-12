import React from 'react'
import { BADQUERY } from 'dns';

let images = {
    "a": "apple",
    "b": "bear",
    "c": "coconut"
}

class Soundly extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            keyPushed: '',
            image: '',
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
            image: "../images/" + images[event.key] + ".png"
        })
        console.log(this.state.image)
    }
    

    render(){
        return (
            <div onKeyDown={this.keyDownHandler} style={this.state.style} className="soundlet" id={this.props.id}>
                <img src ={this.state.image}/>
            </div>)
    }
}

export default Soundly