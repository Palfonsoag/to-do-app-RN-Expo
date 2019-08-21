import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Task = ({ task, taskContainer, removeTask, id }) => (
  <View style={[styles.container, taskContainer]}>
    <View style={styles.itemTextContainer}>
      <Ionicons name="md-paw" size={26} color="black" />
      <Text style={styles.textStyle}>{task}</Text>
    </View>

    <TouchableOpacity
      style={styles.trashIconContainer}
      onPress={() => removeTask(id)}
    >
      <Ionicons name="md-trash" size={26} color="black" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    flexDirection: "row",
    paddingHorizontal: 30
  },
  itemTextContainer: {
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    width: "80%"
  },
  trashIconContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    width: "20%",
    flexDirection: "row"
  },
  textStyle: {
    fontSize: 24,
    marginLeft: 20
  }
});

export default Task;
