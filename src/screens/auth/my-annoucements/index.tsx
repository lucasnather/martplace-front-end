import { useNavigation } from "@react-navigation/native";
import { Plus } from "phosphor-react-native";
import {ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Product from "../../../assets/product.png";
import { CardProduct } from "../../../components/card-product";

export function MyAnnoucements() {
    const { navigate} = useNavigation()

    const goToUpdateAnnoucements = () => {
        navigate("Update Annoucement", {})
    }

    const goToCreateAnnoucements = () => {
        navigate("Create Annoucement", {})
    }

    return (
        <View className="px-5">
            <SafeAreaView >
                <View className="flex-row justify-between w-[70%] ml-auto mt-10">
                    <Text className="font-bold text-[20px]">Meus Anúncios</Text>
                    <TouchableOpacity onPress={goToCreateAnnoucements}>
                        <Plus />
                    </TouchableOpacity>
                </View>

                <View className="mt-10 flex-row">
                    <Text className="text-base-gray-2 text-[14px] mb-5">9 anúncios</Text>
                </View> 

                <View className="flex-row items-center justify-between flex-wrap w-full gap-y-10">
                    <CardProduct 
                        isNewOrUsed="novo"
                    />
                    <CardProduct 
                        isNewOrUsed="usado"
                    />
                </View>
            </SafeAreaView>
        </View>
    )
}