import { FlatList, SafeAreaView, Text } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import fonts from "./config/fonts";
import Font from "./config/Font";
import Card from "./components/Card";
import axios from "axios";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        const newData = response.data.map((item) => {
          return {
            id: item.id,
            title: item.title,
            completed: item.completed,
          };
        });
        setData(newData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Card isCompleted={item.completed} title={item.title} id={item.id} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}
