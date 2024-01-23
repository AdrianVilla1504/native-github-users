import React from "react";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
};

const App = () => (
  <PaperProvider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </PaperProvider>
);

export default App;
