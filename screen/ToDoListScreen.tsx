import { FlatList, Text, View } from "react-native";
import React, { Component, useEffect, useState } from "react";
import todo from "../data/ToDo";
import ToDoListItem from "../components/ToDoList";

const [posts, setPosts] = useState([]);
useEffect(() => {
  fetch("https://633ec50a0dbc3309f3bcca92.mockapi.io/app/list/todo")
    .then((res) => res.json())
    .then((posts) => {
      setPosts(posts);
    });
}, []);

export class ToDoListScreen extends Component {

  
  render() {
    return (
      <FlatList
      post


        data={todo}
        renderItem={({ item }) => <ToDoListItem todo={item} />}
      />
    );
  }
}

export default ToDoListScreen;
