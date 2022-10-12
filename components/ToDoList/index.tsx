import React, { useState } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { ToDo } from "../../type";

export type ToDoProps = {
  todo: ToDo;
};

const ToDoListItem = (props: ToDoProps) => {
  const { todo } = props;
  return (
    <View
      style={{
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "gray",
        alignItems: "center",
        height:50,
      }}
    >
      <View style={{ flexDirection: "row", }}>
        <Text style={{ borderColor: "black", borderWidth: 1,fontWeight:"bold",marginRight:30,fontSize:20, }}>{todo.id}</Text>
        <Text style={{fontSize:20,}}>{todo.todo}</Text>
      </View>
      <TouchableHighlight onPress={todo.delete}>
        <Text style={{ borderColor: "black", borderWidth: 1,fontSize:20, }}>Remove</Text>
      </TouchableHighlight>
    </View>
  );
};

export default ToDoListItem;
function setTodos(arg0: any) {
  throw new Error("Function not implemented.");
}

