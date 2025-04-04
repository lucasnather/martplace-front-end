import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { House, SignOut, Tag } from "phosphor-react-native"
import { CreateAnnoucement } from "../screens/auth/create-annoucement"
import { Home } from "../screens/auth/home"
import { MyAnnoucements } from "../screens/auth/my-annoucements"
import { Logout } from "../screens/logout"

const Tabs = createBottomTabNavigator()

export function TabNavigator() {
    return (
        <Tabs.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                height: 72, 
                paddingTop: 10, 
                paddingBottom: 10, 
                backgroundColor: '#FFFFFF',
            },
        }}>
            <Tabs.Screen 
                name="Home" 
                component={Home}
                options={{
                    tabBarIcon: () => {
                        return <House />
                    }
                }}
            />
            <Tabs.Screen 
                name="My Annoucement" 
                component={MyAnnoucements}
                options={{
                    tabBarIcon: () => {
                        return <Tag />
                    }
                }}
            />
            <Tabs.Screen 
                name="Logout" 
                component={Logout}
                options={{
                    tabBarIcon: () => {
                        return <SignOut color="#E07878" />
                    }
                }}
            />
        </Tabs.Navigator>
    )
}