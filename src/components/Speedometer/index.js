import { Component } from "react";
import './index.css'
class Speedometer extends Component{
    state = {speed:0}
    onClickBreak  = () =>{
        this.setState(prevState =>({speed: 0}))
    }

    onAccelerate = () =>{
        const {speed} = this.state
        this.setState(prevState => {
            if (speed < 200){
                return {speed: prevState.speed + 10}
            }
        })
    }

    render(){
        const {speed} = this.state
        return(
            <div className="container">
                <h1>Speedometer</h1>
                <h1>Speed is <span>{speed}</span> Kmph</h1>
                <img src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png" alt="img"/>
                <p>Min limit is 0 and Max limit is 200</p>
                <div>
                    <button className="applybrakebtn" type="button" onClick={this.onClickBreak}>Break</button>
                    <button className="acceleratebtn" type="button" onClick={this.onAccelerate}>Accelerate</button>
                </div>
            </div>
        )
    }
}

export default Speedometer