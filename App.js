import React, { Component } from "react";
import { StyleSheet, Text, View, AsyncStorage, Alert } from "react-native";
import Header from "./src/components/common/Header";
import Body from "./src/components/common/Body";
import { STORAGE_ITEMS } from "./src/utils/Constants";
class App extends Component {
  constructor() {
    super();
    this.state = { tasks: [], inputText: "", loading: true };
  }
  componentDidMount() {
    this.getTaskList();
  }

  onInputTextChange = value => {
    this.setState({ inputText: value });
  };

  addTask = () => {
    const newTasksList = [
      ...this.state.tasks,
      { id: this.state.tasks.length + 1, task: this.state.inputText }
    ];
    this.setState({
      tasks: newTasksList,
      inputText: ""
    });
  };

  removeTask = id => {
    const taskFiltered = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks: taskFiltered });
  };

  saveTaskList = () => {
    AsyncStorage.setItem(
      STORAGE_ITEMS.TASK_LIST,
      JSON.stringify(this.state.tasks)
    )
      .then(response => {
        Alert.alert(
          "Task List Saved!",
          "Your Task List Was Saved",
          [{ text: "ok" }],
          {
            cancelable: false
          }
        );
      })
      .catch(error => {
        console.log("storage saving error", error);
      });
    console.log("save is pressed");
  };
  getTaskList = () => {
    AsyncStorage.getItem(STORAGE_ITEMS.TASK_LIST)
      .then(response => {
        this.setState({
          tasks: response ? JSON.parse(response) : [],
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          tasks: [],
          loading: false
        });
        console.log("storage saving error", error);
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
        <Body
          tasks={this.state.tasks}
          handleTaskRemoval={this.removeTask}
          onSavePress={this.saveTaskList}
          loading={this.state.loading}
        />
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
