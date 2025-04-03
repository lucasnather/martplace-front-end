import { useNavigation } from "@react-navigation/native";
import { Plus } from "phosphor-react-native";
import {ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Product from "../../../assets/product.png";

export function MyAnnoucements() {
    const { navigate} = useNavigation()

    const goToUpdateAnnoucements = () => {
        navigate("Update Annoucement", {})
    }

    return (
        <View className="px-5">
            <SafeAreaView >
                <View className="flex-row justify-between w-[70%] ml-auto mt-10">
                    <Text className="font-bold text-[20px]">Meus Anúncios</Text>
                    <TouchableOpacity>
                        <Plus />
                    </TouchableOpacity>
                </View>

                <View className="mt-10 flex-row">
                    <Text className="text-base-gray-2 text-[14px] mb-5">9 anúncios</Text>
                </View> 

                <View className="flex-row items-center justify-between flex-wrap w-full gap-y-10">
                    <View>
                        <TouchableOpacity className="rounded-xl overflow-hidden w-[180px] h-[100px]" onPress={goToUpdateAnnoucements}>
                            <ImageBackground source={Product} className="flex-row justify-end w-full h-full p-1">
                                <Text className="bg-gray-700 text-white h-[30px] p-2 rounded-xl">Usado</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <Text className="text-gray-700 text-sm my-2">Tênis vermelho</Text>
                        <Text className="text-gray-900 text-sm font-bold">R$ 59,90</Text>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}