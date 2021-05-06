import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import Icon from "react-native-ionicons";

const Properties = () => {
	return (
		<View style={styles.baseContainer}>
			<View style={styles.container}></View>
		</View>
	);
};

const styles = StyleSheet.create({
	baseContainer: {
		backgroundColor: "#157347",
		flex: 1,
		paddingTop: 8,
		paddingLeft: 8,
		paddingRight: 8,
	},
	container: {
		flexDirection: "row",
		minHeight: "97%",
		backgroundColor: "#fff",
		borderRadius: 30,
	},
});
export default Properties;
