import React, {Component} from "react";

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
        clickedButton1: 0,
        clickedButton2: 0
    }

    // this.clickMethod = this.clickMethod.bind(this);
    
  }

  clickMethod() {
    console.log('--- clickMethod BEGIN ---', this.state.clickedButton1);
    this.setState({
        clickedButton1: this.state.clickedButton1 + 1
    })
    console.log('--- clickMethod END ---', this.state.clickedButton1);
  }

  clickMethod2 = () => {
    console.log('--- clickMethod2 BEGIN ---', this.state.clickedButton2);
    this.setState({
        clickedButton2: this.state.clickedButton2 + 1
    })
    console.log('--- clickMethod2 END ---', this.state.clickedButton2);
  }

  render() {
    return(
      <div>
        <button type="button" onClick={this.clickMethod.bind(this)}>Button 1</button>
        <br />
        <button type="button" onClick={this.clickMethod2}>Button 2</button>
        {/* {console.log(this.state)} */}
      </div>
    )

  }

}
