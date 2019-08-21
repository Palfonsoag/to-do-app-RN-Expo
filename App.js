import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/common/Header";
import Body from "./src/components/common/Body";

class App extends Component {
  constructor() {
    super();
    this.state = { tasks: [], inputText: "" };
  }
  onInputTextChange = value => {
    this.setState({ inputText: value });
  };

  addTask = () => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        { id: this.state.tasks.length + 1, task: this.state.inputText }
      ],
      inputText: ""
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          onInputTextChange={this.onInputTextChange}
          addTask={this.addTask}
          textContent={this.state.inputText}
        />
        <Text>{this.state.inputText}</Text>
        <Body tasks={this.state.tasks} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default App;
