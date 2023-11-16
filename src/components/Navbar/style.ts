import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#17181C',
        flexDirection: "row",
        alignItems: "center",
        justifyContent:'center',
        paddingTop: StatusBar.currentHeight,
        paddingBottom: 16,
        gap:16
    },
    smallContainer:{
        flexDirection:'row',
        alignItems: "center",
        justifyContent:'center',
        paddingHorizontal:4,

    },
    inputView: {
        flexDirection:'row',
        alignItems: "center",
        justifyContent:'space-between',
        paddingHorizontal:4,
        backgroundColor:'#FFFFFF',
        borderRadius:6,
        height:36,
        width:190
    },
    text:{
        fontSize:16,
        color:'#FFFFFF'
    }

});
