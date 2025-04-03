import { X } from "phosphor-react-native";
import { useState } from "react";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox"

type FilterProps = {
    toggleFilter: () => void
}

export function Filter({ toggleFilter }: FilterProps) {
    const [isEnabled, setIsEnabled] = useState(false)
    const toggleSwitch = () => setIsEnabled(previousState => !previousState)

    return (
        <ScrollView>
            <View className="flex-row justify-between items-center">
                <Text className="text-[20px] text-gray-800 font-bold mb-5">Filtrar anúncios</Text>
                    <TouchableOpacity onPress={toggleFilter}>
                         <X size={32}/>
                    </TouchableOpacity>
            </View>

            <View>
                <Text className="text-base-gray-2 font-bold text-[14px] mb-2">Condição</Text>

                <View className="flex-row gap-10 mb-5">
                    <View className="bg-primary-blue flex-row items-center gap-5 py-[6px] px-[16px] rounded-full">
                        <Text className="text-base-gray-7">Novo</Text>
                        <X size={16} color="#fff"/>
                    </View>
                    <View className="bg-base-gray-5 flex-row items-center gap-5 py-[6px] px-[16px] rounded-full">
                        <Text className="text-base-gray-3 font-bold">usado</Text>
                    </View>
                </View>
            </View>

            <View className="mb-5">
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

            <View className="flex-row gap-5">
                <View>
                    <TouchableOpacity className="bg-base-gray-5 rounded-md py-[12px] px-[30px]">
                        <Text className="text-base-gray-2 text-[14px] font-bold">Resetar Filtros</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity className="bg-base-gray rounded-md py-[12px] px-[30px]">
                        <Text className="text-base-gray-7 text-[14px] font-bold">Aplicar Filtros</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}