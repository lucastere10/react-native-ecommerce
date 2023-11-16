import { Image, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";
import { Home } from "../../screens/Home";
import { Products } from "../../screens/Products";
import { Cart } from "../../screens/Cart";
import { Favorites } from "../../screens/Favorites";
import { Profile } from "../../screens/Profile";


const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabParamList = {
    Home: undefined;
    Products: undefined;
    Cart: undefined;
    Favorites: undefined;
    Profile: undefined;
};

export const TabRoutes = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: "#202126",
                        height: 75,
                    },
                }}>
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{
                                height: 75,
                                width: 50,
                                justifyContent: "center",
                                alignItems: "center",
                                borderTopWidth: focused ? 4 : 0,
                                borderTopColor: "#FFD700"
                            }}>
                                <AntDesign name="tag" size={32} color={focused ? "#FFD700" : "#D4D3D9"} />
                            </View>
                        )
                    }}
                />
                <Tab.Screen
                    name="Products"
                    component={Products}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{
                                height: 75,
                                width: 50,
                                justifyContent: "center",
                                alignItems: "center",
                                borderTopWidth: focused ? 4 : 0,
                                borderTopColor: "#FFD700"
                            }}>
                                <Feather name="shopping-bag" size={32} color={focused ? "#FFD700" : "#D4D3D9"} />
                            </View>
                        ),
                    }}

                />
                <Tab.Screen
                    name="Cart"
                    component={Cart}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{
                                height: 75,
                                width: 50,
                                justifyContent: "center",
                                alignItems: "center",
                                borderTopWidth: focused ? 4 : 0,
                                borderTopColor: "#FFD700"
                            }}>
                                <Ionicons name="cart" size={32} color={focused ? "#FFD700" : "#D4D3D9"} />
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Favorites"
                    component={Favorites}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{
                                height: 75,
                                width: 50,
                                justifyContent: "center",
                                alignItems: "center",
                                borderTopWidth: focused ? 4 : 0,
                                borderTopColor: "#FFD700"
                            }}>
                                <AntDesign name="heart" size={32} color={focused ? "#FFD700" : "#D4D3D9"} />
                            </View>),
                    }}

                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{
                                height: 75,
                                width: 50,
                                justifyContent: "center",
                                alignItems: "center",
                                borderTopWidth: focused ? 4 : 0,
                                borderTopColor: "#FFD700"
                            }}>
                                <Ionicons name="person" size={32} color={focused ? "#FFD700" : "#D4D3D9"} />
                            </View>

                        ),
                    }}

                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}