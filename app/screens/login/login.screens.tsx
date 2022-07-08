import react from "react";
import {
  Provider as PaperProvider,
  Button,
  Card,
  Text,
  TextInput,
} from "react-native-paper";
import { Image, StyleSheet, SafeAreaView, ImageBackground } from "react-native";

export const LoginScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../../assets/background-image.webp")}
    >
      <SafeAreaView style={styles.view}>
        <Image
          style={styles.logo}
          source={require("../../../assets/jlr-logo.png")}
        ></Image>
        <Text style={styles.text}>Interactive AR User Guide</Text>
        <PaperProvider>
          <TextInput mode="outlined" label="Vehicle Registration Number" />
          <Button
            color="black"
            icon="camera"
            mode="contained"
            onPress={() => console.log("Pressed")}
          >
            scan number
          </Button>
        </PaperProvider>
        <Button
          color="black"
          mode="elevated"
          onPress={() => console.log("Pressed")}
        >
          submit details
        </Button>
      </SafeAreaView>
    </ImageBackground>
  );
};

var styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  view: {
    flex: 1,
  },
  logo: {
    width: "100%",
    flex: 1,
  },
  text: {
    flex: 4,
    color: "white",
    textShadowColor: "black",
    textShadowRadius: 20,
    textAlign: "center",
    fontSize: 40,
    marginTop: 100,
    fontFamily: "Futura",
  },
});
