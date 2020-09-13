import React, {Component} from "react";
import Painel from "./Painel";

export default class Props extends Component {
  constructor(props) {
    super(props);
    const { attr, attr2, attr3 } = this.props;
    console.log(attr, attr2, attr3);
  }

  render() {
    const { attr, attr2, attr3 } = this.props;
    return (
      <div>
        { attr === 'p' ? <p>PROPS1</p> : <h1>PROPS2</h1>}
        <Painel headercolor="red" bordercolor="blue" headertext="This is a reader" data="School of net" />
        <Painel headercolor="gray" bordercolor="purple" headertext="This is a reader" data="School of net" />
      </div>
    )
  }

}
