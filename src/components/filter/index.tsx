import { X } from "phosphor-react-native";
import { Text, TouchableOpacity, View } from "react-native";

export function Filter(props) {

    
    return (
        <View>
            <View className="flex-row justify-between items-center">
                <Text className="text-lg text-gray-800">Filtrar anúncios</Text>
                    <TouchableOpacity onPress={toggleFilter}>
                         <X size={32}/>
                    </TouchableOpacity>
            </View>
        </View>
    )
}