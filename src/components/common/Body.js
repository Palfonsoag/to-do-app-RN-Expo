import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const renderTask = task => {
  console.log("task on body", task);
  return <Text>{task.task}</Text>;
};

const Body = ({ bodyContainer, tasks }) => (
  <View style={[styles.container, bodyContainer]}>
    <Text>Body</Text>
    <FlatList
      data={tasks}
      renderItem={({ item, index }) => renderTask(item)}
      keyExtractor={task => task.id.toString()}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 2,

    backgroundColor: "#98FB98"
  }
});

export default Body;
