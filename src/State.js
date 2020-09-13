import React, {Component} from "react";

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: 'Leonan',
        age: 22
    }

    console.log(this.state)
  }

  render() {
      const {name, age} = this.state;
    return (
      <div>
        <h1>Nome: {name}<br /> Idade: {age}</h1>
      </div>
    )
  }

}
