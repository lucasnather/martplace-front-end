import { useRef, useState } from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View, Image, TextInput, ImageBackground, Animated, Dimensions } from "react-native";
import { ArrowRight, MagnifyingGlass, Plus, Sliders, Tag, X } from "phosphor-react-native";
import AvatarHome from "../../../assets/avatar-home.png";
import { Filter } from "../../../components/filter";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../../components/button";
import { CardProduct } from "../../../components/card-product";

const { height } = Dimensions.get("window");

export function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const { navigate } = useNavigation()
    
    const animatedHeight = useRef(new Animated.Value(0)).current; 

    const toggleFilter = () => {
        const heightValue = isOpen ? 0 : height / 2; 

        Animated.timing(animatedHeight, {
            toValue: heightValue,
            duration: 300,
            useNativeDriver: false,
        }).start();

        setIsOpen(!isOpen);
    };

    
    const goToMyAnnoucement = () => {
        navigate("My Annoucement", {})
    }

    const goToCreateAnnoucement = () => {
        navigate("Create Annoucement", {})
    }

    return (
        <SafeAreaView className="flex-1">
            <ScrollView className="px-5">
                <View className="flex-row justify-between mb-10">
                    <View className="flex-row items-center gap-2">
                        <Image source={AvatarHome} />
                        <Text className="w-[100px]">Boas vindas, <Text className="font-bold">Maria!</Text></Text>
                    </View>

                    <Button 
                        variant="black"
                        onPress={goToCreateAnnoucement}
                        icon={ <Plus size={21} color="#fff"/>}    
                    >
                        Criar Anúncio
                    </Button>
                </View>

                <Text className="text-gray-500 mb-5">Seus produtos anunciados para venda </Text>

                <View className="flex-row justify-between items-center bg-blue-200 rounded-xl px-5 py-5 mb-10">
                    <View className="flex-row gap-2">
                        <Tag size={32} color="#364D9D" />
                        <View>
                            <Text className="font-bold text-lg text-gray-700">4</Text>
                            <Text className="font-bold text-xs text-gray-700">Anúncios Ativos</Text>
                        </View>
                    </View>

                    <TouchableOpacity className="flex-row items-center">
                        <Text className="text-xs text-blue-800" onPress={goToMyAnnoucement}>Meus anúncios</Text>
                        <ArrowRight size={32} color="#364D9D"/>
                    </TouchableOpacity>
                </View>

                <Text className="text-gray-500">Compre produtos variados</Text>

                <View className="flex-row items-center relative">
                    <TextInput
                        placeholder="Buscar anúncio"
                        className="bg-gray-200 p-5 rounded-xl my-5 w-full"
                    />
                    <View className="flex-row absolute right-5 gap-5">
                        <TouchableOpacity className="border-r p-1 pr-5 border-gray-400">
                            <MagnifyingGlass size={24} />
                        </TouchableOpacity>
                        <TouchableOpacity className="p-1" onPress={toggleFilter}>
                            <Sliders size={24} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View className="flex-row items-center justify-between flex-wrap w-full gap-y-10">
                    <CardProduct 
                        image={<Image source={AvatarHome} />}
                        isNewOrUsed="novo"
                    />

                    <CardProduct 
                        image={<Image source={AvatarHome} />}
                        isNewOrUsed="usado"
                    />
                    <CardProduct 
                        image={<Image source={AvatarHome} />}
                        isNewOrUsed="usado"
                    />
                </View>
            </ScrollView>

            {isOpen && (
                <Animated.View 
                    className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-lg p-10"
                    style={{ height: animatedHeight }}
                >
                    <Filter 
                        toggleFilter={toggleFilter}
                    />
                </Animated.View>
            )}
        </SafeAreaView>
    );
}
