import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	ActivityIndicator,
	SafeAreaView,
	FlatList,
	Text,
	Image,
	View,
	TouchableOpacity,
} from "react-native";
import {
	DefaultTheme,
	Button,
	Provider as PaperProvider,
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
		return(
		<Button
			icon='email-outline'
			mode='outlined'
			onPress={() => console.log("Pressed")}
			title='Message'
			accessibilityLabel='Ajouter la propriété aux favoris'
			color='grey'
			style={styles.ButtonGreyOutlined}
			onPress={() => navigation.navigate('Property', {data: data})}
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
		return(
		<Button
			icon='heart-outline'
			mode='outlined'
			onPress={() => console.log('test')} 
			title='Favoris'
			accessibilityLabel='Ajouter la propriété aux favoris'
			color='#cd0000'
			style={styles.ButtonDangerOutlined}
		>
			Favoris
		</Button>
		)
	};

	var price = new Intl.NumberFormat("fr-FR", {
		style: "currency",
		currency: "EUR",
	}).format(data.item.price);
	price = price.substr(1, price.length);

	return (
		<View  style={styles.property}>
			<Image
				source={require("../assets/images/maison1.jpg")}
				style={styles.image}
			/>
			<View style={styles.containerTitle}>
				<Text style={styles.title}>Titre</Text>
				<Text style={styles.price}>{price}€</Text>
			</View>
			<Text style={styles.description}>Description courte</Text>
			<View style={styles.containerButton}>
				<Button onPress={() => navigation.navigate('Property', {data: data})}>Détail</Button>
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
	},
	price: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#157347",
	},
	description: {
		fontSize: 16,
		fontWeight: "bold",
		marginLeft: 17,
		marginTop: 8,
	},
	containerButton: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 20,
		marginLeft: 17,
		marginRight: 17,
	},
	ButtonDangerOutlined: {
		borderColor: "#cd0000",
		color: "#cd0000",
		borderWidth: 1,
		borderRadius: 5,
		width: "47%",
	},
	ButtonGreyOutlined: {
		borderColor: "grey",
		color: "grey",
		borderWidth: 1,
		borderRadius: 5,
		width: "47%",
	},
});

export default ItemProperty;
