import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native"
import { styles } from "./style"
import { getItemList } from "../../services/api/api";

let numerosSorteados = [];
while(numerosSorteados.length < 5) {
    let numero = Math.floor(Math.random() * 15) + 1;
    if(numerosSorteados.indexOf(numero) === -1) {
        numerosSorteados.push(numero);
    }
}
console.log(numerosSorteados);


export interface ItemListProps {
      id: number;
      title: string;
      price: number;
      description: string;
      category: string;
      image: string;
      rating: number[] | any;
}

export interface ItemProps {
  item: ItemListProps
}

export const HomeCard = ({item}:ItemProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={getItemList}>
        <View style={styles.button}></View>      
        <Text></Text> 
      </TouchableOpacity>
    </View>
  )
}
