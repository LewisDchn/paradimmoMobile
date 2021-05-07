import React from 'react';
import { StyleSheet,View, Text, Image, ScrollView, StatusBar } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";

const Home = () => {
    return (
        <View style={styles.baseContainer}>
            <Image style={styles.logo} source={require('../assets/logo-text.png')} />
            <ScrollView style={[styles.container]}>
                <View style={styles.quotes}>

                </View>
                <View style={[styles.firstContainer, { flexDirection: 'row' }]}>
                    <View style={styles.opinion}>
                        <Text style={styles.textOpinion}>Avis clients</Text>
                    </View>
                    <View style={styles.recentEmail}>
                        {/* <Tab.Screen name="Messagerie" component={textRecentEmail} options={{ tabBarBadge: 3 }} /> */}
                        <Text style={styles.textRecentEmail}>Derniers E-mails</Text>
                    </View>
                </View>
                <View style={[styles.scdContainer, { flexDirection: 'row' }]}>
                    <View style={styles.Calendar}>
                        <Calendar
                            style={{
                                borderRadius: 30,
                                height: 325
                            }}
                            theme={{
                                // backgroundColor: '#ffffff',
                                calendarBackground: '#f5f5f5',
                                textSectionTitleColor: '#b6c1cd',
                                textSectionTitleDisabledColor: '#d9e1e8',
                                selectedDayBackgroundColor: '#30a25e',
                                selectedDayTextColor: '#30a25e',
                                todayTextColor: '#30a25e',
                                dayTextColor: '#2d4150',
                                textDisabledColor: '#d9e1e8',
                                dotColor: '#30a25e',
                                selectedDotColor: '#30a25e',
                                arrowColor: '#157347',
                                disabledArrowColor: '#d9e1e8',
                                monthTextColor: '#157347',
                                indicatorColor: '#157347',
                                textDayFontFamily: 'monospace',
                                textMonthFontFamily: 'monospace',
                                textDayHeaderFontFamily: 'monospace',
                                textDayFontWeight: '300',
                                textMonthFontWeight: 'bold',
                                textDayHeaderFontWeight: '300',
                                textDayFontSize: 16,
                                textMonthFontSize: 16,
                                textDayHeaderFontSize: 16,
                                'stylesheet.calendar.header': {
                                    week: {
                                      marginTop: 0,
                                      flexDirection: 'row',
                                      justifyContent: 'space-between'
                                    }
                                  }
                            }}
                            markedDates={{
                                'dateString': {selected: true, marked: false, selectedColor: 'green'},
                                '2021-05-17': {marked: true},
                                '2021-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
                                '2021-05-19': {disabled: true, disableTouchEvent: true}
                              }}
                              
                            // Mois visible initialement. Valeur par défaut = Date ()
                            current
                            // Date minimum pouvant être sélectionnée, les dates antérieures à minDate seront grisées. Par défaut = undefined
                            minDate={'2020-01-01'}
                            // Date maximum pouvant être sélectionnée, les dates après maxDate seront grisées. Default = undefined
                            maxDate={'2023-01-01'}
                            // Handler which gets executed on day press. Default = undefined
                            onDayPress={(day) => { console.log('selected day', day) }}
                            // Handler which gets executed on day long press. Default = undefined
                            onDayLongPress={(day) => { console.log('long selected day', day) }}
                            // Format du mois dans le titre du calendrier. Mise en forme des valeurs: http://arshaw.com/xdate/#Formatting
                            monthFormat={'MMMM yyyy'}
                            // Gestionnaire qui est exécuté lorsque le mois visible change dans le calendrier.
                            onMonthChange={(month) => { console.log('month changed', month) }}
                            
                            // Cacher les flèches de navigation du mois. Default = false 
                           /* hideArrows={false}
                            // Remplace les flèches par défaut par des flèches personnalisées (la direction peut être 'gauche' ou 'droite')
                            // renderArrow={(direction) => (<Arrow />)}
                            // Ne pas afficher les jours des autres mois dans la page du mois. Default = false
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
                            onPressArrowLeft={subtractMonth => subtractMonth()}
                            // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                            onPressArrowRight={addMonth => addMonth()}
                            // Disable left arrow. Default = false
                            disableArrowLeft={false}
                            // Disable right arrow. Default = false
                            disableArrowRight={false}
                            // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
                            disableAllTouchEventsForDisabledDays={false}
                            // Replace default month and year title with custom one. the function receive a date as parameter.
                            // renderHeader={(date) => {/*Return JSX }}
                            // Enable the option to swipe between months. Default = false
                            enableSwipeMonths={false}
                            // Activer le défilement horizontal, default = false 
                            horizontal={false}
                            // Activer la pagination sur horizontal, default = false 
                            pagingEnabled={false}
                            // calendarWidth={340}
                            calendarHeight={300}
                            // Enable or disable scrolling of calendar list
                            scrollEnabled={false}
                            // Enable or disable vertical scroll indicator. Default = false
                            showScrollIndicator={false}
                            // Max amount of months allowed to scroll to the past. Default = 50
                            pastScrollRange={24}
                            // Max amount of months allowed to scroll to the future. Default = 50
                            futureScrollRange={24}
*/
                        />
                    </View>
                </View>
                <View style={[styles.firstContainer, { flexDirection: 'row' }]}>
                    <View style={styles.opinion}>
                        <Text style={styles.textOpinion}>Avis clients</Text>
                    </View>
                    <View style={styles.recentEmail}>
                        {/* <Tab.Screen name="Messagerie" component={textRecentEmail} options={{ tabBarBadge: 3 }} /> */}
                        <Text style={styles.textRecentEmail}>Derniers E-mails</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
// LocaleConfig.defaultLocale= 'fr' ;
const styles = StyleSheet.create({
    baseContainer: {
        backgroundColor: '#157347',
        flex: 1,
        padding: 15,
    },
    logo: {
        alignSelf: 'center',
        width: 100,
        height: 100,
        marginTop: 20
    },
    container: {
        // minHeight: '75%',
        backgroundColor: '#fff',
        borderRadius: 30,
    },
    firstContainer: {
        height: 180,
        marginTop: "auto"
    },
    opinion: {
        flex: 0.5,
        backgroundColor: '#f5f5f5',
        shadowColor: "black",
        // height: '25%',
        borderRadius: 30,
        margin: 20,
    },
    recentEmail: {
        flex: 0.5,
        backgroundColor: '#30a25e',
        shadowColor: "black",
        // height: '25%',
        borderRadius: 30,
        margin: 20,
    },
    textRecentEmail: {
        alignSelf: 'center',
        marginTop: 10,
        color: '#fff',
        fontWeight: 'bold',

    },
    numberMail: {
        alignSelf: 'flex-end',
        position: 'absolute',
    },
    textOpinion: {
        alignSelf: 'center',
        marginTop: 10,
        fontWeight: 'bold',
    },
    scdContainer: {
        // height: '20%'
    },
    Calendar: {
        flex: 1,
        // alignItems:'center',
        // backgroundColor: '#30a25e',
        shadowColor: "black",
        // height: '75%',
        borderRadius: 30,
        // margin: 20,
    },

});
export default Home;
