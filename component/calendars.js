import React from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import _ from 'lodash';

const Calendars = () => {
    LocaleConfig.locales['fr'] = {
        monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
        dayNames: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
        dayNamesShort: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
        today: 'Aujourd\'hui'
    };
    LocaleConfig.defaultLocale = 'fr';
    return (
    <Calendar
        style={{
            borderRadius: 30,
            height: 325,
        }}
        theme={{
            'stylesheet.calendar.header': {
                dayTextAtIndex0 : { 
                    color : '#805810' 
                  } , 
                  dayTextAtIndex6 : { 
                    color : 'blue' 
                  },
                week: {
                    marginTop: 0,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }
            },
            // backgroundColor: '#ffffff',
            // calendarBackground: '#f5f5f5',
            textSectionTitleColor: '#b6c1cd',
            // textSectionTitleDisabledColor: '#d9e1e8',
            selectedDayBackgroundColor: '#30a25e',
            selectedDayTextColor: '#30a25e',
            todayTextColor: '#10d20e',
            dayTextColor: '#1d5060',
            // textDisabledColor: '#d9e1e8',
            dotColor: '#30a25e',
            selectedDotColor: '#30a25e',
            arrowColor: '#157397',
            // disabledArrowColor: '#d9e1e8',
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
            dayTextAtIndex1 : '#805810',
        }}
        markedDates={{
            '(day) => dateString': { selected: true, marked: false, selectedColor: 'green' },
            onDayPress: { marked: true },
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
        // Activer le défilement horizontal, default = false 
        //horizontal={false}
        // Activer la pagination sur horizontal, default = false 
        //pagingEnabled={false}
    />
    );
};
export default Calendars;



