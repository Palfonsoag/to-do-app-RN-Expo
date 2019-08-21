import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const Header = ({
  headerContainer,
  onInputTextChange,
  addTask,
  textContent
}) => (
  <View style={[styles.container, headerContainer]}>
    <Text style={styles.title}>To Do App</Text>
    <TextInput
      placeholder={"Write your task here..."}
      style={styles.textInput}
      onChangeText={onInputTextChange}
      onSubmitEditing={addTask}
      value={textContent}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#3E5F8A"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#000000",
    fontSize: 22,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    marginTop: 25,
    paddingHorizontal: 15
  },
  title: {
    fontSize: 28,
    color: "#FFFFFF",
    alignSelf: "center",
    marginTop: 25
  }
});

export default Header;
