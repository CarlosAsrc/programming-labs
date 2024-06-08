import React, { Component } from "react";
import Input from "./Input";

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    
    this.nameRef = React.createRef(null);
    this.birthRef = React.createRef(null);

    this.state = {
      crowd: [],
      name: "",
      birth: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, birth } = this.state;
    const newCrowd = {
      id: this.state.crowd.length + 1,
      name,
      birth,
    };
    this.setState({
      crowd: [...this.state.crowd, newCrowd],
      name: "",
      birth: "",
    });

    this.nameRef.current.value = "";
    this.birthRef.current.value = "";
  }


  componentDidMount(){
    this.setState({
      name: "",
      birth: "",
      crowd: [
        {
          id: 1,
          name: "Carlos",
          birth: "1999-04-1999",
        },
      ],
    })
  }

  render() {
    return (
      <div>
        <h2 className="text-center">{this.props.msg}</h2>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <Input
            title="Name"
            type="text"
            name="name"
            id="name"
            ref={this.nameRef}
            className="form-control"
            onChange={(e) => this.setState({ name: e.target.value })}
          ></Input>
          <Input
            title="Birth"
            type="date"
            name="birth"
            id="birth"
            ref={this.birthRef}
            className="form-control"
            onChange={(e) => this.setState({ birth: e.target.value })}
          ></Input>

          <input type="submit" value="Submit" className="btn btn-primary" />
        </form>
        <hr />
        <ul>
          {this.state.crowd.map((item) => (
            <li key={item.id}>
              <div>
                {item.name}: {item.birth}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
