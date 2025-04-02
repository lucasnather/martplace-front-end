import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "../screens/auth/home"

const Tabs = createBottomTabNavigator()

export function TabNavigator() {
    return (
        <Tabs.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tabs.Screen 
                name="Home" component={Home}
            />
            {/* <Tabs.Screen 
                name="Register" component={Register}
            /> */}
        </Tabs.Navigator>
    )
}