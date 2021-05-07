import React from "react";
import {
	StyleSheet,
	View,
	Text,
	Image,
	ScrollView,
	StatusBar,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Calendar, Agenda, LocaleConfig } from "react-native-calendars";

const Home = () => {
	LocaleConfig.locales["fr"] = {
		monthNames: [
			"Janvier",
			"Février",
			"Mars",
			"Avril",
			"Mai",
			"Juin",
			"Juillet",
			"Août",
			"Septembre",
			"Octobre",
			"Novembre",
			"Décembre",
		],
		monthNamesShort: [
			"Janv.",
			"Févr.",
			"Mars",
			"Avril",
			"Mai",
			"Juin",
			"Juil.",
			"Août",
			"Sept.",
			"Oct.",
			"Nov.",
			"Déc.",
		],
		dayNames: [
			"Lundi",
			"Mardi",
			"Mercredi",
			"Jeudi",
			"Vendredi",
			"Samedi",
			"Dimanche",
		],
		dayNamesShort: ["Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam.", "Dim."],
		today: "Aujourd'hui",
	};
	LocaleConfig.defaultLocale = "fr";
	return (
		<View style={styles.baseContainer}>
			<Image
				style={styles.logo}
				source={require("../assets/images/logo-text.png")}
			/>
			<ScrollView style={styles.container}>
				<View style={[styles.quotes, { flexDirection: "row" }]}>
					<FontAwesome name='quote-left' size={20} color='black' />
					<Text style={styles.textQuotes}>
						Tout est possible à qui ose, travail et n'abandonne jamais. -Xavier
						Dolan-
					</Text>
					{/* <Text style={styles.autorsQuotes}>-Xavier Dolan-</Text> */}
					<FontAwesome name='quote-right' size={20} color='black' />
				</View>
				<View
					style={{
						backgroundColor: "#b6c1cd",
						width: "90%",
						height: 2,
						alignSelf: "center",
						marginTop: 15,
					}}
				></View>
				<View style={[styles.firstContainer, { flexDirection: "row" }]}>
					<View style={styles.opinion}>
						<Text style={styles.textOpinion}>Avis clients</Text>
					</View>
					<View style={styles.recentEmail}>
						<Text style={styles.textRecentEmail}>Derniers E-mails</Text>
						<FontAwesome
							style={styles.logoEmail}
							name='envelope'
							size={24}
							color='white'
						/>
					</View>
				</View>
				<View style={[styles.scdContainer, { flexDirection: "row" }]}>
					<View style={styles.Calendar}></View>
				</View>
				<View style={[styles.thirdContainer, { flexDirection: "row" }]}>
					<View style={styles.rdv}>
						<View style={styles.firstRdv}>
							<Text style={styles.textRdv}>Prochain RDV</Text>
						</View>
					</View>
					<View style={styles.recentEmail}>
						{/* <Tab.Screen name="Messagerie" component={textRecentEmail} options={{ tabBarBadge: 3 }} /> */}
						<Text style={styles.textRecentEmail}>Derniers E-mails</Text>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	baseContainer: {
		backgroundColor: "#157347",
		flex: 1,
		padding: 15,
	},
	logo: {
		alignSelf: "center",
		width: 100,
		height: 100,
		marginTop: 20,
	},
	container: {
		// minHeight: '75%',
		backgroundColor: "#fff",
		borderRadius: 30,
		resizeMode: "cover",
	},
	quotes: {
		marginTop: 20,
		alignSelf: "center",
	},
	textQuotes: {
		flex: 0.8,
		alignItems: "center",
	},
	firstContainer: {
		height: 200,
		resizeMode: "cover",
	},
	opinion: {
		flex: 0.5,
		backgroundColor: "#f5f5f5",
		shadowColor: "black",
		// height: '25%',
		borderRadius: 30,
		margin: 10,
		resizeMode: "cover",
		overflow: "hidden",
	},
	recentEmail: {
		flexDirection: "row",
		flex: 0.5,
		backgroundColor: "#30a25e",
		shadowColor: "black",
		// height: '25%',
		borderRadius: 30,
		margin: 10,
	},
	textRecentEmail: {
		alignSelf: "center",
		marginTop: 10,
		color: "#fff",
		fontWeight: "bold",
	},
	logoEmail: {
		textAlignVertical: "bottom",
		alignSelf: "flex-end",
		// position:'absolute'
	},
	numberMail: {
		alignSelf: "flex-end",
		position: "absolute",
	},
	textOpinion: {
		alignSelf: "center",
		marginTop: 10,
		fontWeight: "bold",
	},
	scdContainer: {
		// height: '20%'
	},
	Calendar: {
		flex: 1,
		alignSelf: "center",
		// backgroundColor: '#30a25e',
		shadowColor: "black",
		// height: '75%',
		borderRadius: 30,
		// margin: 20,
	},
	thirdContainer: {
		marginTop: 30,
		height: 200,
	},
	rdv: {
		flex: 0.5,
		backgroundColor: "#f5f5f5",
		shadowColor: "black",
		// height: '25%',
		borderRadius: 30,
		margin: 10,
		resizeMode: "cover",
		overflow: "hidden",
	},
	firstRdv: {
		height: "40%",
		backgroundColor: "#30a25e",
		borderRadius: 30,
		borderBottomRightRadius: 0,
	},
	textRdv: {
		alignSelf: "center",
		marginTop: 10,
		color: "#fff",
		fontWeight: "bold",
	},
});
export default Home;
