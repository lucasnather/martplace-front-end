import { useNavigation } from "@react-navigation/native";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Logo from "../../assets/logo.png"
import { Input } from "../../components/input";

export function Login() {
    const { navigate } = useNavigation()

    function gotToRegister() {
        navigate("Register", {})
    }

    function gotToHome() {
        navigate("Main", {})
    }

    return (
        <View >
            <View className="bg-base-gray-6 rounded-b-[20px]">
                <View className="items-center mt-40">
                    <Image
                        source={Logo}
                    />
                    <Text className="mt-5 text-base-gray text-[37px] font-bold">marketplace</Text>
                    <Text className="mb-20 text-base-gray-3 text-[14px]">Seu espaço de compra e venda</Text>
                </View>
                <View className="px-10">
                    <Text className="text-center text-base-gray-2 text-[14px]">Acesse sua conta</Text>
                    <TextInput
                        placeholder="E-mail"
                        className="bg-base-gray-7 p-5 rounded-xl my-5"
                    />
                    <TextInput
                        placeholder="Senha"
                        className="bg-base-gray-7 p-5 rounded-xl"
                    />
                    <TouchableOpacity className="bg-primary-blue-light p-5 rounded-xl items-center justify-center mt-10 mb-20" onPress={gotToHome}>
                        <Text className="text-base-gray-7 font-bold">Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View className="px-10 mt-20">
                <Text className="text-center text-base-gray-2 text-[14px] mb-5">Ainda não tem acesso?</Text>
                <TouchableOpacity className="bg-base-gray-5 items-center p-5 rounded-xl" onPress={gotToRegister}>
                    <Text  className="text-base-gray-2 font-bold">Criar uma conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}