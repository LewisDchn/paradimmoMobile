import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./component/home";
import Propertys from "./component/Propertys";
import Navigator from "./component/navigator";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import createNavigationProperty from "./component/navigator";


/**
 * Navbar - barre de navigation
 */
const Tab = createBottomTabNavigator();

/**
 * Thème de l'application
 */
const theme = {
	...DefaultTheme,
	roundness: 2,
	colors: {
		...DefaultTheme.colors,
		primary: "#157347",
		accent: "#EFA30A",
	},
};

/**
 * CSS Styles
 */
const styles = StyleSheet.create({
	baseContainer: {
		backgroundColor: "#157347",
		flex: 1,
		padding: 15,
	},
	homeNav: {
		paddingBottom: "10px",
	},
});

export default function App() {
	return (
		<PaperProvider theme={theme}>
			<NavigationContainer
				tabBarOptions={{
					style: {
						backgroundColor: "white",
						height: 55,
						paddingTop: 10,
						paddingBottom: 5,
					},
				}}
			>
				<Tab.Navigator
					screenOptions={({ route }) => ({
						tabBarIcon: ({ focused, color, size }) => {
							let iconName;

							if (route.name === "Accueil") {
								iconName = focused ? "home" : "home-outline";
							} else if (route.name === "Annonces") {
								iconName = focused ? "search" : "search-outline";
							}

							// You can return any component that you like here!
							return <Ionicons name={iconName} size={size} color={color} />;
						},
					})}
					tabBarOptions={{
						activeTintColor: "#157347",
						inactiveTintColor: "gray",
						labelStyle: {
							fontSize: 14,
							fontWeight: "bold",
							marginTop: 5,
						},
						style: {
							backgroundColor: "white",
							height: 55,
							paddingTop: 10,
							paddingBottom: 5,
						},
					}}
				>
					<Tab.Screen name='Accueil' component={HomeScreen} />
					<Tab.Screen name='Annonces' component={Navigator}  options={{ tabBarBadge: "5" }}/>
				</Tab.Navigator>
			</NavigationContainer>
		</PaperProvider>
	);
}
