import React, { Component } from 'react';



class Form extends Component {

    constructor() {
  
        super()
        this.state = {
          valueOne: "",
          valueTwo: "",
          valueThree: ""
          
          
        }
        // this.baseState = this.state
        
      }

    resetForm = () => {
        this.setState({valueOne: "" })
    }

    inputOneChange(value) {
        this.setState({valueOne: value }) 
      }

    inputTwoChange(value) {
        this.setState({valueTwo: value }) 
      }
    
    inputThreeChange(value) {
        this.setState({valueThree: value }) 
      }

    render() {
        return (
          <form className="form">Form
          <input 
            defaultValue={this.state.valueOne}
            onChange={(e) => this.inputOneChange(e.target.value)}
          />
          <input 
            defaultValue={this.state.valueTwo}
            onChange={(e) => this.inputTwoChange(e.target.value)}
          />
          <input 
            defaultValue={this.state.valueThree}
            onChange={(e) => this.inputThreeChange(e.target.value)}
          />
          <button
          onClick={this.resetForm}
          type="button">Cancel</button>
          
          <button>Add to Inventory</button>
          </form>
        );
      }
    }


export default Form
