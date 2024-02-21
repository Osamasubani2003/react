import React from "react";
import react from "react";

class Car extends React.Component{
    constructor(props){
        super(props)
        this.state={color:"blue"}
    }
    render(){
        return (
            <div class="car" style={{borderColor:this.props.color, borderWidth:'10px', borderStyle:'solid'}}>
                <h1>{this.props.name}</h1>
                <img src={this.props.image} alt="image car"/>
                <p>Description:{this.props.desc}</p>
            
            </div>
        )
    }
}
export default Car;