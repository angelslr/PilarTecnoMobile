import React, { Component, useCallback } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  ImageBackground,
  Image,
} from "react-native";
//import { styles } from "./styles";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default Home = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.mainContent}
        source={require("../../assets/windows-10-bliss-at-night-minimal-5k-bm-5120x28802.jpg")}
      >
        <View style={styles.rowContent}>
          <Pressable
            style={[styles.buttonContent, { backgroundColor: "red" }]}
            onPress={() => props.navigation.navigate("List")}
          >
            <Text style={styles.title}>Home</Text>
          </Pressable>
          <Pressable
            style={[styles.buttonContent, { backgroundColor: "blue" }]}
            onPress={() => console.log("Button 2")}
          >
            <Text style={styles.title}>Perfil</Text>
          </Pressable>
        </View>

        <View style={styles.rowContent}>
          <Pressable
            style={[styles.buttonContent, { backgroundColor: "pink" }]}
            onPress={() => console.log("Button 3")}
          >
            <Text style={styles.title}>Lista</Text>
          </Pressable>
          <Pressable
            style={[styles.buttonContent, { backgroundColor: "yellow" }]}
            onPress={() => console.log("Button 4")}
          >
            <Text style={styles.title}>Mapa</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainContent: {
    flex: 1,
    width,
    height,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  buttonContent: {
    width: width / 3,
    height: width / 3,
    margin: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  rowContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    width: "100%",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "grey",
  },
});
