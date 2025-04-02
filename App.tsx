import { NavigationContainer } from "@react-navigation/native";
import "./global.css"
import { StackNavigator } from "./src/router/stack";


export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

