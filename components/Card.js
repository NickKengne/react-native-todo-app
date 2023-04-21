import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import axios from "axios";

const Card = ({ isCompleted, title, id }) => {
  return (
    <View
      style={{
        width: "97%",
        height: 90,
        backgroundColor: isCompleted ? "#0a5c0d" : "#c41212",
        alignSelf: "center",
        borderRadius: 10,
        alignItems:"center",
        paddingHorizontal: 20,
        justifyContent:"center",
        marginBottom: 10
      }}
    >
      <Text style={{
        fontSize: 35,
        color: "white"
      }}>{id}</Text>
      <Text style={{
        fontSize: 15,
        color: "white"
      }}>{title}</Text>
    </View>
  );
};

export default Card;
