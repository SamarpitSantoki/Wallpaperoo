import React from "react";
import { NativeBaseProvider, Box, Fab, Icon, StatusBar } from "native-base";
import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinearGradient } from "react-native-svg";
const config = {
  initialColorMode: "dark",
  dependencies: {
    "linear-gradient": LinearGradient,
  },
};
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NativeBaseProvider config={config}>
      <NavigationContainer>
        {/* <Fab
          renderInPortal={false}
          shadow={2}
          size="sm"
          icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />}
        /> */}
        <StatusBar barStyle="dark-content" backgroundColor={"#48b2e9"} />
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
