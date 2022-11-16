import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";

import { store } from "./store";
import { Provider } from "react-redux";
import BasketScreen from "./screens/BasketScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import DeliveryScreen from "./screens/DeliveryScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={HomeScreen}
          ></Stack.Screen>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Restaurant"
            component={RestaurantScreen}
          ></Stack.Screen>
          <Stack.Screen
            options={{ headerShown: false, presentation: "modal" }}
            name="Basket"
            component={BasketScreen}
          ></Stack.Screen>
          <Stack.Screen
            options={{ headerShown: false, presentation: "fullScreenModal" }}
            name="PreparingOrderScreen"
            component={PreparingOrderScreen}
          ></Stack.Screen>
          <Stack.Screen
            options={{ headerShown: false, presentation: "fullScreenModal" }}
            name="Delivery"
            component={DeliveryScreen}
          ></Stack.Screen>
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
