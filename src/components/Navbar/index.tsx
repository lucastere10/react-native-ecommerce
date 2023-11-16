import { View, Text, TextInput } from "react-native"
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { styles } from "./style";

export const Navbar = () => {

    const handleEnterPress = () => {
        console.log('Enter key pressed');
      };

    return (
        <View style={styles.container}>
            <View style={styles.smallContainer}>
                <Text style={styles.text}>Sort</Text>
                <MaterialIcons name="keyboard-arrow-down" size={28} color="#FFFFFF" />
            </View>
            <View style={styles.inputView}>
                <TextInput onSubmitEditing={handleEnterPress} placeholder="Procurar..." ></TextInput>
                <Entypo name="magnifying-glass" size={24} color="black" />

            </View>
            <View style={styles.smallContainer}>
                <Text style={styles.text}>Filter</Text>
                <MaterialIcons name="keyboard-arrow-down" size={28} color="#FFFFFF" />
            </View>
        </View>
    )
}