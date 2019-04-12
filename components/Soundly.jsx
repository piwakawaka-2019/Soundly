import React from 'react'

class Soundly extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            letterToDisplay: '',
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
            letterToDisplay: event.key
    })}
    

    render(){
        return (
            <div onKeyDown={this.keyDownHandler} style={this.state.style} className="soundlet" id={this.props.id}>
                {this.state.letterToDisplay}
            </div>)
    }
}

export default Soundly