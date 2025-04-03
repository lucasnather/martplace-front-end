import { createStackNavigator, StackScreenProps } from "@react-navigation/stack"
import { Annoucement } from "../screens/auth/annoucement"
import { UpdateAnnoucements } from "../screens/auth/update-annoucements"

import { Login } from "../screens/login"
import { Register } from "../screens/register"
import { TabNavigator } from "./tab"

type AppStackParamList = {
    Register: undefined
    Login: undefined
}

const Stack = createStackNavigator()

export function StackNavigator() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen 
                name="Login" component={Login}
            />
            <Stack.Screen 
                name="Register" component={Register}
            />
            <Stack.Screen  name="Annoucement" component={Annoucement} />
            <Stack.Screen  name="Update Annoucement" component={UpdateAnnoucements} />
            <Stack.Screen name="Main" component={TabNavigator} />
        </Stack.Navigator>
    )
}