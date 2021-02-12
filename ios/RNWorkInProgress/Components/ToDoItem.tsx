import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';

export interface Props {
  item?: string;
  isDone?: boolean;
}
const ToDoItem: React.FC<Props> = props => {
  const [isDone, setIsDone] = React.useState(props.isDone);

  const whenclicked = () => {};
  return (
    <View style={styles.container}>
      <Text style={styles.text}>What would you like to get done today?</Text>
      <TextInput style={styles.inputText} value={props.item}>
        Item
      </TextInput>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#767577',
  },
  inputText: {
    margin: 20,
  },
});

export default ToDoItem;
