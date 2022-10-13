import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ToDoListItem from './components/ToDoList';
import MainNavigator from './navigation';

export default function App() {

  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   fetch("https://6346c3c59eb7f8c0f8850411.mockapi.io/api/todo/Todo")
  //     .then((res) => res.json())
  //     .then((posts) => {
  //       setPosts(posts);
  //     });
  // }, []);

  // console.log(posts)
  return (
  //  <View>
  //   {posts.map((data)=>(
  //   <FlatList data={data} renderItem={({item})=><ToDoListItem todo={item}/>}/>
  //   ))}
  //  </View>
  <MainNavigator></MainNavigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
