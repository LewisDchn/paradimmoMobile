import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";

const Home = () => {
	return (
		<View style={styles.baseContainer}>
			<Image
				style={styles.logo}
				source={require("../assets/images/logo-text.png")}
			/>
			<View style={[styles.container]}>
				<View style={styles.quotes}></View>
				<View style={[styles.firstContainer, { flexDirection: "row" }]}>
					<View style={styles.opinion}>
						<Text style={styles.textOpinion}>Avis clients</Text>
					</View>
					<View style={styles.recentEmail}>
						{/* <Tab.Screen name="Messagerie" component={textRecentEmail} options={{ tabBarBadge: 3 }} /> */}
						<Text style={styles.textRecentEmail}>Derniers E-mails</Text>
					</View>
				</View>
				<View style={[styles.scdContainer, { flexDirection: "row" }]}>
					<View style={styles.rdvCalendar}>
						<CalendarList
							// Initially visible month. Default = Date()
							current
							// Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
							minDate={"2020-05-10"}
							// Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
							maxDate={"2025-05-30"}
							// Handler which gets executed on day press. Default = undefined
							onDayPress={(day) => {
								console.log("selected day", day);
							}}
							// Handler which gets executed on day long press. Default = undefined
							onDayLongPress={(day) => {
								console.log("selected day", day);
							}}
							// Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
							monthFormat={"MMMM yyyy"}
							// Handler which gets executed when visible month changes in calendar. Default = undefined
							onMonthChange={(month) => {
								console.log("month changed", month);
							}}
							// Hide month navigation arrows. Default = false
							hideArrows={true}
							// Replace default arrows with custom ones (direction can be 'left' or 'right')
							renderArrow={(direction) => <Arrow />}
							// Do not show days of other months in month page. Default = false
							hideExtraDays={false}
							// If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
							// day from another month that is visible in calendar page. Default = false
							disableMonthChange={false}
							// If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
							firstDay={1}
							// Hide day names. Default = false
							hideDayNames={false}
							// Show week numbers to the left. Default = false
							showWeekNumbers={false}
							// Handler which gets executed when press arrow icon left. It receive a callback can go back month
							onPressArrowLeft={(subtractMonth) => subtractMonth()}
							// Handler which gets executed when press arrow icon right. It receive a callback can go next month
							onPressArrowRight={(addMonth) => addMonth()}
							// Disable left arrow. Default = false
							disableArrowLeft={false}
							// Disable right arrow. Default = false
							disableArrowRight={false}
							// Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
							disableAllTouchEventsForDisabledDays={true}
							// Replace default month and year title with custom one. the function receive a date as parameter.
							// renderHeader={(date) => {/*Return JSX*/ }}
							// Enable the option to swipe between months. Default = false
							enableSwipeMonths={false}
							// Activer le défilement horizontal, default = false
							horizontal={true}
							// Activer la pagination sur horizontal, default = false
							pagingEnabled={true}
							calendarWidth={340}
							calendarHeight={300}
							// Enable or disable scrolling of calendar list
							scrollEnabled={true}
							// Enable or disable vertical scroll indicator. Default = false
							showScrollIndicator={true}
							// Max amount of months allowed to scroll to the past. Default = 50
							pastScrollRange={24}
							// Max amount of months allowed to scroll to the future. Default = 50
							futureScrollRange={24}
						/>
					</View>
				</View>
			</View>
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
		minHeight: "75%",
		backgroundColor: "#fff",
		borderRadius: 30,
	},
	firstContainer: {
		height: "30%",
	},
	opinion: {
		flex: 0.5,
		backgroundColor: "#f5f5f5",
		shadowColor: "black",
		// height: '25%',
		borderRadius: 30,
		margin: 20,
	},
	recentEmail: {
		flex: 0.5,
		backgroundColor: "#30a25e",
		shadowColor: "black",
		// height: '25%',
		borderRadius: 30,
		margin: 20,
	},
	textRecentEmail: {
		alignSelf: "center",
		marginTop: 10,
		color: "#fff",
		fontWeight: "bold",
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
	rdvCalendar: {
		flex: 1,
		// backgroundColor: '#30a25e',
		shadowColor: "black",
		// height: '75%',
		borderRadius: 30,
		// margin: 20,
	},
});
export default Home;
