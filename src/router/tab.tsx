import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CreateAnnoucement } from "../screens/auth/create-annoucement"
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