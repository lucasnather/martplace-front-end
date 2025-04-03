import { X } from "phosphor-react-native";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox"

type FilterProps = {
    toggleFilter: () => void
}

export function Filter({ toggleFilter }: FilterProps) {
    
    return (
        <ScrollView>
            <View className="flex-row justify-between items-center">
                <Text className="text-lg text-gray-800">Filtrar anúncios</Text>
                    <TouchableOpacity onPress={toggleFilter}>
                         <X size={32}/>
                    </TouchableOpacity>
            </View>

            <View>
                <Text>Condição</Text>

                <View>
                    <View>
                        <Text>Novo</Text>
                        <X size={16}/>
                    </View>
                    <View>
                        <Text>usado</Text>
                        <X size={16}/>
                    </View>
                </View>
            </View>

            <View>
                <Text>Aceita troca?</Text>
                <Switch />
            </View>

            <View>
                <Text>Meios de pagamentos aceitos</Text>

                <View>
                    <View>
                        <BouncyCheckbox />
                        <Text>Boleto</Text>
                    </View>
                    <View>
                        <BouncyCheckbox />
                        <Text>Pix</Text>
                    </View>
                    <View>
                        <BouncyCheckbox />
                        <Text>Dinheiro</Text>
                    </View>
                    <View>
                        <BouncyCheckbox />
                        <Text>Cartão de Crédito</Text>
                    </View>
                    <View>
                        <BouncyCheckbox />
                        <Text>Depósito Bancário</Text>
                    </View>
                </View>
            </View>

            <View>
                <TouchableOpacity>
                    <Text>Resetar Filtros</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity>
                    <Text>Aplicar Filtros</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}