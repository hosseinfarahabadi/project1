import React, { Component } from "react";
class Counter extends Component {
  state = { 
    count : 0,
    tags : ['tag1','tag2','tag3']
  };
  render() {
    return (
      <div>

        <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
        <button onClick={this.handleIncreament()} className="btn btn-secondary btn-sm">increament </button>
        <ul>
          { this.state.tags.map(tag => <li key={tag}>{tag}</li>) }
        </ul>
      </div>
    );
  }
      handleIncreament () {
      console.log('icrease');
    }
  getBadgeClasses() {
    let classeBadg = "badge m-2 badge-";
    classeBadg += this.state.count === 0 ? "warning" : "primary";
    return classeBadg;
  }

  formatCounter (){
    const {count} = this.state;
    return count === 0 ? "zero" : count ; 
  }
}
export default Counter;
 