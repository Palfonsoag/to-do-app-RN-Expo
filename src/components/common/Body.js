import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import Task from "./Task";

const renderTask = (task, handleTaskRemoval) => {
  return <Task task={task.task} removeTask={handleTaskRemoval} id={task.id} />;
};

const Body = ({
  bodyContainer,
  tasks,
  handleTaskRemoval,
  onSavePress,
  loading
}) => (
  <View style={[styles.container, bodyContainer]}>
    {loading && <ActivityIndicator size={"large"} color={"#3E5F8A"} />}
    {tasks.length > 0 ? (
      <FlatList
        data={tasks}
        renderItem={({ item, index }) => renderTask(item, handleTaskRemoval)}
        keyExtractor={task => task.id.toString()}
        style={styles.flatListSpace}
      />
    ) : (
      <Text style={styles.addTaskTextStyle}>Add Tasks to your list!</Text>
    )}
    <TouchableOpacity style={styles.saveButtonStyle} onPress={onSavePress}>
      <Text style={styles.buttonTextStyle}>Save Task List</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "80%",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  flatListSpace: {
    width: "100%",
    height: "60%"
  },
  saveButtonStyle: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    marginTop: 15,
    borderWidth: 1,
    borderBottomColor: "black",
    width: 160,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#3E5F8A"
  },
  buttonTextStyle: { fontSize: 22, color: "#FFFFFF" },
  addTaskTextStyle: {
    alignSelf: "center",
    marginTop: 20,
    fontSize: 24,
    color: "#3E5F8A"
  }
});

export default Body;
