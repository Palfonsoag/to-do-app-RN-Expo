import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import Task from "./Task";

const renderTask = (task, handleTaskRemoval) => {
  return <Task task={task.task} removeTask={handleTaskRemoval} id={task.id} />;
};

const Body = ({ bodyContainer, tasks, handleTaskRemoval }) => (
  <View style={[styles.container, bodyContainer]}>
    <FlatList
      data={tasks}
      renderItem={({ item, index }) => renderTask(item, handleTaskRemoval)}
      keyExtractor={task => task.id.toString()}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20
  }
});

export default Body;
