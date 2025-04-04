import { useNavigation } from "@react-navigation/native";
import { ArrowLeft, Bank, Barcode, CreditCard, Money, QrCode, Tag } from "phosphor-react-native";
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity} from "react-native";
import Bike from "../../../assets/bike.png"
import User from "../../../assets/user-annouc.png"
import { Button } from "../../../components/button";

export function PreVisualization() {
    const { goBack } = useNavigation()

    return (
        <View>
            <ScrollView className="mb-5">
                <View className="bg-primary-blue-light h-[200px] items-center justify-center">
                    <Text className="font-bold text-base-gray-7 text-[16px] mb-2">Pré visualização do anúncio</Text>
                    <Text className="text-base-gray-7 text-[14px]">É assim que seu produto vai aparecer!</Text>
                </View>

                <Image
                    source={Bike}
                    className="w-full mb-5"
                />

                <View className="px-5">
                        <View className="mb-5 flex-row items-center gap-2 ">
                            <Image
                                source={User}
                            />
                            <Text className="text-base-gray text-[14px]">Makenna Baptista</Text>
                        </View>
                        <Text className="font-bold text-[10px] text-base-gray-2 bg-base-gray-5 p-2 rounded-full w-[50px] text-center">NOVO</Text>
                        <View>
                            <View className="flex-row items-center justify-between mb-5 mt-3">
                                <Text className="font-bold text-[20px] text-base-gray">Bicicleta</Text>
                                <Text className="font-bold text-primary-blue-light text-[20px]">R$ 120,00</Text>
                            </View>
                            <Text className="text-[14px] text-base-gray-2 mb-10">Cras congue cursus in tortor sagittis placerat nunc, tellus arcu. Vitae ante leo eget maecenas urna mattis cursus. Mauris metus amet nibh mauris mauris accumsan, euismod. Aenean leo nunc, purus iaculis in aliquam.</Text>
                            <Text className="font-bold text-base-gray-2 text-[14px] mb-5">Aceita Troca? <Text className="font-normal">Sim</Text></Text>
                        </View>
                        <View>
                            <Text className="font-bold text-[14px] text-base-gray-2 mb-2">Meios de pagamento:</Text>
                            <View>
                                <View className="flex-row items-center gap-2 mb-2">
                                    <Barcode color="#1A181B" />
                                    <Text className="text-base-gray-2 text-[14px]">Boleto</Text>
                                </View>
                                <View className="flex-row items-center gap-2 mb-2">
                                    <QrCode color="#1A181B"  />
                                    <Text className="text-base-gray-2 text-[14px]">Pix</Text>
                                </View>
                                <View className="flex-row items-center gap-2 mb-2">
                                    <Money color="#1A181B"  />
                                    <Text className="text-base-gray-2 text-[14px]">Dinheiro</Text>
                                </View>
                                <View className="flex-row items-center gap-2 mb-2">
                                    <CreditCard color="#1A181B"  />
                                    <Text className="text-base-gray-2 text-[14px]">Cartão de Crédito</Text>
                                </View>
                                <View className="flex-row items-center gap-2 mb-2">
                                    <Bank color="#1A181B"  />
                                    <Text className="text-base-gray-2 text-[14px]">Depósito Bancário</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View className="flex-row justify-between gap-5 px-5">
                        <View className="w-[50%]">
                            <Button variant="gray" icon={<ArrowLeft size={21} />} onPress={goBack}>
                                Voltar e editar
                            </Button>
                        </View>
                        <View className="w-[45%]">
                            <Button icon={<Tag color="#fff" size={21} />}>
                                Publicar
                            </Button>
                        </View>
                    </View>
            </ScrollView>
        </View>
    )
}