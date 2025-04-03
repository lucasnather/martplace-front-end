import { useNavigation } from "@react-navigation/native";
import { ArrowLeft, Bank, Barcode, Money, Power, QrCode, Trash, WhatsappLogo } from "phosphor-react-native";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Bike from "../../../assets/bike.png"
import User from "../../../assets/user-annouc.png"

export function UpdateAnnoucements() {
    const { goBack } = useNavigation()

    const navigateToBack = () => {
        goBack()
    }

    return (
            <SafeAreaView>
                <ScrollView>
                    <TouchableOpacity onPress={navigateToBack} className="px-5">
                        <ArrowLeft size={30}/>
                    </TouchableOpacity>
                    <View className="w-full my-10 bg-primary-blue">
                        <Image source={Bike} className="w-full" />
                    </View>

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
                                    <Bank color="#1A181B"  />
                                    <Text className="text-base-gray-2 text-[14px]">Depósito Bancário</Text>
                                </View>
                            </View>
                        </View>

                        <TouchableOpacity className="flex-row items-center gap-2 bg-base-gray rounded-[6px] mt-5 mb-2 justify-center">
                            <Power color="#F7F7F8" />
                            <Text className="font-bold text-base-gray-7 py-5">Desativar anúncio</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex-row items-center gap-2 rounded-[6px]  bg-base-gray-5 justify-center">
                            <Trash />
                            <Text className="font-bold text-base-gray-2 py-5">Excluir anúncio</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>

    )
}