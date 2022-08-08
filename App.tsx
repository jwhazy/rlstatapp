import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import Home from "./src/screens/Home";
import User from "./src/screens/User";
import { AppContext } from "./src/components/AppContext";
import { Method } from "./src/types/method";
import { useState } from "react";
import { Appearance } from "react-native";

export type RootStackParamList = {
  Home: undefined;
  User: { username: string; method: Method };
};

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const colorScheme = Appearance.getColorScheme();

  const [method, setMethod] = useState<Method>(0);

  const [username, setUsername] = useState<string>("");
  return (
    <AppContext.Provider value={{ method, setMethod, username, setUsername }}>
      <TailwindProvider utilities={utilities}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerLargeTitle: true,
                headerStyle: {
                  backgroundColor:
                    colorScheme === "light" ? "#F2F2F6" : "#000000",
                },
                headerLargeTitleShadowVisible: false,
                headerShadowVisible: false,
                title: "Statistics Lookup",
              }}
            />
            <Stack.Screen
              name="User"
              component={User}
              options={({ route }) => ({
                headerLargeTitle: true,
                headerStyle: {
                  backgroundColor:
                    colorScheme === "light" ? "#F2F2F6" : "#000000",
                },
                headerLargeTitleShadowVisible: false,
                headerShadowVisible: false,
                title: route.params.username as any,
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </TailwindProvider>
    </AppContext.Provider>
  );
}
