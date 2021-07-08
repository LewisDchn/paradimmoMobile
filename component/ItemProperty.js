import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import {
	Button,
	IconButton,
	Colors as PaperProvider,
} from "react-native-paper";
import "intl";
import "intl/locale-data/jsonp/en";
import Price from "./Price";

/**
 * La méthode affiche la liste des propriétés
 * @returns View
 * Retourne l'écran des propriétés
 */
const ItemProperty = ({ data, navigation }) => {
	const [favoris, setFavoris] = useState();
	/**
	 * Constructeur
	 */
	useEffect(() => {
		// setter de ma variable
		setFavoris(false);
		// pour un onClose() : faire un return
	}, []);

	// fonction
	const addFavoris = () => {
		favoris ? setFavoris(false) : setFavoris(true);
	};

	return (
		<View style={styles.property}>
			<Image
				source={require("../assets/images/maison1.jpg")}
				style={styles.image}
			/>
			<View style={styles.containerTitle}>
				<Text numberOfLines={2} style={styles.title}>
					Maison incroyablement belle toute équipée
				</Text>
				<Text style={styles.price}>
					<Price data={data.item.price} />
				</Text>
			</View>
			<Text numberOfLines={2} style={styles.description}>
				Maison spacieuse et lumineuse dans un quartier tranquille, loin de toute
				nuisance sonores. L'ensemble des comodités se trouve dans un rayon de
				1km.
			</Text>
			<View style={styles.containerButton}>
				<Button onPress={() => navigation.navigate("Property", { data: data })}>
					Détail
				</Button>
				<IconButton
					icon={favoris ? "heart" : "heart-outline"}
					title='Favoris'
					color='#cd0000'
					size={20}
					accessibilityLabel='Ajouter la propriété aux favoris'
					onPress={() => addFavoris()}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	Text: {
		fontSize: 16,
	},
	property: {
		height: 340,
		borderWidth: 1,
		borderColor: "grey",
		borderRadius: 10,
		margin: 20,
	},
	image: {
		width: "100%",
		height: 170,
		marginBottom: 20,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	containerTitle: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginLeft: 17,
		marginRight: 17,
		marginBottom: 7,
	},
	title: {
		fontSize: 16,
		maxWidth: "70%",
		fontWeight: "bold",
	},
	price: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#157347",
	},
	description: {
		fontSize: 16,
		marginLeft: 17,
		marginTop: 8,
	},
	containerButton: {
		flexDirection: "row",
		justifyContent: "flex-end",
		marginTop: 5,
		marginLeft: 17,
		marginRight: 17,
	},
	ButtonFavoris: {
		width: "auto",
	},
	ButtonMessage: {
		width: "auto",
	},
});

export default ItemProperty;
