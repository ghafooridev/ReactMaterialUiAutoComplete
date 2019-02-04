import React, { Component } from "react";
import "./App.css";
import AutoComplete from "./autoComplete";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "ali",
          age: 18
        },
        {
          id: 2,
          name: "hasan",
          age: 20
        },
        {
          id: 3,
          name: "javad",
          age: 22
        },
        {
          id: 4,
          name: "mohamad",
          age: 24
        },
        {
          id: 5,
          name: "reza",
          age: 27
        },
        {
          id: 6,
          name: "mahdi",
          age: 29
        },
        {
          id: 7,
          name: "hadi",
          age: 25
        },
        {
          id: 8,
          name: "bagher",
          age: 30
        },
        {
          id: 9,
          name: "sadegh",
          age: 32
        },
        {
          id: 10,
          name: "hosein",
          age: 21
        }
      ]
    };
  }
  handleSelect = value => {
    console.log("#######", value);
  };
  render() {
    return (
      <div>
        <AutoComplete
          data={this.state.data}
          defaultValue="ali"
          handleSelect={this.handleSelect}
          target='name'
        />
      </div>
    );
  }
}

export default App;
