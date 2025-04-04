import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AvatarHome from "../../assets/avatar-home.png";
import Product from "../../assets/product.png";

type CardProductProps = {
    image?: React.ReactNode
    isNewOrUsed: 'novo' | 'usado' 
}

export function CardProduct({image, isNewOrUsed}: CardProductProps) {
    const { navigate } = useNavigation()

    const goToAnnoucement = () => {
        navigate("Annoucement", {})
    }

    return (
        <View>
            <TouchableOpacity className="rounded-xl overflow-hidden w-[180px] h-[100px]" onPress={goToAnnoucement}>
                <ImageBackground source={Product} className="flex-row  justify-between w-full h-full p-1">
                    {
                        image && <View>{image}</View>
                    }
                    {
                        isNewOrUsed === 'novo' 
                            ? 
                            <Text className="bg-primary-blue text-white h-[30px] p-2 rounded-xl">Novo</Text>
                            : 
                            <Text className="bg-gray-700 text-white h-[30px] p-2 rounded-xl">Usado</Text>
                    }
                </ImageBackground>
            </TouchableOpacity>
            <Text className="text-gray-700 text-sm my-2">Tênis vermelho</Text>
            <Text className="text-gray-900 text-sm font-bold">R$ 59,90</Text>
        </View>
    )
}