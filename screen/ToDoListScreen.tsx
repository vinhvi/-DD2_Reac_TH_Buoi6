import { FlatList, Text, View } from "react-native";
import React, { Component, useEffect, useState } from "react";
import ToDoListItem from "../components/ToDoList";

const ToDoListScreen = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://6346c3c59eb7f8c0f8850411.mockapi.io/api/todo/Todo")
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);
  console.log(posts);
  return (
    <View>
      {posts.map((data) => (
          <ToDoListItem todo={(data)}/>
        ))}
    </View>
    // renderItem={({ item }) => <ToDoListItem todo={item} />}
  );
};

export default ToDoListScreen;
