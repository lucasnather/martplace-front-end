import { Image, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import Logo from "../../assets/logo.png"
import Avatar from "../../assets/avatar.png"
import { PencilSimpleLine } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/button";

export function Register() {
    const { navigate} = useNavigation()

    function goToLogin() {
        navigate("Login", {})
    }

    return (
        <ScrollView >
            <View className="p-5">
                <View className="items-center">
                    <Image source={Logo} className="mt-5"/>
                    <Text className="text-base-gray-1 font-bold text-[20px] mb-5">Boas Vindas</Text>
                    <Text className="text-center text-base-gray-2">Crie sua conta e use o espaço para comprar itens variados e vender seus produtos</Text>
                </View>
                
                <View >
                    <View className="items-center my-5 m-auto relative w-[100px]">
                        <Image source={Avatar}/>
                        <PencilSimpleLine size={32} color="#fff" style={{ position: "absolute", bottom: 0, right: 0, backgroundColor: "#364D9D" , borderRadius: 120}} />
                    </View>
                    <TextInput
                            placeholder="Nome"
                            className="bg-base-gray-7 p-5 rounded-xl my-3"
                    />
                    <TextInput
                            placeholder="E-mail"
                            className="bg-base-gray-7 p-5 rounded-xl my-3"
                    />
                    <TextInput
                            placeholder="Telefone"
                            className="bg-base-gray-7 p-5 rounded-xl my-3"
                    />
                    <TextInput
                            placeholder="Senha"
                            className="bg-base-gray-7 p-5 rounded-xl my-3"
                    />
                    <TextInput
                            placeholder="Confirmar Senha"
                            className="bg-base-gray-7 p-5 rounded-xl my-3"
                    />
                    <Button variant="black">
                       Criar
                    </Button>
                </View>
                <View>
                    <Text className="text-center text-base-gray-2 text-[14px] mb-5">Já tem uma conta?</Text>
                    <Button onPress={goToLogin} variant="gray">
                        Ir para o login
                    </Button>
                </View>
            </View>
        </ScrollView>
    )
}