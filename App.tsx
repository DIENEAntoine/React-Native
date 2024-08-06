import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import Deatils from "./components/Details";
import Settings from "./components/Settings";
import { RootStackParamList } from "./router";
import { Button } from "react-native";

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Deatils} options={({ route }) => ({
          headerRight: () => {
            return (
              <Button 
                title="Buy"
                onPress={() => {}}
                disabled={route.params.stock === 0}
              />
            );
          }
        })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


