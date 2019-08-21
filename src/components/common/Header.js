import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const Header = ({
  headerContainer,
  onInputTextChange,
  addTask,
  textContent
}) => (
  <View style={[styles.container, headerContainer]}>
    <Text>Header</Text>
    <TextInput
      placeholder={"Write your task"}
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
    backgroundColor: "#00FF00"
  },
  textInput: {
    paddingHorizontal: 16
  }
});

export default Header;
