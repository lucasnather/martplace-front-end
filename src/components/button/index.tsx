import { Text, TouchableOpacity, TouchableOpacityProps, TextProps, View } from "react-native";

type ButtonVariant = "blue" | "gray" | "black"

type ButtonProps = TouchableOpacityProps  & {
    children:React.ReactNode
    variant?: ButtonVariant
    icon?: React.ReactNode
}

export function Button({ 
    children,
    variant = "blue",
    icon,
    ...props
}: ButtonProps) {
   
    const variants = {
        blue: {
            container: "bg-primary-blue-light rounded-xl p-5 items-center justify-center my-3 flex-row gap-2",
            text: "text-base-gray-7 font-bold text-[14px] ",
        },
        gray: {
            container: "bg-base-gray-5 rounded-xl p-5 items-center justify-center my-3 flex-row gap-2",
            text: "text-base-gray-2 font-bold text-[14px]",
        },
        black: {
            container: "bg-base-gray rounded-xl p-5 items-center justify-center my-3 flex-row gap-2 ",
            text: "text-base-gray-7 font-bold text-[14px]",
        },
    }

    return (
        <TouchableOpacity className={variants[variant].container} {...props}>
            {
                icon && <View>{icon}</View>
            }
            <Text  className={variants[variant].text}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}