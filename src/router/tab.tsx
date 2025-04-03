import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Annoucement } from "../screens/auth/annoucement"
import { Home } from "../screens/auth/home"
import { MyAnnoucements } from "../screens/auth/my-annoucements"

const Tabs = createBottomTabNavigator()

export function TabNavigator() {
    return (
        <Tabs.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tabs.Screen 
                name="Home" 
                component={Home}
            />
            <Tabs.Screen 
                name="My Annoucement" 
                component={MyAnnoucements}
            />
        </Tabs.Navigator>
    )
}