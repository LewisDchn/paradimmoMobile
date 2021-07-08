import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	FlatList,
	View,
} from "react-native";
import ItemProperty from "./ItemProperty";

/**
 * La méthode affiche la vue des propriétés
 * @returns View
 * Retourne la vue de l'écran contenant toutes les propriétés
 */
const Properties = ({ navigation }) => {
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
	}, []);

	return (
		<View style={styles.baseContainer}>
			<View style={styles.container}>
				<FlatList
					data={dataPropertys}
					renderItem={(item) => (
						<ItemProperty data={item} navigation={navigation} />
					)}
					keyExtractor={(item) => item.id.toString()}
				/>
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
