import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "phosphor-react-native";
import { useState } from "react";
import { SafeAreaView, ScrollView, Switch, Text, TextInput, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox"

export function CreateAnnoucement() {
    const { goBack } = useNavigation()
    const [isEnabled, setIsEnabled] = useState(false)
    const toggleSwitch = () => setIsEnabled(previousState => !previousState)

    const navigateToBack = () => {
        goBack()
    }

    return (
        <SafeAreaView>
            <ScrollView className="px-5">
                <View className="flex-row items-center justify-between w-[65%] mb-7">
                    <TouchableOpacity onPress={navigateToBack}>
                        <ArrowLeft />
                    </TouchableOpacity>
                    <Text className="font-bold text-[20px] text-base-gray">Criar anúncio</Text>
                </View>

                <View>
                    <Text className="font-bold text-[16px] mb-3 text-base-gray-2">Imagens</Text>
                    <Text className="text-base-gray-2 text-[14px]">Escolha até 3 imagens para mostrar o quando o seu produto é incrível!</Text>
                </View>

                <View>
                    <Text className="font-bold text-base-gray-2 text-[16px] mt-5">Sobre o produto</Text>

                    <TextInput 
                        className="bg-base-gray-7 rounded-[6px] my-5 p-5 placeholder:text-base-gray-4" 
                        placeholder="Título do anúncio"
                    />
                    <TextInput 
                        className="bg-base-gray-7 rounded-[6px] my-5 p-5 placeholder:text-base-gray-4 h-[150px]" 
                        multiline={true}
                        placeholder="Descrição do produto"
                    />

                    <View className="flex-row gap-4 w-full">
                        <View className="flex-row items-center">
                            <View>
                                <BouncyCheckbox 
                                    fillColor="#3E3A40"
                                />
                            </View>
                            <Text>Produto novo</Text>
                        </View>
                        <View className="flex-row items-center">
                            <View>
                                <BouncyCheckbox 
                                    fillColor="#3E3A40"
                                />
                            </View>
                            <Text>Produto usado</Text>
                        </View>
                    </View>

                    <Text className="font-bold text-[16px] text-base-gray-2 my-3">Venda</Text>
                    <TextInput 
                        className="bg-base-gray-7 rounded-[6px] my-5 p-5 placeholder:text-base-gray-4" 
                        placeholder="Valor do produto"
                        defaultValue="R$ "
                    />

                    <View className="my-5">
                        <Text className="font-bold text-base-gray-2 mb-2">Aceita troca?</Text>
                        <Switch 
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            trackColor={{false: '#767577', true: '#364D9D'}}
                        />
                    </View>

                    <View>
                        <Text className="text-base-gray-2 font-bold mb-5">Meios de pagamentos aceitos</Text>

                        <View className="mb-10">
                            <View className="flex-row mb-2">
                                <BouncyCheckbox 
                                    fillColor="#364D9D"
                                />
                                <Text className="text-[16px] text-base-gray-2">Boleto</Text>
                            </View>
                            <View className="flex-row mb-2">
                                <BouncyCheckbox 
                                    fillColor="#364D9D"
                                />
                                <Text className="text-[16px] text-base-gray-2">Pix</Text>
                            </View>
                            <View className="flex-row mb-2">
                                <BouncyCheckbox 
                                    fillColor="#364D9D"
                                />
                                <Text className="text-[16px] text-base-gray-2">Dinheiro</Text>
                            </View>
                            <View className="flex-row mb-2">
                                <BouncyCheckbox 
                                    fillColor="#364D9D"
                                />
                                <Text className="text-[16px] text-base-gray-2">Cartão de Crédito</Text>
                            </View>
                            <View className="flex-row mb-2">
                                <BouncyCheckbox 
                                    fillColor="#364D9D"
                                />
                                <Text className="text-[16px] text-base-gray-2">Depósito Bancário</Text>
                            </View>
                        </View>
                    </View>

                    <View className="flex-row justify-between gap-5">
                        <View className="w-[50%]">
                            <TouchableOpacity className="bg-base-gray-5 rounded-md py-[12px] px-[30px]">
                                <Text className="text-base-gray-2 text-center text-[14px] font-bold">Resetar Filtros</Text>
                            </TouchableOpacity>
                        </View>
                        <View className="w-[45%]">
                            <TouchableOpacity className="bg-base-gray rounded-md py-[12px] px-[30px]">
                                <Text className="text-base-gray-7 text-center  text-[14px] font-bold">Aplicar Filtros</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}