import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen } from "./screens/login/login.screens";
import TabOneScreen from "./screens/support/TabOneScreen";
import TabTwoScreen from "./screens/support/TabTwoScreen";

const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Login"
      >
        <Screen name="Login" component={LoginScreen}></Screen>
        <Screen name="Support" component={TabOneScreen}></Screen>
        <Screen name="Technician" component={TabTwoScreen}></Screen>
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
