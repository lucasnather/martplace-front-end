import { X } from "phosphor-react-native";
import { useState } from "react";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
import { Button } from "../button";
import { CheckBox } from "../checkbox";

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
            
                    <CheckBox title="Boleto" />
                    <CheckBox title="Pix" />
                    <CheckBox title="Dinheiro" />
                    <CheckBox title="Cartão de Crédito" />
                    <CheckBox title="Depósito Bancário" />
                </View>
            </View>

            <View className="flex-row gap-5">
                <View className="w-[50%]">
                    <Button variant="gray" >
                        Resetar Filtros
                    </Button>
                </View>
                <View className="w-[45%]">
                    <Button variant="black">
                        Aplicar Filtros
                    </Button>
                </View>
            </View>
        </ScrollView>
    )
}