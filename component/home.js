import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, StatusBar } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Calendar, Agenda, LocaleConfig } from "react-native-calendars";

const Home = () => {
    LocaleConfig.locales['fr'] = {
        monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
        dayNames: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
        dayNamesShort: ['Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.', 'Dim.'],
        today: 'Aujourd\'hui'
    };
    LocaleConfig.defaultLocale = 'fr';
    return (
        <View style={styles.baseContainer}>
            <Image style={styles.logo} source={require('../assets/images/logo-text.png')} />
            <ScrollView style={styles.container}>
                <View style={[styles.quotes, { flexDirection: 'row' }]}>
                    <FontAwesome name="quote-left" size={20} color="black" />
                    <Text style={styles.textQuotes}>Tout est possible à qui ose, travail et n'abandonne jamais. -Xavier Dolan-</Text>
                    {/* <Text style={styles.autorsQuotes}>-Xavier Dolan-</Text> */}
                    <FontAwesome name="quote-right" size={20} color="black" />
                </View>
                <View style={{ backgroundColor: '#b6c1cd', width: '90%', height: 2, alignSelf: 'center', marginTop: 15 }}></View>
                <View style={[styles.firstContainer, { flexDirection: 'row' }]}>
                    <View style={styles.opinion}>
                        <Text style={styles.textOpinion}>Avis clients</Text>
                    </View>
                    <View style={styles.recentEmail}>
                        <Text style={styles.textRecentEmail}>Derniers E-mails</Text>
                        <FontAwesome style={styles.logoEmail} name="envelope" size={24} color="white" />
                    </View>
                </View>
                <View style={[styles.scdContainer, { flexDirection: 'row' }]}>
                    <View style={styles.Calendar}>
                        <Calendar
                            style={{
                                borderRadius: 30,
                                height: 325,
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
                                '(day) => dateString': { selected: true, marked: false, selectedColor: 'green' },
                                '2021-05-17': { marked: true },
                                '2021-05-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
                                '2021-05-19': { disabled: true, disableTouchEvent: true }
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
                         futureScrollRange={24} */
                        />
                        <Agenda
                            // La liste des éléments qui doivent être affichés dans l'agenda. Si vous voulez rendre l'élément comme une date vide 
                            // la valeur de la clé de date doit être un tableau vide []. S'il n'existe aucune valeur pour la clé de date, il est 
                            // considéré que la date en question n'est pas encore chargée 
                            items={{
                                '2021-05-22': [{ name: 'item 1 - any js object' }],
                                ' 23/05/2012 ': [{ name: ' item 2 - any js object ', height: 80 }],
                                ' 2021-05-24 ': [],
                                '2021-05-25': [{ name: 'item 3 - any js object' }, { name: 'any js object' }]
                            }}
                            // Rappel qui est appelé lorsque les éléments d'un certain mois devraient être chargé (le mois est devenu visible) 
                            loadItemsForMonth={(month) => { console.log('trigger items loading') }}
                            // Rappel qui se déclenche lorsque le calendrier est ouvert ou fermé 
                            onCalendarToggled={(calendarOpened) => { console.log(calendarOpened) }}
                            // Rappel qui est appelé le jour press 
                            onDayPress={(day) => { console.log('day pressed') }}
                            // Rappel qui est appelé lorsque le jour change tout en faisant défiler la liste de l'agenda 
                            onDayChange={(day) => { console.log('jour changé') }}
                            // Jour 
                            selected={}
                            // Date minimum pouvant être sélectionnée, les dates antérieures à minDate seront grisées. Par défaut = undefined 
                            minDate={'2020-01-01'}
                            // Date maximum pouvant être sélectionnée, les dates après maxDate seront grisées. Valeur par défaut= undefined 
                            maxDate={'2023-01-01'}
                            // Nombre maximal de mois autorisé pour faire défiler vers le passé.{50}
                            //  Nombre maximal de mois autorisés à défiler vers le futur. Valeur par défaut = 50 
                            futureScrollRange={50}
                            // Spécifiez comment chaque élément doit être rendu dans l'agenda
                            renderItem={(item, firstItemInDay) => { return (<View />); }}
                            // Spécifiez comment chaque date doit être rendue. jour peut être indéfini si l'élément n'est pas le premier ce jour-là.
                            renderDay={(day, item) => { return (<View />); }}
                            // Spécifie comment le contenu de date vide sans élément doit être rendu.
                            renderEmptyDate={() => { return (<View />); }}
                            // Spécifie à quoi le bouton d'agenda doit ressembler à
                            renderKnob={() => { return (<View />); }}
                            // Spécifiez ce qui doit être rendu à la place de ActivityIndicator
                            renderEmptyData={() => { return (<View />); }}
                            // Spécifiez votre fonction de comparaison d'éléments pour augmenter les performances
                            rowHasChanged={(r1, r2) => { return r1.texte !== r2.text }}
                            // Cacher le bouton de la molette. Valeur par défaut= false 
                            hideKnob={true}
                            // Par défaut, les dates de l'agenda sont marquées si elles comportent au moins un élément, mais vous pouvez le remplacer si nécessaire
                            markedDates={{
                                '2012-05-16': {selected: true, marked: true},
                                '2012-05-17': {marked: true},
                                '2012-05-18': {disabled: true}
                              }}
                            // Si désactivéByDefault = {true} dates marquées comme non désactivé sera activé. Default = false
                            disabledByDefault={true}
                            // Si fourni, un RefreshControl standard sera ajouté pour la fonctionnalité "Pull to Refresh". Assurez-vous également de régler correctement l'hélice de rafraîchissement.
                            onRefresh={() => console.log('refreshing ...')}
                            // Définissez ceci sur true en attendant de nouvelles données à partir d'une actualisation.
                            Refreshing={false}
                            // Ajoutez un composant RefreshControl personnalisé, utilisé pour fournir une fonctionnalité d'extraction pour actualiser le ScrollView.
                            refreshControl={null}
                            // Thème du thème de l' agenda
                            theme={{
                                // ...calendarTheme,
                                agendaDayTextColor: 'yellow',
                                agendaDayNumColor: 'green',
                                agendaTodayColor: 'red',
                                agendaKnobColor: 'blue'
                            }}
                        // Style de style de conteneur d'agenda = {{}}
                        />
                    </View>
                </View>
                <View style={[styles.thirdContainer, { flexDirection: 'row' }]}>
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
}

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
        resizeMode: "cover",
    },
    quotes: {
        marginTop: 20,
        alignSelf: 'center'
    },
    textQuotes: {
        flex: 0.8,
        alignItems: 'center'
    },
    firstContainer: {
        height: 200,
        resizeMode: "cover",

    },
    opinion: {
        flex: 0.5,
        backgroundColor: '#f5f5f5',
        shadowColor: "black",
        // height: '25%',
        borderRadius: 30,
        margin: 10,
        resizeMode: "cover",
        overflow: 'hidden'


    },
    recentEmail: {
        flexDirection: 'row',
        flex: 0.5,
        backgroundColor: '#30a25e',
        shadowColor: "black",
        // height: '25%',
        borderRadius: 30,
        margin: 10,

    },
    textRecentEmail: {
        alignSelf: 'center',
        marginTop: 10,
        color: '#fff',
        fontWeight: 'bold',

    },
    logoEmail: {
        textAlignVertical: 'bottom',
        alignSelf: 'flex-end',
        // position:'absolute'
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
        alignSelf: 'center',
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
        backgroundColor: '#f5f5f5',
        shadowColor: "black",
        // height: '25%',
        borderRadius: 30,
        margin: 10,
        resizeMode: "cover",
        overflow: 'hidden'

    },
    firstRdv: {
        height: '40%',
        backgroundColor: '#30a25e',
        borderRadius: 30,
        borderBottomRightRadius: 0,
    },
    textRdv: {
        alignSelf: 'center',
        marginTop: 10,
        color: '#fff',
        fontWeight: 'bold',

    }
});
export default Home;
