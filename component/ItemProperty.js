import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import {
	StyleSheet,
	ActivityIndicator,
	SafeAreaView,
	FlatList,
	Text,
	Image,
	View,
	TouchableOpacity,
	DefaultTheme,
	Button,
	IconButton,
	Colors as PaperProvider,
} from "react-native-paper";
import "intl";
import "intl/locale-data/jsonp/en";

/**
 * La méthode affiche la liste des propriétés
 * @returns View
 * Retourne l'écran des propriétés
 */
const ItemProperty = ({ data, navigation }) => {
	/**
	 * La méthode affiche un outlined gris
	 * @returns Button
	 * Bouton outlined grey
	 */
	const ButtonGreyOutlined = () => {
		return (
			<Button
				icon='email-outline'
				mode='outlined'
				onPress={() => console.log("Pressed")}
				title='Message'
				accessibilityLabel='Ajouter la propriété aux favoris'
				color='grey'
				style={styles.ButtonGreyOutlined}
				onPress={() => navigation.navigate("Property", { data: data })}
			>
				Messages
			</Button>
		);
	};
	/**
	 * La méthode affiche un bouton outlined rouge
	 * @returns Button
	 * Bouton outlined danger
	 */
	const ButtonDangerOutlined = () => {
		return (
			<Button
				icon='heart-outline'
				mode='outlined'
				onPress={() => console.log("test")}
				title='Favoris'
				accessibilityLabel='Ajouter la propriété aux favoris'
				color='#cd0000'
				style={styles.ButtonDangerOutlined}
			>
				Favoris
			</Button>
		);
	};

	var price = new Intl.NumberFormat("fr-FR", {
		style: "currency",
		currency: "EUR",
	}).format(data.item.price);
	price = price.substr(1, price.length);

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
				<Text style={styles.price}>{price}€</Text>
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
				{/* <ButtonGreyOutlined /> */}
				<ButtonDangerOutlined />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	Text: {
		fontSize: 16,
	},
	property: {
		height: 310,
		borderWidth: 1,
		borderColor: "grey",
		borderRadius: 10,
		margin: 20,
	},
	image: {
		width: "100%",
		height: 170,
		marginBottom: 10,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	containerTitle: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginLeft: 17,
		marginRight: 17,
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
		borderWidth: 1,
		borderColor: "#cd0000",
	},
	description: {
		fontSize: 16,
		marginLeft: 17,
		marginTop: 8,
	},
	containerButton: {
		flexDirection: "row",
		justifyContent: "flex-end",
		marginTop: 0,
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
