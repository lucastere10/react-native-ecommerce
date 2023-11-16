import { View, Text } from "react-native"
import { styles } from "./style"
import { HomeCard } from "../../components/HomeCard"


export const Home = () => {
  return(
    <View>
        <Text>Bem vindo a Homepage</Text>
        <HomeCard />
    </View>
  )
}