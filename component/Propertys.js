import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	ActivityIndicator,
	SafeAreaView,
	FlatList,
	Text,
	Image,
	View,
	ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import ItemProperty from "./ItemProperty";

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
		danger: "#cd0000",
	},
};

/**
 * La méthode affiche la vue des propriétés
 * @returns View
 * Retourne la vue de l'écran contenant toutes les propriétés
 */
const Properties = () => {
	const [isLoading, setLoading] = useState(true);
	const [dataPropertys, setData] = useState([]);

	useEffect(() => {
		fetch("http://no.api.paradimmo.manusien-ecolelamanu.fr/public/property", {
			method: "GET",
			headers: {
				Accept: "application/json",
				"content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((json) => setData(json))
			.catch((error) => console.error(error))
			.finally(() => setLoading(false));
	});

	/**
	 * La méthode affiche la liste de toutes les propriétés
	 * @returns View
	 * Retourne la list des propriétés
	 */
	const ListPropertys = () => {
		return (
			<View>
				<FlatList
					data={dataPropertys}
					renderItem={(item) => <ItemProperty data={item} />}
					keyExtractor={(item) => item.id.toString()}
					contentContainerStyle={{
						flexGrow: 1,
					}}
				/>
			</View>
		);
	};

	return (
		<View style={styles.baseContainer}>
			<View style={styles.container}>
				<ListPropertys />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	Text: {
		fontSize: 16,
	},
	baseContainer: {
		//flex: 1,
		backgroundColor: "#157347",
		paddingLeft: 8,
		paddingRight: 8,
	},
	container: {
		height: "100%",
		backgroundColor: "#fff",
		marginTop: 25,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	listPropertys: {
		backgroundColor: "white",
	},
});
export default Properties;
