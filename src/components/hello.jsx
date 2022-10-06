import React from "react";

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count:0
    };
  }
  
  render(){
    return (
      <div>
      <button onClick={this.updateCount} className="btn btn-secondary">Increment</button>
      <p>{this.state.count}</p>
      </div>
      );
  }
  updateCount = () =>{
    let newCount=this.state.count+1;
    this.setState({count:newCount});
  }
}
export default Counter;