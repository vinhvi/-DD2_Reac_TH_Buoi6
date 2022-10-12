import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, TextInput, TouchableHighlight } from "react-native";
import ToDoList from "../screen/ToDoListScreen";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import axios from "axios";

const Stack = createStackNavigator();

function StackNavigator() {

  const [value, setValue] = useState("");
  const [todo, setTodos] = useState([]);

  const addTodo = () => {
    if (value.length > 0) {
      setTodos([...todo]);
      axios
        .post("https://6346c3c59eb7f8c0f8850411.mockapi.io/api/todo/todo", {
          name: value,
        })
        .catch(function (error) {
          console.log(error);
        });
      setValue("");
    }
  };

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="ToDoList"
        component={ToDoList}
        options={({ route }) => ({
          title: "",
          header: () => (
            <View
              style={{
                backgroundColor: "#1BA9FF",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                width: 395,
                height: 100,
                marginTop: 40,
              }}
            >
              <View
                style={{
                  borderColor: "black",
                  borderWidth: 1,
                  width: 250,
                  height: 40,
                  alignItems: "center",
                  
                }}
              >
                <TextInput
                  style={{ marginLeft: 20,color:"white", }}
                  placeholder="nhap...."
                  onChangeText={(value) => setValue(value)}
                  value={value}
                ></TextInput>
              </View>
              <TouchableHighlight style={{ marginRight: 30 }} onPress={()=>addTodo()}>
                <Ionicons name="add-circle-outline" size={40} color="white" />
              </TouchableHighlight>
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  );
};
export default MainNavigator;
