import React from 'react'
import axios from 'axios'
import './App.css';

class TimeClock extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      time: new Date().toLocaleString(),
      success: null
    }
  }

  tick(){
    this.setState({
      time: new Date().toLocaleString()
    })
  }

  componentDidMount(){
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount(){
    clearInterval(this.intervalID)
  }

  render() {
    return (
      <div className="App">
        <header>Time Entry</header>
        <div className="Entry_input">
          <p> {this.state.time} </p> <br/>
          <input placeholder='employee ID'/> <br/>
          <input placeholder='password'/> <br/>
          <button name='clockIn'>Clock In</button> 
          <button name='clockOut'>Clock Out</button> <br/>
          <p>{this.state.success}</p>
        </div>
      </div>
    );
  }
}

export default TimeClock;
