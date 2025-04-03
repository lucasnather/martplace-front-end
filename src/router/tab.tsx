import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Annoucement } from "../screens/auth/annoucement"
import { Home } from "../screens/auth/home"

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
            {/* <Tabs.Screen 
                name="Annoucement" 
                component={Annoucement}
                options={{tabBarItemStyle: { display: "none" }}}
            /> */}
        </Tabs.Navigator>
    )
}