import { FlatList, SafeAreaView, Text } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import fonts from "./config/fonts";
import Font from "./config/Font";
import Card from "./components/Card";

const data  = [
  {
    id: "4",
    title: "hello guys",
    completed: true
  },
  {
    id: "7",
    title: "hello guuuys",
    completed: false
  },
  {
    id: "6",
    title: "hellos",
    completed: true
  }
]
export default function App() {
  const [fontsLoaded] = useFonts(fonts);
  return !fontsLoaded ? null : (
    <SafeAreaView
      style={{
        paddingHorizontal: 20,
        paddingVertical: 50,
        flex: 1,
      }}
    >
      <Text
        style={{
          fontFamily: Font["poppins-semiBold"],
          fontSize: 28,
        }}
      >
        TodoList Fetch
      </Text>
      <Text
        style={{
          fontFamily: Font["poppins-regular"],
          fontSize: 14,
          color: "#797979",
        }}
      >
        this is a native react app using data from json placeholder api with
        axios.
      </Text>
      <Text
        style={{
          fontFamily: Font["poppins-bold"],
          fontSize: 20,
          paddingVertical: 15,
        }}
      >
        Tasks :{" "}
      </Text>

      {data.map((item) => (
        <Card isCompleted={item.completed} title={item.title} id={item.id}/>
      ))}
      
    </SafeAreaView>
  );
}
