// import React, { useState } from "react";
// import { Calendar, LocaleConfig } from "react-native-calendars";
// import _ from 'lodash';

//

// const initialDate = Date;
// const Calendars = () => {
//     LocaleConfig.locales['fr'] = {
//         monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
//         monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
//         dayNames: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
//         dayNamesShort: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
//         today: 'Aujourd\'hui'
//     };
//     LocaleConfig.defaultLocale = 'fr';

//     const [selected, setSelected] = useState(initialDate);
//     const markedDates = {
//         [selected]: {
//             selected: true,
//             selectedColor: '#30a25e'
//         }
//     };

//     const onDayPress = day => {
//         setSelected(day.dateString);
//     };
//     return (
//         <Calendar
//             style={{
//                 borderRadius: 30,
//                 height: 325,
//             }}
//             theme={{
//                 'stylesheet.calendar.header': {
//                     week: {
//                         marginTop: 0,
//                         flexDirection: 'row',
//                         justifyContent: 'space-between'
//                     }
//                 },
//                 // backgroundColor: '#ffffff',
//                 // calendarBackground: '#f5f5f5',
//                 textSectionTitleColor: '#b6c1cd',
//                 // textSectionTitleDisabledColor: '#d9e1e8',
//                 selectedDayBackgroundColor: '#30a25e',
//                 selectedDayTextColor: '#30a25e',
//                 todayTextColor: '#10d20e',
//                 dayTextColor: '#1d5060',
//                 // textDisabledColor: '#d9e1e8',
//                 dotColor: '#30a25e',
//                 selectedDotColor: '#30a25e',
//                 arrowColor: '#157397',
//                 // disabledArrowColor: '#d9e1e8',
//                 monthTextColor: '#157347',
//                 indicatorColor: '#157347',
//                 textDayFontFamily: 'monospace',
//                 textMonthFontFamily: 'monospace',
//                 textDayHeaderFontFamily: 'monospace',
//                 textDayFontWeight: '300',
//                 textMonthFontWeight: 'bold',
//                 textDayHeaderFontWeight: '300',
//                 textDayFontSize: 16,
//                 textMonthFontSize: 16,
//                 textDayHeaderFontSize: 16,
//                 dayTextAtIndex1: '#805810',
//             }}

//             markedDates={markedDates}
//             // Mois visible initialement. Valeur par défaut = Date ()
//             Date
//             // Date minimum pouvant être sélectionnée, les dates antérieures à minDate seront grisées. Par défaut = undefined
//             minDate={'2020-01-01'}
//             // Date maximum pouvant être sélectionnée, les dates après maxDate seront grisées. Default = undefined
//             maxDate={'2023-01-01'}
//             // Handler which gets executed on day press. Default = undefined
//             onDayPress={onDayPress}
//             // Handler which gets executed on day long press. Default = undefined
//             onDayLongPress={(day) => { console.log('long selected day', day) }}
//             // Format du mois dans le titre du calendrier. Mise en forme des valeurs: http://arshaw.com/xdate/#Formatting
//             monthFormat={'MMMM yyyy'}
//             // Gestionnaire qui est exécuté lorsque le mois visible change dans le calendrier.
//             onMonthChange={(month) => { console.log('month changed', month) }}
//         // Activer le défilement horizontal, default = false 
//         //horizontal={false}
//         // Activer la pagination sur horizontal, default = false 
//         //pagingEnabled={false}
//         />
//     );
// };
// export default Calendars;

import React from "react";
import { View, Text } from "react-native";
import { Agenda } from "react-native-calendars";

const Agendas = () => {
    return (
<Agenda
    // La liste des éléments qui doivent être affichés dans l'agenda. Si vous voulez rendre l'élément comme une date vide 
    // la valeur de la clé de date doit être un tableau vide []. S'il n'existe aucune valeur pour la clé de date, il est 
    // considéré que la date en question n'est pas encore chargée 
    items={{
        '2021-06-22': [{ name: 'item 1 - any js object' }],
        '23/06/2021': [{ name: ' item 2 - any js object ', height: 80 }],
        '2021-06-24': [],
        '2021-06-25': [{ name: 'item 3 - any js object' }, { name: 'any js object' }]
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
    // selected={}
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
    renderKnob={() => { return (<Text>Voir plus</Text>); }}
    // Spécifiez ce qui doit être rendu à la place de ActivityIndicator
    renderEmptyData={() => { return (<View />); }}
    // Spécifiez votre fonction de comparaison d'éléments pour augmenter les performances
    rowHasChanged={(r1, r2) => { return r1.texte !== r2.text }}
    // Cacher le bouton de la molette. Valeur par défaut= false 
    hideKnob={false}
    // Par défaut, les dates de l'agenda sont marquées si elles comportent au moins un élément, mais vous pouvez le remplacer si nécessaire
    markedDates={{
        '2012-05-16': {selected: true, marked: true},
        '2012-05-17': {marked: true},
        '2012-05-18': {disabled: true}
        }}
    // Si désactivéByDefault = {true} dates marquées comme non désactivé sera activé. Default = false
    disabledByDefault={false}
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
style={{height:325}}
/> 
    );
};
export default Agendas;



