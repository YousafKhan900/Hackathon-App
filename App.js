import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider, TextInput } from "react-native-paper";
import AppNavigator from "./app/app.navigator";
import { LoginScreen } from "./app/screens/login/login.screens";
import TabTwoScreen from "./app/screens/support/TabTwoScreen";
import TabOneScreen from "./app/screens/support/TabOneScreen";

export default function App() {
  return (
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>
  );
}
