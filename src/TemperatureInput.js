import React from "react";

const scalesNames={
    c:'Celsius',
    f:'Fahrenheit'
};

class TemperatureInput extends React.Component{
    constructor(props){
        super(props);
        // this.state={temperature:''};
        this.handlechange=this.handlechange.bind(this)
    }
    handlechange(e){
        // this.setState({temperature:e.target.value})
        this.props.onTemperatureChange(e.target.value);
    }
    render(){
        // const temperature=this.state.temperature;
        const temperature=this.props.temperature;
        const scale=this.props.scale;
        return(
            <fieldset>
                <legend>enter temperature in {scalesNames[scale]}:</legend>
                <input 
                value={temperature}
                onChange={this.handlechange}
                />
               
            </fieldset>
        )
    }
}

export default TemperatureInput;