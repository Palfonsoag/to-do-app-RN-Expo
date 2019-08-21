import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import Task from "./Task";

const renderTask = task => {
  console.log("task on body", task);
  return <Task task={task.task} />;
};

const Body = ({ bodyContainer, tasks }) => (
  <View style={[styles.container, bodyContainer]}>
    <FlatList
      data={tasks}
      renderItem={({ item, index }) => renderTask(item)}
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
