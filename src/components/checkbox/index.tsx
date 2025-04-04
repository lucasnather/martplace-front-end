import { Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox"

type CheckBoxProps = {
    title: string
}

export function CheckBox({title}: CheckBoxProps) {
    return (
        <View className="flex-row mb-2">
            <BouncyCheckbox 
                fillColor="#364D9D"
            />
            <Text className="text-[16px] text-base-gray-2">{title}</Text>
        </View>
    )
}